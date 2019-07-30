c.session.lazy_restore= True; # load a restored tab as soon as it takes focus

import subprocess
def read_xresources(prefix):
    props = {}
    x = subprocess.run(['xrdb', '-query'], stdout=subprocess.PIPE)
    lines = x.stdout.decode().split('\n')
    for line in filter(lambda l : l.startswith(prefix), lines):
        prop, _, value = line.partition(':\t')
        props[prop] = value
    return props
xresources = read_xresources('*')

#
#   SETTINGS
#

# GENERAL
c.url.searchengines = {"DEFAULT": "https://startpage.com/do/asearch?q={}"}
c.auto_save.session = True;
c.tabs.background   = True;
c.content.pdfjs     = True;
c.tabs.padding      = {"bottom": 3, "left": 5, "right": 5, "top": 3}


# FONTS
c.fonts.statusbar           = '10pt SFNS Display'
c.fonts.completion.category = 'bold 10pt SFNS Display'
c.fonts.tabs                = '10pt SFNS Display'
c.fonts.downloads           = '10pt SFNS Display'
c.fonts.completion.entry    = '10pt SFNS Display'
c.fonts.hints               = 'bold 10pt SFNS Display'
c.fonts.keyhint             = 'bold 10pt SFNS Display'
c.fonts.messages.info       = '10pt SFNS Display'
c.fonts.web.family.standard = 'SFNS Display'

# COLORS
#   BACKGROUNDS
#c.colors.statusbar.normal.bg    =   'qlineargradient(x1:0, y1:0.5, x2:1, y2:0.5, stop:0 %s, stop:1 %s)' % (xresources['*color4'], xresources['*color2'])
c.colors.statusbar.normal.bg = xresources['*color2']
c.colors.statusbar.insert.bg    =   xresources['*color4']
c.colors.tabs.even.bg           =   xresources['*color0']
c.colors.tabs.odd.bg            =   xresources['*color0']
c.colors.tabs.selected.odd.bg   =   xresources['*color2']
c.colors.tabs.selected.even.bg  =   xresources['*color2']
c.colors.messages.error.bg      =   xresources['*color6']
c.colors.messages.error.border  =   'qlineargradient(x1:0, y1:0.5, x2:1, y2:0.5, stop:0 %s, stop:1 %s)' % (xresources['*color4'], xresources['*color1'])
c.colors.downloads.stop.bg      =   xresources['*color6']
c.colors.downloads.start.bg     =   xresources['*color3']

c.colors.prompts.bg             =   xresources['*color0']
c.colors.prompts.border         =   'none' # 1px solid gray
c.colors.prompts.selected.bg    =   xresources['*color2']

c.colors.statusbar.command.bg           =   xresources['*color0']
c.colors.completion.match.fg            =   xresources['*color1']
c.colors.completion.scrollbar.bg        =   xresources['*color0']
c.colors.completion.scrollbar.fg        =   xresources['*color0']
c.colors.completion.even.bg             =   xresources['*color0']
c.colors.completion.odd.bg              =   xresources['*color0']
c.colors.completion.item.selected.bg    =   xresources['*color2']
c.colors.completion.item.selected.border.top = xresources['*color0']
c.colors.completion.item.selected.border.bottom = xresources['*color0']
c.colors.completion.item.selected.fg    =   "#FFFFFF"
c.colors.completion.category.fg         =   xresources['*color2']
c.colors.completion.category.bg         =   xresources['*color0']
c.colors.completion.category.border.bottom  =   xresources['*color2']
c.colors.completion.category.border.top     =   "#00000000"

# URLS
c.colors.statusbar.url.fg               =   "#FFFFFF"
c.colors.statusbar.url.hover.fg         =   "#FFFFFF"
c.colors.statusbar.url.success.http.fg  =   "#FFFFF0"
c.colors.statusbar.url.success.https.fg =   "#FFFFFF"
c.colors.statusbar.url.warn.fg          =   "#EE3B3B"

# HINTS
c.colors.hints.bg               =   xresources['*color0']
c.hints.border                  =   'none'
c.colors.hints.fg               =   'white'
c.colors.hints.match.fg         =   xresources['*color3']


#   OTHER
c.colors.tabs.indicator.start   =   xresources['*color2']
c.colors.tabs.indicator.stop    =   xresources['*color2']

c.tabs.favicons.show = 'never'

c.completion.web_history.max_items = 7

config.bind("tL", "open https://outline.com/{url}")
config.bind("ewe", "open -t https://www.youtube.com/watch?v=v8E3oPKvYqY&list=PLfj90-UgpyHDgpVaQNPJGSeKv1fZdiueC&index=62")
