let baseurl
if (process.env === 'PRODUCTION') {
  baseurl = require('./baseUrl-prod.json')
} else if (process.env === 'TEST') {
  baseurl = require('./baseUrl-test.json')
} else {
  baseurl = require('./baseUrl-dev.json')
}

module.exprots = baseurl
