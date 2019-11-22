#!/bin/sh

git checkout master
git pull

npm version patch

git push --follow-tags
git checkout -
