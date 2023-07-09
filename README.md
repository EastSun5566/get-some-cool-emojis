# Get Some Cool Emojis 🔥

[![NPM Version](https://img.shields.io/npm/v/get-some-cool-emojis.svg?style=for-the-badge)](https://www.npmjs.com/package/get-some-cool-emojis)
[![NPM Downloads](https://img.shields.io/npm/dt/get-some-cool-emojis.svg?style=for-the-badge)](https://www.npmjs.com/package/get-some-cool-emojis)
[![Build Status](https://img.shields.io/github/actions/workflow/status/EastSun5566/get-some-cool-emojis/testing.yml?style=for-the-badge)](https://github.com/EastSun5566/get-some-cool-emojis/actions/workflows/testing.yml)
[![License](https://img.shields.io/github/license/EastSun5566/get-some-cool-emojis.svg?style=for-the-badge)](https://github.com/EastSun5566/get-some-cool-emojis/blob/master/LICENSE)

> 🏭 Just generate some random Emojis 🎉✨🔧🐛💩

🔗 <https://eastsun5566.github.io/get-some-cool-emojis/>

## ✨ Installation

```sh
npm i get-some-cool-emojis
```

or

```html
<script async src="https://unpkg.com/get-some-cool-emojis"></script>
```

## 🚀 Usage

```js
import getSomeCoolEmojis from "get-some-cool-emojis";

getSomeCoolEmojis(5); // return 5 emojis 🎉✨🔧🐛💩
```

## Updating emoji data

emoji data is from [Unicode data](https://github.com/node-unicode/node-unicode-data).

```sh
# update deps
npm rm @unicode/unicode-x.x.x
npm i @unicode/unicode-x.x.x -D

# build emojis string
npm run build
```
