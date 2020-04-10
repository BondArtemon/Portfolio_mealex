$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 90) {
    $('.header__inner').addClass('header-fixed');
    $('.top').addClass('top-fixed');
  } else {
    $('.header__inner').removeClass('header-fixed');
    $('.top').removeClass('top-fixed');
  }
});

$(function () {
  $('.burger-menu').on('click', function () {
    $('.header__menu ul,.burger-menu,.header__logo').toggleClass('active');
  });
});

new WOW().init();

$(document).ready(function () {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $('.statistics-numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.statistics-numbers').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 1500,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }

          });
      });
      a = 1;
    }
  });
});

$(window).on('load', function () {
  var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});