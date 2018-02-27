/*globals $ */
/*eslint no-console: ["error", { allow: ["log"] }] */


$(() => {

  let checkLang = (path, reg) => {
    let lang = (path.match(reg))?path.slice(1,3).toUpperCase():'EN';

    return lang;
  }

  let path = location.pathname.slice(0, 4),
      reg = /\/\w{2}\//,
      lang = '';
  
  lang = checkLang(path, reg);

  $('.js-select-lang').text(lang);

  if (lang == 'JA' && !$('body').hasClass('is-ja')) {
    $('body').addClass('is-ja');
    $('.js-cover-iphone').attr({'src':'/img/pc/top_sp.png'});
  }else{
    $('body').removeClass('is-ja');
    $('.js-cover-iphone').attr({'src':'/img/pc/top_sp_en.png'});
  }

  // 言語の切り替え
  $('.c-select__option').click(function(e) {
    let nextLang = $(e.target).text();
    path = (path.match(reg))?location.pathname.slice(3):location.pathname;
    location.href = (nextLang == 'EN')?path:'/'+nextLang.toLowerCase()+path;
  });

  // 言語の引き継いだ画面遷移
  $('#navbar-header a:not("[target]")').click(function(e){
    e.preventDefault();
    let lang = checkLang(path, reg).toLowerCase();
    let nextUrl = $(this)[0].getAttribute('href');
    if (lang !='en') {
     nextUrl = '/'+lang+nextUrl;
    }

    location.href = nextUrl;
  });

  // 言語セレクトボックスのオープン
  $('.js-select-lang').click(function(e) {
    $(this).parent('.c-select').addClass('is-on')
  });


  let page = 'index';

  if (location.pathname.match(/\.html/)) {
    let i = location.pathname.split('/').length - 1;
    page = location.pathname.split('/')[i].split('.')[0];
  }

  $('body').addClass('p-page-'+page);

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
  $(document).on('click touchend', function(event) {
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
  })

  $('[data-exit]').click(function(){
    const target = $(this).data('exit');
    $('#js-popup-'+target).removeClass('is-on');
  });


  if($('[data-scroll]').length > 0) {
    let targetClass = $('[data-scroll]').data('scroll');
    let target = $("."+targetClass);
    let targetOrgTop = target.offset().top;
    let firePosition = $('[data-scroll]').offset().top + $('[data-scroll]').height() - target.height();

    $(window).scroll(function() {
      if ($(window).scrollTop() + targetOrgTop > firePosition ) {
        target.css({'top': firePosition+'px', 'position': 'absolute' });
      }else{
        target.css({'top': targetOrgTop+'px', 'position': 'fixed'});
      }
    });
  }

  if ($('.p-page').length > 0) {
    $(window).scroll(function() {
      let coverHeight = $('.js-cover-header').height();
      if (window.scrollY > coverHeight + 30) {
        $('.p-page').addClass('is-fixed');
      }else{
        $('.p-page').removeClass('is-fixed');
      }
    });
  }

  if($('.p-page-news').length > 0) {
    $('.js-ellipsis').each(function(){
      if ($(this).text().length > 60) {
        let text = $(this).text().slice(0, 60);
        $(this).text(text+"…");
      }
    })
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
      $('#navbar-header').addClass('is-on');
    }else{
      $('#navbar-header').removeClass('is-on');
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
