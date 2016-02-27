/*=======================================================
@脚本名称: request.js
@生成时间: 2014/07/10
@作者邮箱: zengrong@qq.com
@作者网站: miwifi.Hehehahahoho.com
@兼容性说明:
@   使用基于 Android 4.4.2 的 WebKit，iOS 7.12 的 Safari，及基于 Windows 7 的 IE 11、Firefox 30、Chrome 35 显示和功能正常
@   使用基于 Windows XP 的 IE6 的显示部分CSS兼容不正常，首页文字在分辨率低的设备上被1、2、3、4、5、6、7遮挡，功能正常
=======================================================*/


function GetRequest(){var url=location.search;var theRequest=new Object();if(url.indexOf("?")!=-1){var str=url.substr(1);strs=str.split("&");for(var i=0;i<strs.length;i++){theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1])}}return theRequest}function GetAllRequest(){var url=location.search;var theRequest=new Object();if(url.indexOf("?")!=-1){var str=url.substr(1);return str}}