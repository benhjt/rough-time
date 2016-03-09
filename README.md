# rough-time [![Build Status](https://travis-ci.org/benhjt/rough-time.svg?branch=master)](https://travis-ci.org/benhjt/rough-time) [![Test Coverage](https://codeclimate.com/github/benhjt/rough-time/badges/coverage.svg)](https://codeclimate.com/github/benhjt/rough-time/coverage)

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
> it is ten past two
> it is quarter to twelve
> it is three o'clock
