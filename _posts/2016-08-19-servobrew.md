---
layout: post2
title: "Servo homebrew nightly buids"
permalink: e/servobrew
comments: false
mozilla: true
---

# Servo binaries available via Homebrew

See [github.com/servo/homebrew-servo](https://github.com/servo/homebrew-servo)

    $ brew install servo/servo/servo-bin
    $ servo -w http://servo.org # See `servo --help`

Update (every day):

    $ brew update && brew upgrade servo-bin

Switch to older version (earliest version being 2016.08.19):

    $ brew switch servo-bin YYYY.MM.DD

File issues specific to the Homebrew package [here](https://github.com/servo/homebrew-servo/issues),
and Servo issues [here](https://github.com/servo/servo/issues).

This package comes without browserhtml.
