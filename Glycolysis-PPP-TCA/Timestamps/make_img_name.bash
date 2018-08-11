#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
i=0
NAME=timestamp
for f in `ls -tr *.png`
do
    cp $f $NAME-`printf "%02g" $i`.png
    i=$((i+1))
done
#RNA=`ls -1 NAME-*.png`
#convert -delay "100" -quality 100 -verbose $RNA RNAOscillations150.mpg
ffmpeg -f image2 -r 1 -i ${NAME}_%02d.png -vcodec mpeg4 -y Gly-PPP-TCA-$NAME.mp4
IFS=$SAVEIFS
