#!/usr/bin/env python3

import argparse

parser = argparse.ArgumentParser(description='blocks / unblocks distracting things')
parser.add_argument('--block', action='store_true')
parser.add_argument('--unblock', dest='block', action='store_false')
parser.set_defaults(block=True)

# ------------------------------------------------------------------------------

QUTEBROWSER_BLOCKED_HOSTS_FILE = '/home/zamza/.config/qutebrowser/blocked-hosts'
BLOCKED_WEBSITES = ['www.reddit.com']

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

if __name__ == '__main__':
    args = parser.parse_args()

    if args.block == True:
        block_sites_qutebrowser(BLOCKED_WEBSITES)
    else:
        unblock_sites_qutebrowser(BLOCKED_WEBSITES)
