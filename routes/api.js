const express = require('express')
const sleep = require('sleep')
const router = express.Router()


router.get('/', function (req, res, next) {
  console.log((new Date).toLocaleTimeString() + ' api 1')
  sleep.sleep(1)
  res.json({title: '大爷，常来玩呀！'})
})

router.get('/test', function (req, res, next) {
  console.log((new Date).toLocaleTimeString() + ' api 2')
  sleep.sleep(1)
  res.json({title: '赳赳单车'})
})
router.get('/project', function (req, res, next) {
  sleep.sleep(1)
  res.json({title: '赳赳新闻！'})
})

module.exports = router
