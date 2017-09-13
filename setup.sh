#! /bin/bash

command -v git >/dev/null 2>&1 || { echo >&2 "git is required, aborting."; exit 1; }
if [ -z "$1" ]; then
    name=newapp
else
    name=$1
fi
git clone https://github.com/umayr/koa2-kickstarter $name && cd $name && rm -rf .git setup.sh && git init;