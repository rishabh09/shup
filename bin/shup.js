#!/usr/bin/env node
const argv = require('yargs-parser')(process.argv.slice(2))
const ghPages = require('../lib/gh-pages')

const configFile = require(process.cwd() + '/shup.config.js')

const deployDest = argv['d']
ghPages(configFile[deployDest])
