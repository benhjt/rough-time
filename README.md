# rough-time [![Build Status](https://travis-ci.org/benhjt/rough-time.svg?branch=master)](https://travis-ci.org/benhjt/rough-time) [![Test Coverage](https://codeclimate.com/github/benhjt/rough-time/badges/coverage.svg)](https://codeclimate.com/github/benhjt/rough-time/coverage)

A simple and pointless JavaScript library for getting the "rough" time from a JavaScript Date Object. I started this
in order to follow a great [tutorial](https://github.com/filipedeschamps/rss-feed-emitter/issues/119) by 
[filipedeschamps](https://github.com/filipedeschamps/) on creating a JavaScript module from scratch in ES6, creating unit
tests which are automated using [Travis](https://travis-ci.org/) and are also used to generate a code coverage report 
using [codeclimate](https://codeclimate.com/).

## Features
* Simple interface
* Written in ES6!

## Usage

### Install

Might put this on npm soon...

### Creating an instance

```js
let RoughTime = require('rough-time');
let roughtime = new RoughTime();
```

### Getting the rough time

```js
let approxTimeString = roughtime.getRoughTime(new Date());
```

### Example output
`02:12` or `14:12` > `it is ten past two`

`11:46` or `23:46` > `it is quarter to twelve`

`03:01` or `15:01` > `it is three o'clock` etc.
