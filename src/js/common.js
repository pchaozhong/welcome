/*globals $ */
/*eslint no-console: ["error", { allow: ["log"] }] */

// スクロールをスムーズに
$(() => {
  $('.smooth-anchor').click(() => {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const headerHeight = $('#navbar-header').height();
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});

// CONTRIBUTEボタンの活性/非活性切り替え
$(() => {
  const $coverContributeButton = $('#cover-contribute-button');
  $('#cover-tac-checkbox').change(function () {
    const disabled = !$(this).is(':checked');
    $coverContributeButton.prop('disabled', disabled).toggleClass('disabled', disabled);
  });

  const $icoContributeButton = $('#ico-contribute-button');
  $('#ico-tac-checkbox').change(function () {
    const disabled = !$(this).is(':checked');
    $icoContributeButton.prop('disabled', disabled).toggleClass('disabled', disabled);
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
