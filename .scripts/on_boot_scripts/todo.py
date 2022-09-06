#!/usr/bin/env python3

import os
import time

TODO_FILE = "~/todo.org"

def get_bullet_point_item(string):
    i = 1
    s = string.strip()
    for char in s[0:]:
        if char != ' ':
            break;
        i += 1

    return s[i:].strip()


def parse_todo_file(file):
    items = []
    fpath = os.path.expanduser(file)
    with open(fpath, 'r') as f:
        for line in f:
            if line.strip().startswith('-'):
                item = get_bullet_point_item(line)
                items.append(item)

    return items


def get_todo_str_from_list(todo_list):
    string = ''
    for item in todo_list:
        string += '\- ' # '-' needs to be escaped for os.system() call
        string += item
        string += '\n'

    return string


def main():
    print("todo reminder started!")
    print('\007') # sound

    todo_list = parse_todo_file(TODO_FILE)

    if len(todo_list) == 0:
        print("no todo items!")
        return

    todo_string = get_todo_str_from_list(todo_list)
    print(todo_string)

    os.system('notify-send "ToDo" "%s"' % todo_string)


if __name__=="__main__":
    main()
