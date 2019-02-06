#!/bin/bash
pandoc -t beamer slides.md --slide-level=2 -V theme:Boadilla -o slides.pdf
