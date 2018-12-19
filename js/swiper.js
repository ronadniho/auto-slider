function swiper(obj) {

  $('.swiper-wrapper').css({
    "transform": "translate3d(-" + 1200 + "px,0,0)"
  });
  obj = obj || {};
  var interval = obj.interval || 2000;//定时器延迟时间
  var autoplay = obj.autoplay || false;//自动轮播
  var duration = obj.duration || 300;//动画延时
  var page = 1;
  var width = $('.swiper-slide').width();
  var timer = null;
  var elementStart = $('.swiper-slide').eq(0).clone();
  var elementEnd = $('.swiper-slide').eq($('.swiper-slide').length - 1).clone();
  $('.swiper-wrapper').prepend(elementEnd);
  $('.swiper-wrapper').append(elementStart);
  var num = $('.swiper-slide').length;
  $('.swiper-wrapper').css({
    width: width * num + 'px'
  });


  if (autoplay) {
    inter();
  }

  function inter() {
    timer = setInterval(function () {
      move('next');
    }, interval);
  }


  function move(type) {
    switch (type) {
      case 'next':
        page++;
        $('.swiper-wrapper').css({
          "transform": "translate3d(-" + page * width + "px,0,0)",
          "transition-duration": duration + "ms"
        });
        if (page == num - 1) {
          setTimeout(function () {
            $('.swiper-wrapper').css({
              transform: "translate3d(-" + width + "px,0,0)",
              "transition-duration": "0ms"
            });
            page = 1;
          }, duration);
        }
        break;
      case 'prev':
        page--;
        $('.swiper-wrapper').css({
          transform: "translate3d(-" + width * page + "px,0,0)",
          "transition-duration": duration + "ms"
        });

        if (page == 0) {
          setTimeout(function () {
            $('.swiper-wrapper').css({
              transform: "translate3d(-" + width * (num - 2) + "px,0,0)",
              "transition-duration": "0ms"
            });
            page = num - 2;
          }, duration);
        }
        break;
      default:
        break;
    }


  }

  $('.swiper-slide')
    .on('mouseover', function (e) {
      if (autoplay) {
        clearInterval(timer);
        timer = null;
      }
    })
    .on('mouseleave', function (e) {
      if (autoplay) {
        inter();
      }
    })

  $('.swiper-btn')
    .on('mouseover', function (e) {
      if (autoplay) {
        clearInterval(timer);
        timer = null;
      }
    })
    .on('click', function (e) {
      if ($(this).hasClass('prev')) {
        move('prev');
      } else if ($(this).hasClass('next')) {
        move('next');
      }
    });

}