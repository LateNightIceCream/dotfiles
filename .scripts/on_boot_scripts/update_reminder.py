#!/usr/bin/env python3

import os
import subprocess

print('\007') # sound

updates, err = subprocess.Popen(['eopkg','lu'], stdout=subprocess.PIPE).communicate()
updateCount  = len(updates.splitlines())

os.system('notify-send "{n} Updates" "There are {n} available package updates"'.format(n = updateCount))
