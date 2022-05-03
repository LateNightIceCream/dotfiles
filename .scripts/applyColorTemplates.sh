#!/usr/bin/env bash

TEMPLATE_DIR=~/.templates
CONFIG_FILE=~/.colorscheme
INJECTOR=~/.scripts/colorInjector.py

"$INJECTOR" ~/.config/kitty/kitty_colors.conf "$TEMPLATE_DIR/kitty/kitty_colors.template" "$CONFIG_FILE"
"$INJECTOR" ~/.Xresources "$TEMPLATE_DIR/Xresources.template" "$CONFIG_FILE"
"$INJECTOR" ~/.config/rofi/colors.rasi "$TEMPLATE_DIR/rofi/colors.rasi.template" "$CONFIG_FILE"
"$INJECTOR" ~/.local/share/themes/Colloid-gtk-theme-template/src/sass/_color-palette-default.scss "$TEMPLATE_DIR/gtk/_color-palette-default.scss.template" "$CONFIG_FILE"
cd ~/.local/share/themes/Colloid-gtk-theme-template/
pwd
~/.local/share/themes/Colloid-gtk-theme-template/build.sh
~/.local/share/themes/Colloid-gtk-theme-template/install.sh --tweaks rimless
cd
#"$INJECTOR" ~/.templates/gtk/_color-palette-default.scss "$TEMPLATE_DIR/gtk/_color-palette-default.scss.template" "$CONFIG_FILE"
