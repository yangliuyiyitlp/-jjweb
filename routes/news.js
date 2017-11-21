const express = require('express')
const router = express.Router()
const axios = require('axios')
const baseUrl = 'http://172.16.20.213:8081'

router.get('/:num/:size', async (req, res, next) => {
  let pageSize = req.params.size   // 获取占位符参数
  let pageNum = req.params.num
  let deviceAgent = req.headers['user-agent'].toLowerCase()    // 判断打开网页的终端
  let agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  try {
    let r1Promise = axios.get(baseUrl + '/cms/article/getarticleall', {timeout: 2000}) // 获取新闻列表
    let r1 = await r1Promise
    console.log(r1.data)
    if (!agentID) {
      if (r1.data.code !== 200) {
        res.render('error', {title: '返回异常', layout: 'phoneLayout', message: r1.data.msg, status: r1.data.code})
      } else {
        var contentStr = ''
        for (var i = 1; i < r1.data.data.result.length; i++) {
          contentStr = contentStr + '<div class="article1"><p class="atitle">' + r1.data.data.result[i].title + '</p>' +
            '<p class="adetail">作者：<span>' + r1.data.data.result[i].createBy + '</span>来源：<span>' + r1.data.data.result[i].copyfrom + '</span>发布时间：<span>2017年6月15日</span></p>' +
            '<p class="acontent">' + r1.data.data.result[i].createBy + '</p>' +
            '<a class="areadmore" href="/news/detail/' + r1.data.data.result[i].id + '">阅读原文→</a></div>'
        }
        res.render('news', {title: '赳赳新闻', content: contentStr})
      }
    } else {
      res.render('phoneNews', {title: '赳赳新闻', layout: 'phoneLayout'})
    }
  } catch (err) {
    console.error(err.message)
    if (!agentID) {
      res.render('error', {title: '网络错误', message: err.message, status: err.status, stack: err.stack})
    } else {
      res.render('error', {title: '网络错误', layout: 'phoneLayout', message: err.message, status: err.status, stack: err.stack})
    }
  }
})

router.get('/detail/:id', async (req, res, next) => {
  let id = req.params.id   // 获取占位符参数
  let deviceAgent = req.headers['user-agent'].toLowerCase()    // 判断打开网页的终端
  let agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  try {
    let r1Promise = axios.get(baseUrl + '/cms/article/echo_article/' + id, {timeout: 2000})  // 获取文章内容
    let r1 = await r1Promise
    console.log(r1.data.data.content)
    if (!agentID) {
      res.render('newsDetail', {title: '赳赳新闻', r1: r1.data.data.content})
    } else {
      res.render('newsDetail', {title: '赳赳新闻', r1: r1.data.data.content})
    }
  } catch (err) {
    console.error(err.message)
    if (!agentID) {
      res.render('error', {title: '网络错误', message: err.message, status: err.status, stack: err.stack})
    } else {
      res.render('error', {title: '网络错误', layout: 'phoneLayout', message: err.message, status: err.status, stack: err.stack})
    }
  }
})

module.exports = router
