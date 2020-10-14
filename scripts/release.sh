#!/bin/sh

# abort on errors
set -e

echo "check out & sync master"
git checkout master
git pull

# Update & tag version
npx standard-version

echo "push tags"
git push --follow-tags

git checkout -
