#!/bin/bash

for file in $(find . -type f -name "*.js"); do
	echo "";
	echo "Executando o arquivo: $file";
	CLEAR=false node --trace-exit $file;
done
