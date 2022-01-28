#!/usr/bin/env bash

rofi_command="rofi -theme themes/screenshotsmenu.rasi"

# Options
#     
screen=""
area=""
window=""
timer=""

# Variable passed to rofi
options="$screen\n$area\n$window\n$timer"

chosen="$(printf "$options" | $rofi_command -dmenu -selected-row 1)"
case $chosen in
    $screen)
        ~/.scripts/shot.sh now
        ;;
    $area)
        sleep 0.2
        ~/.scripts/shot.sh region
        ;;
    $window)
        ~/.scripts/shot.sh window
        ;;
    $timer)
        ~/.scripts/shot.sh timer 5
        ;;
esac
