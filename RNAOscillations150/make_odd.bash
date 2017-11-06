#!/bin/bash

NAME=RNAOscillationsWhite
for i in `seq 0 2 22`
do
    j=$((i/2))
    cp $NAME-`printf %02g $i`.png Movie/$NAME-`printf %02g $j`.png
done

ffmpeg -f image2 -r 1 -i Movie/$NAME-%02d.png -vcodec mpeg4 -y Movie/$NAME.mp4
