#!/bin/sh

# abort on errors
set -e

cd demo

# make sure pkg is latest version
npm i get-some-cool-emojis

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy get-some-cool-emojis demo'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:EastSun5566/get-some-cool-emojis.git master:gh-pages

cd --
