#!/usr/bin/env python3

#
# needs sudo for disabling programs.
# As a fix, see https://unix.stackexchange.com/questions/18830/how-to-run-a-specific-program-as-root-without-a-password-prompt
#

import argparse
import subprocess

parser = argparse.ArgumentParser(description='blocks / unblocks distracting things')
parser.add_argument('--block', action='store_true')
parser.add_argument('--unblock', dest='block', action='store_false')
parser.set_defaults(block=True)

# ------------------------------------------------------------------------------

QUTEBROWSER_BLOCKED_HOSTS_FILE = '/home/zamza/.config/qutebrowser/blocked-hosts'
BLOCKED_WEBSITES = ['www.reddit.com']

BLOCKED_PROGRAMS = {
    'Discord': '/usr/bin/discord',
    'steam': '/usr/bin/steam',
}

# ------------------------------------------------------------------------------

def block_program(prog_key):
    # kill + block
    try:
        response = subprocess.check_call(['killall', prog_key])
    except subprocess.CalledProcessError as err:
        # e.g. when no process found
        response = err.returncode
    pass

def unblock_program(prog_key):
    pass

# ------------------------------------------------------------------------------

def block_sites_qutebrowser(sites):
    with open(QUTEBROWSER_BLOCKED_HOSTS_FILE, 'a') as f:
        for site in sites:
            f.write(site + '\n')


def unblock_sites_qutebrowser(sites):
    ignore = []
    with open(QUTEBROWSER_BLOCKED_HOSTS_FILE, 'r') as f:
        for line in f:
            if not line.rstrip() in sites:
                ignore.append(line)

    with open(QUTEBROWSER_BLOCKED_HOSTS_FILE, 'w') as f:
        f.writelines(ignore)

# ------------------------------------------------------------------------------

def block():
    for key in BLOCKED_PROGRAMS:
        block_program(key)

    block_sites_qutebrowser(BLOCKED_WEBSITES)

def unblock():
    for key in BLOCKED_PROGRAMS:
        unblock_program(key)

    unblock_sites_qutebrowser(BLOCKED_WEBSITES)

# ------------------------------------------------------------------------------

if __name__ == '__main__':
    args = parser.parse_args()

    if args.block == True:
        block()
    else:
        unblock()
