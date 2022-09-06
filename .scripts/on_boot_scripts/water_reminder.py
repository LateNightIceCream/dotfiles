#!/usr/bin/env python3

import os
import time

INT_MINS = 60 # mins

print("water reminder started!")
while (1):
    print('\007') # sound
    os.system('notify-send "Water Reminder" "Did you drink something in the last hour?"')
    time.sleep(INT_MINS * 60)
