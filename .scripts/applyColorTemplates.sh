#!/usr/bin/env bash

TEMPLATE_DIR=~/.templates
CONFIG_FILE=~/.colorscheme
INJECTOR=~/.scripts/colorInjector.py

"$INJECTOR" ~/.config/kitty/kitty_colors.conf "$TEMPLATE_DIR/kitty/kitty_colors.template" "$CONFIG_FILE"
"$INJECTOR" ~/.Xresources "$TEMPLATE_DIR/Xresources.template" "$CONFIG_FILE"
"$INJECTOR" ~/.config/rofi/colors.rasi "$TEMPLATE_DIR/rofi/colors.rasi.template" "$CONFIG_FILE"