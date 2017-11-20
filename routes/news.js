const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', function (req, res, next) {
  var deviceAgent = req.headers['user-agent'].toLowerCase()
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/)
  if (agentID) {
    res.render('phoneNews', {title: '赳赳新闻', layout: 'phoneLayout'})
  } else {
    router.get('/:size/:num', async (req, res, next) => {
      let pageSize = req.params.size
      let pageNum = req.params.num
      try {
          // 并发控制
        let r1Promise = axios.get('http://172.16.20.213:8081/cms/article/getarticleall', {timeout: 2000})
        let r1 = await r1Promise
        console.log(r1.data.data.result[0])
        res.render('newsDetail', {title: '赳赳新闻', r1: r1.data.data.result[0].content})
      } catch (err) {
      }
      console.error(err.message)
    })
    // res.render('news', {title: '赳赳新闻'})
  }
})

// router.get('/*', function (req, res, next) {
//   let id = req.path.split('/')[1]
//   res.render('news' + id, {title: '赳赳新闻'})
// })

// router.get('/detail/:size/:num', async (req, res, next) => {
//     // let id = req.params.id
//   let pageSize = req.params.size
//   let pageNum = req.params.num
//   try {
//     console.log((new Date()).toLocaleTimeString() + ' begin api request')
//       // 并发控制
//     let r1Promise = axios.get('http://172.16.20.213:8081/cms/article/getarticleall', {timeout: 2000})
//       // let r2Promise = axios.get('http://localhost:8080', {timeout: 2000})
//     let r1 = await r1Promise
//       // console.log((new Date).toLocaleTimeString() + ' api 1 done')
//       // let r2 = await r2Promise
//     console.log((new Date()).toLocaleTimeString() + ' api 2 done')
//     console.log('end api request')
//     console.log(r1.data.data.result[0])
//       // console.log(r2.data)
//     res.render('newsDetail', {title: '赳赳新闻', r1: r1.data.data.result[0].content})
//     console.log('render the page')
//   } catch (err) {
//     console.error(err.message)
//   }
// }
// )
router.get('/detail/:id', async (req, res, next) => {
  let id = req.params.id
  try {
    // 并发控制
    let r1Promise = axios.get('http://172.16.20.213:8081/cms/article/echo_article/' + id, {timeout: 2000})
    let r1 = await r1Promise
    console.log(r1.data.data.content)
    res.render('newsDetail', {title: '赳赳新闻', r1: r1.data.data.content})
    console.log('render the page')
  } catch (err) {
    console.error(err.message)
  }
}
)

module.exports = router
