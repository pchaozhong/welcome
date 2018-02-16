/*globals $ */
/*eslint no-console: ["error", { allow: ["log"] }] */


$(() => {
  const headerHeight = $('#navbar-header').height();
  const coverHeight = $('.js-cover-header').height();

  // スクロールをスムーズに
  $('.smooth-anchor').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });

  //
  $(window).scroll(function() {
    console.log(window.scrollY);
    if (window.scrollY > headerHeight + coverHeight ) {
      $('.p-page').addClass('is-bg-fixed');
    }else{
      $('.p-page').removeClass('is-bg-fixed');
    }
  });

  // メニューの開閉
  $('.js-nav-toggler').on('click', function(){
    $(this).toggleClass('is-on');
    $('#navbar').toggleClass('is-on');
  });

  // メニュー以外押下でメニューを閉じる
  $(document).click(function(event) {
    if(!$(event.target).closest('#navbar').length && !$(event.target).closest('.js-nav-toggler').length ) {
      $('.js-nav-toggler').removeClass('is-on');
      $('#navbar').removeClass('is-on');
    }
  });

  // ポップアップ
  $('[data-popup]').click(function(){
    const target = $(this).data('popup');
    console.log($('#js-popup-'+target));
    $('#js-popup-'+target).addClass('is-on');
    $('#js-overlay').addClass('is-on');
  })

  $('#js-exit-popup').click(function(){
    $(this).parent().removeClass('is-on');
    $('#js-overlay').removeClass('is-on');
  });

});

// for console branding.
(() => {
  console.log("%c\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660" +
    "\n%c\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\n%cALIS" +
    "\n%cA Rewards System to Distinguish Trustworthy Articles.\n%c\u2663\u2663\u2663\u2663\u2663\u2663\u2663\u2663" +
    "\u2663\u2663\u2663\u2663\u2663\u2663\u2663\n%c\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666" +
    "\u2666\u2666\u2666\u2666", "color: lightblue; font-size: 3em; font-weight: bold;", "color: pink; font-size: 3em;" +
    " font-weight: bold;", "color: blue; font-size: 10em; font-weight: bold; font-family: american typewriter, " +
    "brush script mt, harrington, arial, sans-serif;", "color: grey; font-size: 2em; " +
    "font-family: edwardian script itc, harrington, arial, sans-serif;", "color: lightgreen; font-size: 3em; " +
    "font-weight: bold", "color: lightgrey; font-size: 3em; font-weight: bold");
})();
