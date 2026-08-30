// X(Twitter)投稿の埋め込み用ウィジェットスクリプトを非同期で読み込む。
// twttr.ready() で登録した処理は、読み込み完了前に呼んでもキューイングされ後で実行される。
window.twttr = (function (d, s, id) {
  const fjs = d.getElementsByTagName(s)[0];
  const t = window.twttr || {};
  if (d.getElementById(id)) return t;
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function (f) { t._e.push(f); };
  return t;
}(document, "script", "twitter-wjs"));
