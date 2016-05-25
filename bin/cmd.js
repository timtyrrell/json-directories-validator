#!/usr/bin/env node

'use strict'

const path = require('path')
const baseDir = path.join(process.cwd(), process.argv[2])
const validator = require('../')(baseDir)
