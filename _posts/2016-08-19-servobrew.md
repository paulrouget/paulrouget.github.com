---
layout: post2
title: "Servo homebrew nightly buids"
permalink: e/servobrew
comments: false
mozilla: true
standalone: true
---

# Servo binaries available via Homebrew

See https://github.com/servo/homebrew-servo

    $ brew install servo/servo/servo-bin
    $ servo -w http://servo.org # See `servo --help`

Update (every day):

    $ brew update && brew upgrade servo-bin

Switch to older version (earliest version being 2016.08.19):

    $ brew switch servo-bin YYYY.MM.DD

File issues specific to the Homebrew package [here](https://github.com/servo/homebrew-servo/issue),
and Servo issues [here](https://github.com/servo/servo/issue).

This package comes without browserhtml.
