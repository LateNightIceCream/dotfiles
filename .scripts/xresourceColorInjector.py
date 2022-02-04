#!/usr/bin/env python3

'''
Name:        WIP.py
Description: template file + config with vars = target file
Author:      LateNightIceCream, 2022
'''

import configparser
import os
from sys import argv

CONF_FILE     = 'colors.conf'
START_MARK    = '{'
END_MARK      = '}'
CREATE_BACKUP = True


def warn(str):
    print('Warning: ' + str)

def config_all_to_dict(conf_file):
    '''
    without sections, just puts all options in one dict
    BUG: duplicate keys
    '''
    Config = configparser.ConfigParser()
    Config.read(conf_file)
    sections = Config.sections()

    dict1 = {}

    for section in sections:
        options = Config.options(section)
        try:
            for option in options:
                dict1[option] = Config.get(section, option)
            if dict1[option] == -1:
                DebugPrint('skip: %s' % option)
        except:
            print('exception on %s!' % option)
            dict1[option] = None

    return dict1


def create_backup(file):
    if os.system('cp ' + file + ' ' + file + '.backup'):
        print('Could not create backup. Does the target file exist?')


def get_target_str_from_template(template_file, conf_dict):
    with open(template_file, 'r') as temp_f:
        # TODO: maybe read lines sequentially not all at once
        lines = temp_f.readlines()

        line_index = 0
        for line in lines:
            start_mark_index = line.find(START_MARK)

            end_mark_index = None
            while(start_mark_index > 0):

                end_mark_index = line.find(END_MARK, start_mark_index + 1)
                next_start_mark_index = line.find(START_MARK, start_mark_index + 1)

                if next_start_mark_index < 0 or next_start_mark_index > end_mark_index:
                    #print("found start mark in line " + str(line_index) + " at " + str(start_mark_index))
                    #print("end mark is " + " at " + str(end_mark_index))
                    word = line[start_mark_index:end_mark_index].strip(START_MARK)
                    #print("word found: " + word)
                    try:
                        line = line[:start_mark_index] + conf_dict[word] + line[end_mark_index + 1:]
                    except:
                        warn('No definition for \'%s\' found' % word)

                start_mark_index = line.find(START_MARK, start_mark_index + 1) # has to find new bc line overriden

            lines[line_index] = line
            line_index += 1

        return ''.join(lines)


def override_target_file(target_file, str):
    with open(target_file, 'w+') as f:
        f.write(str)


def print_usage():
    print('usage: ' + argv[0] + ' target_file template_file [config_file]')


def main():

    template_file = ''
    target_file   = ''
    conf_file     = CONF_FILE

    if len(argv) < 3:
        print_usage()
        return

    target_file   = argv[1]
    template_file = argv[2]

    if len(argv) > 3:
        conf_file = argv[3]

    if CREATE_BACKUP == True:
        create_backup(target_file)

    conf_dict = config_all_to_dict(conf_file)

    filled_in_string = get_target_str_from_template(template_file, conf_dict)

    #override_target_file(target_file, filled_in_string)

    #print(filled_in_string)
    print('created \'' + target_file + '\' from \'' + template_file + '\' with \'' + conf_file + '\'')


if __name__ == "__main__":
    main()

# # In Linux/Unix
# os.system('cp source.txt destination.txt')
# # In Windows
# os.system('copy source.txt destination.txt')
