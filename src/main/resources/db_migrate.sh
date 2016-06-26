#!/usr/bin/env bash

CWD=$(cd `dirname $0` && pwd)

which jsawk
[[ $? -ne 0 ]] && echo "please install jsawk first. https://github.com/micha/jsawk"

cat books.json| jsawk 'this.author = this.author.join(",")' | jsawk 'this.isbn = this.isbn[0]' > books.new.json

