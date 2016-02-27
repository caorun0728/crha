/*=======================================================
@脚本名称: countdown.js
@生成时间: 2014/07/10
@作者邮箱: zengrong@qq.com
@作者网站: miwifi.Hehehahahoho.com
@兼容性说明:
@   使用基于 Android 4.4.2 的 WebKit，iOS 7.12 的 Safari，及基于 Windows 7 的 IE 11、Firefox 30、Chrome 35 显示和功能正常
@   使用基于 Windows XP 的 IE6 的显示部分CSS兼容不正常，首页文字在分辨率低的设备上被1、2、3、4、5、6、7遮挡，功能正常
=======================================================*/

var leftSeconds=5;var timeIntervalId;$(function(){timeIntervalId=setInterval("CountDown()",1000)});function CountDown(){if(leftSeconds<=0){var request=GetRequest();var newurl;if(typeof(request["url"])!="undefined"){newurl=request["url"]}else{newurl="www.hao123.com/?tn=93933945_hao_pg"}newurl="http://"+newurl.replace("%2f","/");$("#countdown").html("在下方输入您要访问的网址，点击按钮继续。<br/><input type='text' name='url' value='"+newurl+"' style='width:99%' />");$("#go").fadeIn();clearInterval(timeIntervalId);return}leftSeconds--;$("#countdown").html("阅读以上条款，"+leftSeconds+"秒后连接互联网。")}