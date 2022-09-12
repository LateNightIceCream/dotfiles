#!/usr/bin/env python3

import os
import re
import subprocess
import feedparser
from bs4 import BeautifulSoup

feed_site = 'http://feeds.pariyatti.org/dwob'
NewsFeed = feedparser.parse(feed_site)
entry = NewsFeed.entries[0]

soup = BeautifulSoup(entry.description, features="lxml")

# result should be between two links for this specific website
first = str(soup.find_all('a')[0])
second = str(soup.find_all('a')[1])
string = str(soup)

first_index = string.index(first)
second_index = string.index(second)

temp_result = string[(first_index + len(first)):second_index]

quote = temp_result.replace('<br/>', '')
quote = "".join([s for s in quote.splitlines(True) if s.strip("\r\n")])
author = entry.author

os.system('notify-send "Quote of the Day:\n" "<b><i>{q}</i></b>\n"'.format(q = quote, a = author))
