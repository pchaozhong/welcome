/*globals $ moment */
/*eslint no-console: ["error", { allow: ["log"] }] */

const CURRENT_DATE = new Date();

// カウントダウンの時計
// ICO開始後のレートの自動更新
const PRICE_TABLE = [2900, 2600, 2300, 2000];
const TERM_END_DATE_TIMES = [
  '2017-09-08T01:59:59Z',
  '2017-09-15T01:59:59Z',
  '2017-09-22T01:59:59Z',
  '2017-09-29T01:59:59Z',
].map((termEndDateTimes) => moment(termEndDateTimes));

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

      $('#countdown-timer').countdown(TERM_END_DATE_TIMES[i].toDate(), (event) => {
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
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width + '%';
        }
      }
    });
});
