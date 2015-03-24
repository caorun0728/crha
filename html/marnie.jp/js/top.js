// JavaScript Document

 //ページ遷移エフェクト

	   $(function(){
	$('body').fadeMover({
		'effectType': 1,
		'inSpeed': 800,
		'outSpeed': 800,
		'inDelay' : '0',
		'outDelay' : '0',
		'nofadeOut' : 'nonmover'
	});
});
	   

  


	   //ロールオーバー透明エフェクト
  
  $(function() {
	var nav = $('.overimg');
	nav.hover(
		function(){
			$(this).fadeTo(300,0.5);
		},
		function () {
			$(this).fadeTo(300,1);
		}
	);
});


	   //ロールオーバー透明エフェクト
  
  $(function() {
	var nav = $('.alpha');
	nav.hover(
		function(){
			$(this).fadeTo(300,0);
		},
		function () {
			$(this).fadeTo(300,1);
		}
	);
});




 