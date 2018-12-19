$(function () {

  var num = $('.swiper-slide').length || 0;//轮播图数量

  if(num>1){
    swiper({
      interval: 8000,
      autoplay: true,
      duration:300
    });
  }
});