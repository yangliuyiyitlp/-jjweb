const express = require('express')
const router = express.Router()

// TODO: 整合download项目
router.get('/download', function (req, res, next) {
  res.render('download', {title: '赳赳单车'})
})
router
module.exports = router
