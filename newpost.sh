#!/bin/sh

DATE=`date +"%Y-%m-%d"`
FILENAME="_posts/$DATE-FIXME.html"

echo '---
layout: post
title: "FIXME"
permalink: e/FIXME
comments: true
mozilla: true
---
' > $FILENAME

echo $FILENAME
