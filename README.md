# Mimez

A mimetype parser

## Install

```
npm install mimez
```

## Usage

First, add your custom mimetype,

**If not match the mimetype, return the 'application/octec-stream'**

### Custom mimetype

Edit **mimetype.json**, type format like this:

"mimetype": [exts]

example:

```
"text/html": ["html", "htm"]
```

### Include

```
var mimez = require('mimez')
```

### API

By extname

```
var str = 'css'
console.log(mimez.ext(str))
```

By path

```
var str = '/root/res/style.css'
console.log(mimez.path(str))
```

By url

```
var str = 'http://example.com/welcome.htm'
console.log(mimez.url(str))
```