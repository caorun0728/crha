/*=======================================================
@脚本名称: miwifi.js /  基于小米路由器Hello-WiFi欢迎页首页API精简
@生成时间: 2014/07/10
@作者邮箱: 未知
@作者网站: miwifi.com
@兼容性说明:
@   使用基于 Android 4.4.2 的 WebKit，iOS 7.12 的 Safari，及基于 Windows 7 的 IE 11、Firefox 30、Chrome 35 显示和功能正常
@   使用基于 Windows XP 的 IE6 的显示部分CSS兼容不正常，首页文字在分辨率低的设备上被1、2、3、4、5、6、7遮挡，功能正常
=======================================================*/


$(document).ready(function(){$("#go").bind('click',function(){var gourl=$("input[name=url]").val();jQuery.ajax({type:"GET",url:"http://miwifi.com/welcome",data:{command:"access_internet"},timeout:3000,success:function(data){var response=jQuery.parseJSON(data);if(response.code!=0){alert("请求上网出错，请确认您连接到正确的无线网络");return}window.location.href=gourl},error:function(data){alert("请求上网出错，请确认您连接到正确的无线网络")}})})});