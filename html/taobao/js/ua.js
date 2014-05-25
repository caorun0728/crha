var Sys = {};
var ua = navigator.userAgent.toLowerCase();
//var i=ua.indexOf('micromessenger') ;
var i=ua.indexOf('iphone') ;
if(i<0)
{
  window.location.href="http://cr.ha.cn";
}