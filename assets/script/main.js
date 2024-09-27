/* ハンバーガーメニュー
-----------------------------------------*/
$(".hamburger__icon").on("click", function (e) {
  $(".hamburger__nav").slideToggle();
});

// ハンバーガーメニューを閉じる
$('.hamburger__nav a[href^="#"]').click(function () {
  $(".hamburger__nav").slideUp();
});

// リンクをクリックしたときの処理
$('.a[href^="#"]').click(function (e) {
  e.preventDefault(); // デフォルトのアンカー動作を無効化（トップに戻らないように）
});

// ハンバーガーメニュー以外のa要素はトップに戻らない
$('a[href^="#"]').not('.hamburger__nav a').click(function (e) {
  // 他のa要素では通常の動作を維持
});


/* tabs
-----------------------------------------*/
$(document).ready(function(){
  $('#smarttab').smartTab({
      enableUrlHash: false,
      autoAdjustHeight: false
  });
});