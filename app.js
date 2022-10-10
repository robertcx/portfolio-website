/*$(document).scroll(function() {
  var navbarHeight = $('.navbar').height();
  var alpha = (($(this).scrollTop() / navbarHeight ) / 10);

  if (alpha>0.4) {
    $('.navbar').css('background', 'rgba(10,10,10,1)');
  }
  else  {
    $('.navbar').css('background', 'rgba(10,10,10,' + (alpha * 2)  + ')');
  //  $('.navbar').css('border-bottom', '1px solid rgba(75,75,75,' + (alpha * 10) + ')');
  }
});

*/
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  navbar_height = document.querySelector('.navbar').offsetHeight;

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
      let scroll_top = window.scrollY;

      if(window.scrollY > 100) {
        $('.navbar').css('background', 'rgba(10,10,10,1)');

        if(scroll_top < last_scroll_top) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
        }
        else {
            el_autohide.classList.remove('scrolled-up');
            el_autohide.classList.add('scrolled-down');
        }

        last_scroll_top = scroll_top;

      }
      else {
        $('.navbar').css('background', 'rgba(0,0,0,0)');
      }

    }); 
  }

});