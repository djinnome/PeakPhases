#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
i=0
for f in `ls -tr *.png`
do
    cp $f ProteinOscillationsWhite-`printf "%02g" $i`.png
    i=$((i+2))
done
Protein=`ls -1 ProteinOscillationsWhite-*.png`
convert -delay "100" -quality 100 -verbose $Protein ProteinOscillations150.mpg
IFS=$SAVEIFS
