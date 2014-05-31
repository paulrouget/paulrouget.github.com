---
layout: post2
title: "keybindings"
permalink: e/keybindings
comments: true
standalone: true
mozilla: true
---

# Some unusual keybindings I use:

## tmux:

``` shell
# Shift Left/Right to switch window in tmux
bind-key -n S-Left previous-window
bind-key -n S-Right next-window
# Ctrl-A-o to highlight and open URLs
# https://github.com/dequis/tmux-url-select
bind o run /home/paul/bin/tmux-url-select.pl
```

## Firefox:

``` shell
# Vim controls:
# https://addons.mozilla.org/firefox/addon/vimfx/
Ctrl-e / Ctrl-y to scroll
Ctrl-O to highlight then open a link
```

## Mouse via keyboard:

``` shell
# Via xdotool & xbindkeys
Win-arrow to move a window
Ctrl-Win-arrow to resize a window
# Because the new Thinkpad "touchpad" sucks:
Shift-Win-arrow to move mouse
F1 left click
F2 middle click
F3 right click
```

## Vim:

``` shell
" Just <Tab> to switch buffers
nmap <Tab> :bn<CR>
nmap <S-Tab> :bp<CR>
" scroll but don't change the cursor position on screen
nnoremap <C-e> j<C-e>
nnoremap <C-y> k<C-y>
" visual command line
nnoremap ; :<c-f>
" quick move via <space>
nmap <space> <Plug>(easymotion-s2)
```

## Mutt:

``` shell
# Archive one email
macro index a "s=archives<enter>y"
# Archive whole thread
<enter-command>unset resolve<Enter><tag-thread><enter-command>set resolve<Enter><tag-prefix><save-message>=archives<Enter>y
# Delete whole thread
<enter-command>unset resolve<Enter><tag-thread><enter-command>set resolve<Enter><tag-prefix><delete-message>
```
