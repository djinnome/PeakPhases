#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
i=0
for f in `ls -tr *.png`
do
    cp $f RNAOscillationsWhite-`printf "%02g" $i`.png
    i=$((i+2))
done
RNA=`ls -1 RNAOscillationsWhite-*.png`
convert -delay "100" -quality 100 -verbose $RNA RNAOscillations150.mpg	 
IFS=$SAVEIFS
