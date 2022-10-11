document.addEventListener('DOMContentLoaded', function () {
  el_autohide = document.querySelector('.autohide');

  navbar_height = document.querySelector('.navbar').offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;

      if (window.scrollY > 100) {
        $('.navbar').css('background', 'rgba(10,10,10,0.8)');

        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove('scrolled-down');
          el_autohide.classList.add('scrolled-up');
        } else {
          el_autohide.classList.remove('scrolled-up');
          el_autohide.classList.add('scrolled-down');
        }

        last_scroll_top = scroll_top;
      } else {
        $('.navbar').css('background', 'rgba(0,0,0,0)');
      }
    });
  }
});
