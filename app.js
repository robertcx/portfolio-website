$(document).scroll(function() {
  var dHeight = $(".navbar").height();
  var alpha = (($(this).scrollTop() / dHeight ) / 10);
  if (alpha>0.6) {
    $('.navbar').css('background', 'rgba(10,10,10,0.8)');
  }
  else  {
    $('.navbar').css('background', 'rgba(10,10,10,' +(alpha * 2)  + ')');
  }
});