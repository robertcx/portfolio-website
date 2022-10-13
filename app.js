$(document).scroll(function () {
  var navbarHeight = $('.navbar').height();
  var alpha = $(this).scrollTop() / navbarHeight / 10;
  if (alpha > 0.4) {
    $('.navbar').css(
      'background-image',
      'linear-gradient(to bottom, rgba(10,10,10,1), rgba(0,0,0,0)'
    );
  } else {
    $('.navbar').css(
      'background-image',
      'linear-gradient(to bottom, rgba(10,10,10,' +
        alpha * 4 +
        '), rgba(0,0,0,0)'
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  navbar_hide = document.querySelector('.autohide');

  navbar_height = document.querySelector('.navbar').offsetHeight;

  if (navbar_hide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;

      if (window.scrollY > 400) {
        if (scroll_top < last_scroll_top) {
          navbar_hide.classList.remove('scrolled-down');
          navbar_hide.classList.add('scrolled-up');
        } else {
          navbar_hide.classList.remove('scrolled-up');
          navbar_hide.classList.add('scrolled-down');
        }

        last_scroll_top = scroll_top;
      }
    });
  }
});
