#!/usr/bin/env python3

#
# toggle button logic for use with polybar
# 2022
#

import signal
import time
import os
import subprocess

BLOCKER_SCRIPT = os.path.expanduser('~/.scripts/productivity_blocker.py')

def get_polybar_color_formatted(string, fg_color, bg_color):
    return '%%{F%s}%%{B%s}%s%%{B-}%%{F-}' % (fg_color, bg_color, string)

def block():
    #s = get_polybar_color_formatted('', '${color.shade3}', '${color.bg}') # doesn't work with config color variables :/
    #print('   ', flush = True)
    print('   ', flush = True)
    subprocess.call([BLOCKER_SCRIPT, '--block'], stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)


def unblock():
    print('   ', flush = True)
    subprocess.call([BLOCKER_SCRIPT, '--unblock'], stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)


def toggle_handler(sig, frame):
    if 'blocked' not in toggle_handler.__dict__:
        toggle_handler.blocked = False

    if toggle_handler.blocked:
        toggle_handler.blocked = False
        unblock()
    else:
        toggle_handler.blocked = True
        block()


def cleanup(sig, frame):
    unblock()
    exit()


signal.signal(signal.SIGUSR1, toggle_handler)
signal.signal(signal.SIGTERM, cleanup)
signal.signal(signal.SIGINT, cleanup)

unblock()
while True:
    signal.pause()
