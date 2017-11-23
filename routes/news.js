const express = require('express')
const router = express.Router()
const axios = require('axios')
const baseUrl = require('./config/baseUrl-test.json')

function getAgentID (req) {
  let deviceAgent = req.headers['user-agent'].toLowerCase()    // 判断打开网页的终端
  let agentId = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  return agentId
}
function errorOpration (req, res, code) {
  let agentID = getAgentID(req)
  if (code === 500) {
    if (!agentID) {
      res.render('404', {title: '网络错误'})
    } else {
      res.render('phone404', {title: '网络错误', layout: 'phoneLayout'})
    }
  } else {
    if (!agentID) {
      res.render('500', {title: '返回异常'})
    } else {
      res.render('phone500', {title: '返回异常', layout: 'phoneLayout'})
    }
  }
}
Date.prototype.toLocaleString = function () { // 重写时间转化方法
  return this.getFullYear() + '年' + (this.getMonth() + 1) + '月' + this.getDate() + '日 '
}
router.get('/list/:num/:size', async (req, res, next) => {
  let pageSize = req.params.size   // 获取占位符参数
  let pageNum = req.params.num
  let agentID = getAgentID(req)
  try {
    console.log(baseUrl)
    let r1Promise = axios.get(`${baseUrl.newsUrl}/cms/article/getarticleall`, {timeout: 10000}) // 获取新闻列表
    let r1 = await r1Promise
    console.log(r1.data)
    if (r1.data.code !== 200) {
      errorOpration(req, res, r1.data.code)
    } else {
      let contentStr = ''
      for (let i = 1; i < r1.data.data.result.length; i++) {
        let unixTimestamp = new Date(r1.data.data.result[i].updateDate)
        let commonTime = unixTimestamp.toLocaleString()
        contentStr = contentStr + '<div class="article1"><p class="atitle">' + r1.data.data.result[i].title + '</p>' +
          '<p class="adetail">作者：<span>' + r1.data.data.result[i].createBy + '</span>来源：<span>' + r1.data.data.result[i].copyfrom + '</span>发布时间：<span>' + commonTime + '</span></p>' +
          '<p class="acontent">' + r1.data.data.result[i].createBy + '</p>' +
          '<a class="areadmore" href="/news/detail/' + r1.data.data.result[i].id + '">阅读原文→</a></div>'
      }
      if (!agentID) {
        res.render('news', {title: '赳赳新闻', content: contentStr})
      } else {
        res.render('phoneNews', {title: '赳赳新闻', content: contentStr, layout: 'phoneLayout'})
      }
    }
  } catch (err) {
    console.error(err.message)
    if (!agentID) {
      res.render('404', {title: '网络错误'})
    } else {
      res.render('phone404', {title: '网络错误', layout: 'phoneLayout'})
    }
  }
})

router.get('/detail/:id', async (req, res, next) => {
  let id = req.params.id   // 获取占位符参数
  let agentID = getAgentID(req)
  try {
    let r1Promise = axios.get(`${baseUrl.newsUrl}/cms/article/echo_article/` + id, {timeout: 10000})  // 获取文章内容
    let r1 = await r1Promise
    console.log(r1.data.data)
    if (r1.data.code !== 200) {
      errorOpration(req, res, r1.data.code)
    } else {
      let unixTimestamp = new Date(r1.data.data.updateDate)
      let commonTime = unixTimestamp.toLocaleString()
      let articleDetail = '<p class="newsTietle">' + r1.data.data.title + '</p>' +
        '<p class="newsDetail">作者：<span>' + r1.data.data.createBy + '</span>来源：<span>' + r1.data.data.copyfrom + '</span>发布时间：<span>' + commonTime + '</span></p>' +
        r1.data.data.content
      if (!agentID) {
        res.render('newsDetail', {title: '赳赳新闻', r1: articleDetail})
      } else {
        res.render('phoneNewsdetail', {title: '赳赳新闻', layout: 'phoneLayout', r1: articleDetail})
      }
    }
  } catch (err) {
    console.error(err.message)
    if (!agentID) {
      res.render('404', {title: '网络错误'})
    } else {
      res.render('phone404', {title: '网络错误', layout: 'phoneLayout'})
    }
  }
})

module.exports = router
