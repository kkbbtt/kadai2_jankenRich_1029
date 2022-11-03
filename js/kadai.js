/*
 * じゃんけんの手
 * 0: パー
 * 1: チョキ
 * 2: グー
 * として処理する
 */

const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

$(".img_janken0").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");

    if (random === 0) {
        mask_draw.classList.remove('hidden');
        modal_draw.classList.remove('hidden');
        new Audio('sound/draw.mp3').play();
        document.getElementById("commentArea").innerText = "気が合うじゃない！";
        document.getElementById("imageArea").src="img/obachan_draw.png";

      } else if (random === 1) {
        mask_lose.classList.remove('hidden');
        modal_lose.classList.remove('hidden');
        new Audio('sound/lose.mp3').play();
        document.getElementById("commentArea").innerText = "ぷっ、弱すぎよ！";
        document.getElementById("imageArea").src="img/obachan_win.png";

      } else if (random === 2) {
        mask_win.classList.remove('hidden');
        modal_win.classList.remove('hidden');
        new Audio('sound/win.mp3').play();
        document.getElementById("commentArea").innerText = "サービスショットよ！";
        document.getElementById("imageArea").src="img/obachan_lose.png";
      }

});


$(".img_janken1").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");

    if (random === 0) {
      mask_win.classList.remove('hidden');
      modal_win.classList.remove('hidden');
      new Audio('sound/win.mp3').play();
      document.getElementById("commentArea").innerText = "サービスショットよ！";
      document.getElementById("imageArea").src="img/obachan_lose.png";

    } else if (random === 1) {
      mask_draw.classList.remove('hidden');
      modal_draw.classList.remove('hidden');
      new Audio('sound/draw.mp3').play();
      document.getElementById("commentArea").innerText = "気が合うじゃない！";
      document.getElementById("imageArea").src="img/obachan_draw.png";

    } else if (random === 2) {
      mask_lose.classList.remove('hidden');
      modal_lose.classList.remove('hidden');
      new Audio('sound/lose.mp3').play();
      document.getElementById("commentArea").innerText = "ぷっ、弱すぎよ！";
      document.getElementById("imageArea").src="img/obachan_win.png";
    }

});


$(".img_janken2").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");

    if (random === 0) {
      mask_lose.classList.remove('hidden');
      modal_lose.classList.remove('hidden');
      new Audio('sound/lose.mp3').play();
      document.getElementById("commentArea").innerText = "ぷっ、弱すぎよ！";
      document.getElementById("imageArea").src="img/obachan_win.png";

    } else if (random === 1) {
      mask_win.classList.remove('hidden');
      modal_win.classList.remove('hidden');
      new Audio('sound/win.mp3').play();
      document.getElementById("commentArea").innerText = "サービスショットよ！";
      document.getElementById("imageArea").src="img/obachan_lose.png";

    } else if (random === 2) {
      mask_draw.classList.remove('hidden');
      modal_draw.classList.remove('hidden');
      new Audio('sound/draw.mp3').play();
      document.getElementById("commentArea").innerText = "気が合うじゃない！";
      document.getElementById("imageArea").src="img/obachan_draw.png";
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