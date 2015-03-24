$(function() {

	/*-----------------------------------------------------------------*
	 *　設定
	 *-----------------------------------------------------------------*/
	 
	var win_open_time = '800';	/* モーダルウィンドウを開くスピード */
	var win_close_time = '9200';	/* モーダルウィンドウを閉じるスピード */
	
	
	/* クリックイベント発生時に表示するモーダルウィンドウの設定 */
	var click_name = 'click_win';	/* イベントを発生させるコンテンツのID */
	var click_tag = 'span';	/* イベントを発生させるコンテンツのTAG名 */
	var win_name = 'md_win';	/* モーダルウィンドウ用コンテンツのID */
	/* モーダルウィンドウ内で表示するiframeのIDは上記の (win_name)_child になるので、この名前は他のIDに使用しないよう要注意 */
	
	
	/* ページ読み込み時に表示するモーダルウィンドウの設定 */
	var load_open = '1';	/* ページ読み込み時にモーダルウィンドウを開く場合は1,それ以外は0 */
	var load_open_name = 'op_win';	/* ページ読み込み時に開くモーダルウィンドウ用コンテンツのID */
	/* モーダルウィンドウ内で表示するiframeのIDは上記の (load_open_name)_child になるので、この名前は他のIDに使用しないよう要注意 */
	
	/*-----------------------------------------------------------------*
	 *　設定ここまで
	 *-----------------------------------------------------------------*/


	/* 読み込み時に開く場合 */
	if(load_open == '1'){
		jQuery.event.add(window, "load", function(){
			var load_open_child_name = load_open_name+'_child';
			var data = $('#'+load_open_name).attr('class');	//	classからデータを取得
			
			get_set_data(data, load_open_name, load_open_child_name);
			
			$('#'+load_open_name).fadeIn(win_open_time);
		});
		
		$('#'+load_open_name).click(function(){
			$('#'+load_open_name).fadeOut(win_close_time);
			$('#'+load_open_name+'_child').attr('src', '');
		});
	}
	
	
	/* クリック時に開く場合 */
	$('#'+click_name+' '+click_tag).click(function(){
		var win_child_name = win_name+'_child';
			var data = $(this).attr('class');	//	classからデータを取得
		
		get_set_data(data, win_name, win_child_name);
				
		$('#'+win_name).fadeIn(win_open_time);
	});
	$('#'+win_name).click(function(){
		$('#'+win_name).fadeOut(win_close_time);
		$('#'+win_name+'_child').attr('src', '');
	});


	
	/* データをclassから取得してiframeに登録し表示 */
	function get_set_data(get_data, get_div_name, get_div_child_name){
		var iframe_attr = '';
		var disp_type = '';
		
		var arr_data = get_data.split(',');
		jQuery.each(arr_data, function() {
			if(this != 'iframe' && this != 'image'){
				var at = this.replace('[','="');
				at = at.replace(']','" ');
				
				iframe_attr += at;
			}else{
				disp_type = this;
			}
		});
		$('#'+get_div_name).html('');
		
		if(disp_type == 'iframe'){
			$('#'+get_div_name).append('<iframe frameborder="0"  scrolling="no" id="'+get_div_child_name+'" '+iframe_attr+'></iframe><div id="close"></div>');
		}else if(disp_type == 'image'){
			$('#'+get_div_name).append('<div id="'+get_div_child_name+'"><img '+iframe_attr+'></div>');
		}

		var h = $('#'+get_div_child_name).height();
		var w = $('#'+get_div_child_name).width();
		$('#'+get_div_child_name).css({
			position: 'absolute',
			top: '50%',
			left: '50%',
			margin: '-'+(h/2)+'px auto auto -'+(w/2)+'px',
			width: w+'px',
			height: h+'px'
		});
	}
	
});
