'use strict'

function showImg () {$('#wxImg').show()}

function hideImg () {$('#wxImg').hide()}

$('.download').mouseover(function () {$('.download1').show()}), $('.download').mouseout(function () {$('.download1').hide()}), $('.detail1').mouseover(function () {
  $('.detail1 img').attr('src', 'img/techhnology/hBikeFoot.png'), $('.detailTxt1').show(), $('.detail1').css('top', '-3.5%'), $('.detail1').css({
    'z-index': '10',
    width: '29.3%'
  })
}), $('.detail1').mouseout(function () {
  $('.detail1 img').attr('src', 'img/techhnology/bikeFoot.png'), $('.detailTxt1').hide(), $('.detail1').css('top', '0'), $('.detail1').css({
    'z-index': '0',
    width: '27.3%'
  })
}), $('.detail2').mouseover(function () {
  $('.detail2 img').attr('src', 'img/techhnology/hBikeBody.png'), $('.detailTxt2').show(), $('.detailTxt4').show(), $('.detail2').css('top', '-3.5%'), $('.detail2').css({
    'z-index': '10',
    width: '35.7%'
  })
}), $('.detail2').mouseout(function () {
  $('.detail2 img').attr('src', 'img/techhnology/bikeBody.png'), $('.detailTxt2').hide(), $('.detailTxt4').hide(), $('.detail2').css('top', '0'), $('.detail2').css({
    'z-index': '0',
    width: '33.7%'
  })
}), $('.detail3').mouseover(function () {
  $('.detail3 img').attr('src', 'img/techhnology/hBikeHead.png'), $('.detailTxt3').show(), $('.detail3').css('top', '-3.5%'), $('.detail3').css({
    'z-index': '10',
    width: '29.3%'
  })
}), $('.detail3').mouseout(function () {
  $('.detail3 img').attr('src', 'img/techhnology/bikeHead.png'), $('.detailTxt3').hide(), $('.detail3').css('top', '0'), $('.detail3').css({
    'z-index': '0',
    width: '27.3%'
  })
})