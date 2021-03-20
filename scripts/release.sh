#!/bin/sh

set -e

echo "check out & sync master"
git checkout master
git pull

echo "bump version & tag"
npx standard-version

echo "push tag"
git push --follow-tags

# let ci publish
# npm publish

git checkout -
