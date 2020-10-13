#!/bin/sh

# abort on errors
set -e

# check out & sync master
git checkout master
git pull

# Update & tag version
npm version patch

# push update
git push --follow-tags
git checkout -
