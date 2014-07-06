

function urlconvert(){
  var oldurl=$("#oldurl").attr("value");
  oldurl=trimString(oldurl);
  if (oldurl==''){
	  alert('请输入URL地址!');
	  return false;
  }else if(/thunder:\/\//i.test(oldurl)){
      newurl=Thunderdecode(oldurl);
  }else if(/flashget:\/\//i.test(oldurl)){
      newurl=Flashgetdecode(oldurl);
  }else if(/qqdl:\/\//i.test(oldurl)){
      newurl=qqdecode(oldurl);
  }else if(/fs2you:\/\//i.test(oldurl)){
      newurl=FS2Decode(oldurl);
  }else{
	   newurl=oldurl;
  }
  thunderurl=ThunderEncode(newurl);
  flashgeturl=flashetencode(newurl);
  qqurl=qqencode(newurl);
  $("#oldurl").attr("value",oldurl);
  $("#newurl").attr("value",newurl);
  $("#thunderurl").attr("value",thunderurl);
  $("#flashgeturl").attr("value",flashgeturl);
  $("#qqurl").attr("value",qqurl);
}

function ConvertURL2FG(url,fUrl,uid)
	{	
		try{
			FlashgetDown(url,uid);
		}catch(e){location.href = fUrl;}
}
function Flashget_SetHref(obj,uid){obj.href = obj.fg;}
 function   trimString(str)   
  {   
  var   re;   
  var   newstr;   
  re   =   new   RegExp("^(\\s)*");   
  re2   =   new   RegExp("(\\s)*$");   
  newstr   =   str.replace(re,"");   
  newstr   =   newstr.replace(re2,"");   
    
  return   newstr;   
}   
function qqencode(url){
   url='qqdl://'+encode64(url);
   return url;
}
function flashetencode(url){
   url='Flashget://'+encode64('[FLASHGET]'+url+'[FLASHGET]')+'&1926';
   return url;
}
 function ThunderEncode(t_url) {
	var thunderPrefix = "AA";
	var thunderPosix = "ZZ";
	var thunderTitle = "thunder://";
	var tem_t_url = t_url;
	var thunderUrl = thunderTitle + encode64(thunderPrefix + tem_t_url + thunderPosix);
	return thunderUrl;
}

function Thunderdecode(url) {
	 url=url.replace('thunder://','');
     thunderUrl=decode64(url);
	 thunderUrl=thunderUrl.substr(2,thunderUrl.length-4);
	 return thunderUrl;
}

function Flashgetdecode(url){
    url=url.replace('Flashget://','');
	if (url.indexOf('&')!=-1)
	{
		url=url.substr(0,url.indexOf('&'));	 
	}
	url=decode64(url);
	flashgeturl=url.replace('[FLASHGET]','');
	flashgeturl=flashgeturl.replace('[FLASHGET]','');
	 
	return flashgeturl;
}
function  qqdecode(url){
	url=url.replace('qqdl://','');
    qqurl=decode64(url);
    return qqurl;
}


//FS2地址
function  FS2Decode(url){
    url=url.replace('fs2you://','');
    fs2url=decode64(url).split("|")[0];
    fs2url="http://"+fs2url;
    return fs2url;
}
function copy(txt)
{
	if (window.clipboardData)
	{
		window.clipboardData.setData("Text",txt);
	}
	else
	{
		txt = encodeURIComponent(txt);

		var flashcopier = 'flashcopier';
		if(!document.getElementById(flashcopier))
		{
			var divholder = document.createElement('div');
			divholder.id = flashcopier;
			document.body.appendChild(divholder);
		}
		document.getElementById(flashcopier).innerHTML = '';
		var divinfo = '<embed src="js/clipboard.swf" flashvars="clipboard='+txt+'" type="application/x-shockwave-flash" width="0" height="0"></embed>';
		document.getElementById(flashcopier).innerHTML = divinfo;
	}

	alert("复制成功");
}


