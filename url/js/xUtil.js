var xUtil =  {};

xUtil.debug = {};

xUtil.debug.outputTxt = function(text){
	var outputHalt = arguments[1] ? arguments[1] : false;
	T.dom.insertHTML('debugTxt', 'beforeEnd', text + '<br />');
	if(outputHalt){
		T.dom.insertHTML('debugTxt', 'beforeEnd',  new Date() + '运行被终止<br />');
	}
	//return false;
};

xUtil.debug.clearTxt = function(){
	document.getElementById('debugTxt').innerHTML = '';
};

xUtil.rst = {};

xUtil.rst.create = function(){
	return {
			rst: arguments[0] ? arguments[0] : '',
			errno: arguments[1] ? arguments[1] : '',
			error: arguments[2] ? arguments[2] : ''
		};
};

xUtil.common = {};
/**
 * 代码来自校内
 * @param Element a
 */
xUtil.common.insertdom = function(a){
	(document.getElementsByTagName("head")[0] || document.body).appendChild(a);
};

/**
 * 代码来自校内
 * @param numeric num
 */
xUtil.common.beautyNum = function(num){
	return num >= 10000000 ? Math.round(num / 1000000) + "M": (num >= 10000 ? Math.round(num / 1000) + "K": num);
}