/*
 * じゃんけんの手
 * 0: パー
 * 1: チョキ
 * 2: グー
 * として処理する
 */



$(".img_janken0").on("click", function () {
    var random = Math.floor(Math.random() * 2);
    console.log(random, "ランダムな数字");

    if (random === 0) {
        window.location.href = 'draw.html';
      } else if (random === 1) {
        window.location.href = 'lose.html';
      } else if (random === 2) {
        window.location.href = 'win.html';
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


window.onload = function () {
    var popup = document.getElementById('js-popup');
    if (!popup) return;
    popup.classList.add('is-show');
    
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    
    closePopUp(blackBg);
    closePopUp(closeBtn);
    
    function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener('click', function () {
    popup.classList.remove('is-show');
    })
    }
    }