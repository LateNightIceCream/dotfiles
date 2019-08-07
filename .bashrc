#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# ---

# wallpaper setting

# random wallpaper + colors
alias wal='wal --backend wal -i ~/Pictures/Wallpapers -o ~/Projects/Scripts/walscript'

# for trying/using different backends
wal1 () {
  source ~/.cache/wal/colors.sh
  wal --backend wal -i $wallpaper
}

wal2 () {
  source ~/.cache/wal/colors.sh
  wal --backend haishoku -i $wallpaper
}

wal3 () {
  source ~/.cache/wal/colors.sh
  wal --backend colorthief -i $wallpaper
}

# ---
alias multiphi='node ~/Projects/Scripts/js\ scribbles/phi\ multiples/multiphi.js'
alias colors='~/Projects/Scripts/Color-Scripts/color-scripts/./ghosts'
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias removeOrphans='sudo pacman -Rns $(pacman -Qtdq)'

# terminal startup
(cat ~/.cache/wal/sequences &)
