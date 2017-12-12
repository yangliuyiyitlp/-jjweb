(function ($, doc) {
  $.init()
  document.getElementById('download-bg').style.height = document.body.clientWidth * 2.95 + 'px'
  document.getElementById('invitationCode-bg').style.height = '5.38%'
  document.getElementById('invitationCode-bg-bak').style.height = '5.38%'
  //$('#download-bg').style.height=document.body.clientWidth*2;
  //var url = window.location.href;
  var invitationCode = getQueryString('I')
  if (invitationCode != null) {
    document.getElementById('invitationCode-bg').style.display = 'block'
    document.getElementById('invitationCode').innerHTML = '邀请码：' + invitationCode
  } else {
    document.getElementById('invitationCode-bg-bak').style.display = 'block'
  }

  var downloadButton = doc.getElementById('download-button')
  downloadButton.addEventListener('tap', function (event) {

    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    var isWeixin = !!/MicroMessenger/i.test(u)
    var isAlipay = !!/Alipay/i.test(u)
    if (isAndroid) {
      //window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.test.qykj.qyelectromobile';
      if (isWeixin || isAlipay) {
        document.getElementById('JweixinTip').style.display = 'block'
        return
      }
      window.location.href = 'https://at.umeng.com/Oz0nym'

    } else if (isiOS) {
      /*if(isAlipay){
      document.getElementById('JweixinTip').style.display='block';
    }*/
      window.location.href = 'https://at.umeng.com/bCe8Dm'

    } else {
      //TODO cdn
      window.location.href = 'http://apk.99bicycle.com/jiujiuAndroid/app-release.apk'
    }
  })

  document.getElementById('JweixinTip').addEventListener('tap', function (event) {
    this.style.display = 'none'
  })

  function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
}(mui, document))