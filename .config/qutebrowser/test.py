#!/usr/bin/env python3

import json

colors = None
with open('opencolor.json') as f:
    colors = json.loads(f.read())

def getcolor(name):

    index = int(name[len(name)-1])

    colname = ""
    for i in range(0, len(name)-1):

        if (name[i] == '-'):
            break

        colname += name[i]

    color = colors[colname][index]

    return color


print(getcolor("pink-9"))
