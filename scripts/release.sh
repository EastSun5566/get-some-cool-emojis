#!/bin/sh

# abort on errors
set -e

echo "check out & sync master"
git checkout master
git pull

echo "bump version & tag"
npx standard-version

echo "push tag"
git push --follow-tags

git checkout -
