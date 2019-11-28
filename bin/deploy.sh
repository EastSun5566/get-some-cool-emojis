#!/bin/sh

cd demo/

# make sure pkg is latest version
yarn add get-some-cool-emojis

# build
yarn build

# navigate into the build output directory
cd dist/
