#!/bin/sh

# abort on errors
set -e

# check out & sync master
git checkout master
git pull

# Update & tag version
npx standard-version

# push update
git push --follow-tags
git checkout -
