const express = require('express')
const router = express.Router()

function getAgentID (req) {
  let deviceAgent = req.headers['user-agent'].toLowerCase()    // 判断打开网页的终端
  let agentId = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  return agentId
}
router.get('/', function (req, res, next) {
  // TODO: 判断用户UA，如果是手机用户，跳转到m.99bicycle.com
  let agentID = getAgentID(req)
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
router.get('/rechargeAggrement', function (req, res, next) {
  res.render('rechargeAggrement', {layout: false})
})
router.get('/aboutus', function (req, res, next) {
  let agentID = getAgentID(req)
  if (agentID) {
    res.render('phoneAboutus', {title: '关于赳赳', layout: 'phoneLayout'})
  } else {
    res.render('aboutus', {title: '关于赳赳'})
  }
})
router.get('/download', function (req, res, next) {
  res.render('download', {title: '下载APP', layout: false})
})
router.get('/phoneDownload', function (req, res, next) {
  res.render('phoneDownload', {title: '下载APP', layout: 'phoneLayout'})
})
router.get('/phoneNews', function (req, res, next) {
  res.render('phoneNewsdetail', {title: '赳赳新闻', layout: 'phoneLayout'})
})
module.exports = router
