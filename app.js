$(document).scroll(function() {
  var dHeight = $(".navbar").height();
  var alpha = (($(this).scrollTop() / dHeight ) / 10);
  $('.navbar').css('background', 'rgba(115,0,0,' +(alpha * 1)  + ')');
});