#!/usr/bin/env node

'use strict'

const path = require('path')
if(process.argv.length < 3) {
  const help = "\
    Add the base directory to the end of the command, Example:\n\
    \n\
    json-directories-validator locales"
  console.error(help)
} else {
  const baseDir = path.resolve(process.argv[2])
  const validator = require('../')(baseDir)
}
