let baseurl = {base: 'jjjj'}
if (process.env.NODE_ENV === 'PRODUCTION') {
  baseurl = require('./baseUrl-prod.json')
} else if (process.env.NODE_ENV === 'TEST') {
  baseurl = require('./baseUrl-test.json')
} else {
  baseurl = require('./baseUrl-dev.json')
}

module.exprots = baseurl
