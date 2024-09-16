/* ハンバーガーメニュー
-----------------------------------------*/
$(".hamburger__icon").on("click", function (e) {
  $(".hamburger__nav").slideToggle();
});


// aタグのクリックで該当セクションに飛ぶとき、セクションの始まりがheaderで隠れないようにする処理

$('a[href^="#"]').click(function () {
  var href = $(this).attr('href');
  if ($(href).length) {
      var browserWidth = window.outerWidth;

      // 実際のヘッダーの高さを取得する（ヘッダーが固定されている場合）
      var headerHeight = $('header').outerHeight(); // 'header'は実際のヘッダーのセレクタに変更

      // レスポンシブな条件をそのまま残す
      if (browserWidth < 768) {
          headerHeight = 7 * (10 / 375 * browserWidth); // モバイル用のヘッダー高さ
      } else if (browserWidth < 1024) {
          headerHeight = 10.1 * (browserWidth / 100) + (browserWidth / 100);  // タブレット用
      }

      // デバッグ用：計算したheaderHeightを確認
      console.log("Header Height:", headerHeight);

      // アニメーションによるスクロール。ヘッダー分だけ上部にずらす
      $('body,html').animate({
          scrollTop: $(href).offset().top - headerHeight // ヘッダー高さを引く
      }, 400, 'swing');

      // ハンバーガーメニューを閉じる
      $(".hamburger__nav").slideUp();
      return false; // デフォルト動作を無効化
  }
});


/* tabs
-----------------------------------------*/
$(document).ready(function(){
  $('#smarttab').smartTab({
      enableUrlHash: false
  });
});