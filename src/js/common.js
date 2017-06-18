// スクロールをスムーズに
$(function () {
  $('.smooth-anchor').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const headerHeight = 82;
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});

// カバーのビデオボタンマウスオーバーで色を変更
$(function () {
  $("#cover-button").mouseover(function () {
    $(this).toggleClass('cover__caption__btn cover__caption__btn_hover');
  }).mouseout(function () {
    $(this).toggleClass('cover__caption__btn cover__caption__btn_hover');
  });
});

// カバーのビデオボタンクリックでビデオモーダル表示
$(function () {
  $("#cover-button").on('click', function () {
    $('.video-modal').modal();
  });
});
