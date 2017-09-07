/*globals $ moment */
/*eslint no-console: ["error", { allow: ["log"] }] */

const CURRENT_DATE = new Date();
const BEFORE_ICO_END_DATE_TIME = moment('2017-09-01T01:59:59Z');

// カウントダウンの時計
// ICO開始後のレートの自動更新
const PRICE_TABLE = [2900, 2600, 2300, 2000];
const TERM_END_DATE_TIMES = [
  '2017-09-08T01:59:59Z',
  '2017-09-15T01:59:59Z',
  '2017-09-22T01:59:59Z',
  '2017-09-29T01:59:59Z',
].map((termEndDateTimes) => moment(termEndDateTimes));

// Change cover when ICO started.
$(() => {
  if (CURRENT_DATE <= BEFORE_ICO_END_DATE_TIME) {
    $('#cover-until-ico').show();
  } else {
    $('#cover').show();
    $('#ico-live').show();
  }
});

// ICOまで
$(() => {
  const $daysContainer = $('#countdown-until-ico-timer-days');
  const $hoursContainer = $('#countdown-until-ico-timer-hours');
  const $minutesContainer = $('#countdown-until-ico-timer-minutes');
  const $secondsContainer = $('#countdown-until-ico-timer-seconds');

  if (CURRENT_DATE <= BEFORE_ICO_END_DATE_TIME) {
    $('#countdown-until-ico-timer').countdown(BEFORE_ICO_END_DATE_TIME.toDate(), function (event) {
      $daysContainer.text(event.offset.totalDays);
      $hoursContainer.text(event.offset.hours);
      $minutesContainer.text(event.offset.minutes);
      $secondsContainer.text(event.offset.seconds);
    }).on('finish.countdown', () => {
      // ICO開始時
      $('#cover-until-ico').fadeOut(1200, () => {
        $('#cover').fadeIn('slow');
        $('#ico-live').fadeIn('slow');
      });
    });
  }
});

// ICO開始後
$(() => {
  const $daysContainer = $('#countdown-timer-days');
  const $hoursContainer = $('#countdown-timer-hours');
  const $minutesContainer = $('#countdown-timer-minutes');
  const $secondsContainer = $('#countdown-timer-seconds');

  for (let i = 0; i < TERM_END_DATE_TIMES.length; i++) {
    if (CURRENT_DATE <= TERM_END_DATE_TIMES[i]) {
      $('#cover-current-term').text(i + 1);
      $('#cover-current-rate').text(PRICE_TABLE[i]);

      if (i < 3) {
        $('#cover-next-term').text(i + 2);
        $('#cover-next-rate').text(PRICE_TABLE[i + 1]);
      } else {
        $('.cover__notice').remove();
      }

      $('#countdown-timer').countdown(TERM_END_DATE_TIMES[i].toDate(), function (event) {
        $daysContainer.text(event.offset.totalDays);
        $hoursContainer.text(event.offset.hours);
        $minutesContainer.text(event.offset.minutes);
        $secondsContainer.text(event.offset.seconds);
      });

      break;
    }
  }
});


// プログレスバー
$(() => {
  let elem = document.getElementById("progress-bar");
  let width = 1;

  $.ajax('https://2u8y18zzu3.execute-api.ap-northeast-1.amazonaws.com/production/',
    {
      type: 'get',
      dateType: 'text'
    })
    .done((data) => {
      const id = setInterval(frame, 20);

      function frame() {
        if (width >= data) {
          clearInterval(id);
          $('#progress-label').fadeTo('slow', 1);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width + '%';
        }
      }
    });
});
