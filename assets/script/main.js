/* ハンバーガーメニュー
-----------------------------------------*/
$(".hamburger__icon").on("click", function (e) {
  $(".hamburger__nav").slideToggle();
});

// ハンバーガーメニューを閉じる
$('.hamburger__nav a[href^="#"]').click(function () {
  $(".hamburger__nav").slideUp();
});


/* tabs
-----------------------------------------*/
$(document).ready(function(){
  $('#smarttab').smartTab({
      enableUrlHash: false,
      autoAdjustHeight: false
  });
});