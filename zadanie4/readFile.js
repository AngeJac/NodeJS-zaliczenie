const fs = require('fs')
const process = require('process')

const data = fs.readFileSync('file.js', 'utf-8')
console.log(data)
