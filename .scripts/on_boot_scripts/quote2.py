#!/usr/bin/env python3

import os
import subprocess
from bs4 import BeautifulSoup

quote_website = "https://www.brainyquote.com/quote_of_the_day"

html, err = subprocess.Popen(['wget', '-O', '-', quote_website], stdout=subprocess.PIPE).communicate()
parsed_html = BeautifulSoup(html, features="lxml")

quote_div = parsed_html.body.findAll('div', {"class" : "qotd-wrapper-cntr"})[1]
quote     = quote_div.find('a', {"class" : "oncl_q"}).text
author    = quote_div.find('a', {"class" : "oncl_a"}).text

os.system('notify-send "Quote of the Day:" "<b><i>{q}</i></b>\n— {a}"'.format(q = quote, a = author))

#print('\007') # sound
