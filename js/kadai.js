/*
 * じゃんけんの手
 * 0: パー
 * 1: チョキ
 * 2: グー
 * として処理する
 */

const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

$(".img_janken0").on("click", function () {
    var random = Math.floor(Math.random() * 2);
    console.log(random, "ランダムな数字");

    if (random === 0) {
        mask_draw.classList.remove('hidden');
        modal_draw.classList.remove('hidden');
      } else if (random === 1) {
        mask_lose.classList.remove('hidden');
        modal_lose.classList.remove('hidden');
      } else if (random === 2) {
        mask_win.classList.remove('hidden');
        modal_win.classList.remove('hidden');
      }

});


$(".img_janken1").on("click", function () {
    var random = Math.floor(Math.random() * 2);
    console.log(random, "ランダムな数字");

    if (random === 0) {
        window.location.href = 'win.html';
      } else if (random === 1) {
        window.location.href = 'draw.html';
      } else if (random === 2) {
        window.location.href = 'lose.html';
      }

});


$(".img_janken2").on("click", function () {
    var random = Math.floor(Math.random() * 2);
    console.log(random, "ランダムな数字");

    if (random === 0) {
        window.location.href = 'lose.html';
      } else if (random === 1) {
        window.location.href = 'win.html';
      } else if (random === 2) {
        window.location.href = 'draw.html';
      }

});

mask_win.addEventListener('click', () => {
  mask_win.classList.add('hidden');
  modal_win.classList.add('hidden');
});

mask_draw.addEventListener('click', () => {
  mask_draw.classList.add('hidden');
  modal_draw.classList.add('hidden');
});

mask_lose.addEventListener('click', () => {
  mask_lose.classList.add('hidden');
  modal_lose.classList.add('hidden');
});