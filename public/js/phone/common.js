$(function () {
  var common = {
    init: function () {
      var that = this
      that.commonHead()
      that.commonFoot()
      that.commonMenu()
      $('html').width($(window).width())
      let imgs = $('#newsContent img')
      let i = 0
      imgs.each(function () {
        $(this).width('100%')
        i++
      })
    },
    commonHead: function () {
      var str = '<div class="menu"></div>' + '<div class="logo"></div>'
      $('#header').append(str)
      $('.menu').on('click', function () {$('#choose').show()})
    },
    commonFoot: function () {
      var str = '<div class="detail">' + '<div class="themes">' + '<div class="footLogo"><img src="/img/phone/footer-logo.png"/></div>' + '</div>' + '<div class="severTime">' + '<p>24小时全天候赳赳在线客服服务</p>' + '<p>400 150 5099(周一至周日：7:30-19:30)</p>' + '</div>' + '<div class="copyRight">' + '<p>Copyright © 2017 99Bicycle Inc. 保留所有权。</p>' + '<p>沪ICP备17015815号 丨 公共事务邮箱Public@99bicycle.com</p>' + '</div>' + '</div>'
      $('#footer').append(str)
    },
    commonMenu: function () {
      var str = '<div id="choose">' + '<div class="head">' + '<div class="menu1"></div>' + '<div class="logo"></div>' + '</div>' + '<div class="choose">' + '<p><a href="/">首页</a></p>' + '<p><a href="/news/list/1/10">赳赳新闻</a></p>' + '<p><a href="/aboutus">关于我们</a></p>' + '<p><a href="/phoneDownload">下载APP</a></p>' + '</div>' + '</div>'
      $('body').append(str)
      $('.menu1').on('click', function () {$('#choose').hide()})
    }
  }
  common.init()
})