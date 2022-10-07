$(document).scroll(function() {
  var dHeight = $(".navbar").height();
  var alpha = (($(this).scrollTop() / dHeight ) / 10);
  $('.navbar').css('background', 'rgba(10,10,10,' +(alpha * 2)  + ')');
});