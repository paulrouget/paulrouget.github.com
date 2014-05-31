---
layout: post2
title: "keybindings"
permalink: e/keybindings
comments: true
standalone: true
mozilla: true
---

# Some unusual keybindings I use:

kramdown
: A Markdown-superset converter

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
" Just &lt;Tab> to switch buffers
nmap &lt;Tab> :bn&lt;CR>
nmap &lt;S-Tab> :bp&lt;CR>
" scroll but don't change the cursor position on screen
nnoremap &lt;C-e> j&lt;C-e>
nnoremap &lt;C-y> k&lt;C-y>
" visual command line
nnoremap ; :&lt;c-f>
" quick move via &lt;space>
nmap &lt;space> &lt;Plug>(easymotion-s2)
```

## Mutt:

``` shell
# Archive one email
macro index a "s=archives&lt;enter>y"
# Archive whole thread
&lt;enter-command>unset resolve&lt;Enter>&lt;tag-thread>&lt;enter-command>set resolve&lt;Enter>&lt;tag-prefix>&lt;save-message>=archives&lt;Enter>y
# Delete whole thread
&lt;enter-command>unset resolve&lt;Enter>&lt;tag-thread>&lt;enter-command>set resolve&lt;Enter>&lt;tag-prefix>&lt;delete-message>
```
