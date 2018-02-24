/*globals $ */
/*eslint no-console: ["error", { allow: ["log"] }] */


$(() => {
  
  // 現在の言語を判定
  let path = location.pathname.slice(0, 4),
      reg = /\/\w{2}\//,
      lang = '';
  lang = (path.match(reg))?path.slice(1,3).toUpperCase():'EN';


  $('.js-select-lang').text(lang);

  if (lang == 'JA' && !$('body').hasClass('is-ja')) {
    $('body').addClass('is-ja');
  }else{
    $('body').removeClass('is-ja');
  }

  // 言語の切り替え
  $('.c-select__option').click(function(e) {
    let nextLang = $(e.target).text();
    path = (path.match(reg))?location.pathname.slice(3):location.pathname;
    location.href = (nextLang == 'EN')?path:'/'+nextLang.toLowerCase()+path;
  });

  // 言語セレクトボックスのオープン
  $('.js-select-lang').click(function(e) {
    $(this).parent('.c-select').addClass('is-on')
  });

  // スクロールをスムーズに
  $('.smooth-anchor').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const headerHeight = $('#navbar-header').height();
    const target = $(href === "#" || href === "" ? 'html' : href);
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
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
    if(!$(event.target).closest('.c-select').length) {
      $('.c-select').removeClass('is-on');
    }
  });

  // ポップアップ
  $('[data-popup]').click(function(){
    const target = $(this).data('popup');
    $('#js-popup-'+target).addClass('is-on');
    $('#js-overlay').addClass('is-on');
  })

  $('.js-exit-popup').click(function(){
    $(this).parent().removeClass('is-on');
    $('#js-overlay').removeClass('is-on');
  });

   
  //
  $(window).scroll(function() {

    if ($('.p-page')) {
      const coverHeight = $('.js-cover-header').height();
      if (window.scrollY > coverHeight ) {
        $('.p-page').addClass('is-bg-fixed');
      }else{
        $('.p-page').removeClass('is-bg-fixed');
      }      
    }

    if ($('p-index')) {
      const target = $('.js-feature-list');
      const position = target.offset().top - target.height();
      if (window.scrollY < position ) {
        $('.p-cover').addClass('is-fixed');
      }else{
        $('.p-cover').removeClass('is-fixed');
      }
    }
    
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
