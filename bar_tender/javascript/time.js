var i = 0;
//var url = "https://web.sfc.keio.ac.jp/~t18381ks/bar_tender/images/" //背景画像保存先
var url = "../images/" //背景画像保存先
//配列を作成

var img = new Array("num3.jpg","num6.jpg","num1.jpg");

function change(){                //背景画像を変える
  i++;
  if(i >= img.length) {
    i = 0;
  }
  document.body.background = url + img[i];
}

// function tm(){                    //タイマーをセット
  // document.body.background = url + img[i];
  setInterval("change()",5000);
// }
