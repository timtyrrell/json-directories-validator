#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')

module.exports = tryDir

function tryDir(dir) {
  console.error('dir', dir)
  const stats = fs.statSync(dir)
  if (stats.isDirectory()) {
    fs.readdirSync(dir).forEach((item) => {
      const fp = path.join(dir, item)
      tryDir(fp)
    })
  } else {
    if (path.extname(dir) !== '.json') return
    console.error('check', dir)
    require(dir)
  }
}
