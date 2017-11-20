const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // TODO: 判断用户UA，如果是手机用户，跳转到m.99bicycle.com
  // function1()
  // function2()
  var deviceAgent = req.headers['user-agent'].toLowerCase()
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  if (agentID) {
    res.render('phoneHome', {title: '赳赳单车', layout: 'phoneLayout'})
  } else {
    res.render('index', {title: '赳赳单车'})
  }
})

router.get('/tech', function (req, res, next) {
  res.render('tech', {title: '赳赳科技'})
})

router.get('/brandStory', function (req, res, next) {
  res.render('brandStory', {title: '赳赳故事'})
})

router.get('/aboutUs', function (req, res, next) {
  var deviceAgent = req.headers['user-agent'].toLowerCase()
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  if (agentID) {
    res.render('phoneAboutus', {title: '关于赳赳', layout: 'phoneLayout'})
  } else {
    res.render('aboutUs', {title: '关于赳赳'})
  }
})
router.get('/download', function (req, res, next) {
  res.render('download', {title: '下载APP', layout: false})
})
router.get('/phoneDownload', function (req, res, next) {
  res.render('phoneDownload', {title: '下载APP', layout: 'phoneLayout'})
})
router.get('/phoneNews', function (req, res, next) {
  res.render('phoneNews', {title: '赳赳新闻', layout: 'phoneLayout'})
})
module.exports = router
