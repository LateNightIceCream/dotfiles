#!/usr/bin/env bash
#
# just a text editing thing to put thoughts quickly
# have not found a nice, clean looking program, so for
# now just using vim in a terminal with a custom kitty
# conf file to increase font size
#
# wanted feature list:
# - show / hide vim terminal using hideIt.sh and keyboard shortcut
# optional:
# - open a file with the current date, e.g. 20220310_braindump.md

FILEPATH=~/.braindump
WIDTH=453
HEIGHT=1133

sleep 2

DATE=$(date +%F)
FILE="${FILEPATH}/${DATE}_braindump.md"

if [ ! -f $FILE ]; then
    touch $FILE
    echo "_${DATE} Brain Dump!_" > $FILE
fi

kitty --class "BRAINDUMP" vim $FILE &
sleep 1
WIN_ID=$(xdotool search --onlyvisible --class BRAINDUMP)
xdotool windowsize $WIN_ID $WIDTH $HEIGHT
xdotool windowmove $WIN_ID 0 62
# can't peek negative values?
~/.scripts/hideIt.sh --class '^BRAINDUMP$' --signal --steps 24 --peek '-20'
