$(function(){

	//.accordion7の中のp要素がクリックされたら
	$('.accordion7 p').click(function(){

		//クリックされた.accordion7の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();

	});

        //.accordion7の中の.innerの中のli要素の中のp要素がクリックされたら
	$('.accordion7 .inner li p').click(function() {

		//クリックされた.accordion7の中の.innerの中のli要素の中のp要素の子要素のul要素が開いたり閉じたりする。
		$(this).children('ul').slideToggle();

  });
});
