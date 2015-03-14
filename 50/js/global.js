// JavaScript Document
var fbTimeout;

function openwindowpop(target, width, height){

wLeft = window.screenLeft ? window.screenLeft : window.screenX;
wTop = window.screenTop ? window.screenTop : window.screenY;
var pTop = wTop + (window.innerHeight / 2) - (height / 2);
var pLeft = wLeft + (window.innerWidth / 2) - (width / 2);
var videoIsOpen = false;
window.open(target,'pop','location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,width='+width+',height='+height+',top='+pTop+',left='+pLeft); 
}

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","content.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

/* get video values */

var autoPlay = xmlDoc.getElementsByTagName("videoautoplay")[0].childNodes[0].nodeValue;
var playonLoad = xmlDoc.getElementsByTagName("openonload")[0].childNodes[0].nodeValue;
var videoDelay = xmlDoc.getElementsByTagName("video_delay")[0].childNodes[0].nodeValue;
var overlaycolor = xmlDoc.getElementsByTagName("overlaybackground")[0].childNodes[0].nodeValue;

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);
/* end touchwipe plugin */

$(document).ready(function() {
  $(".toutslider").hide();
});
$(window).load(function() {
  $(".toutslider").show();
});


	

$(document).ready(function(){
	$('.wrapper').delay(600).fadeIn({duration:800,start:function(){/*$('#bgvideoplayer')[0].play()*/}});
	/*  ALL BACKGROUND SLIDE EFFECTS POSSIBLE
	mode: 'timer',                  // mode - "timer", "scroll", "controls", "pagination", "thumbnails"  
    effect: 'fade',                 // effect - "fade", "crossfade", "slidefade", "slide"  
    effectTime: 1500,               // effect animation time  
    effectEasing: 'easeOutCubic',   // effect animation easing  
    slideOffset: 50,                // "slide" effect offset  
    slidefadeOffsetX: 0,            // "slidefade" effect X offset  
    slidefadeOffsetY: -50,          // "slidefade" effect Y offset  
    timerDelay: 5000,               // slideshow timer delay (for "timer" mode)  
    scrollTimeout: 200,             // timeout before switching slides (for "scroll" mode)  
    preload: true,                  // preload images  
    preloadTime: 1000,              // preload animation time   
    preloadDelay: 200,              // preload animation delay    
    startSlide: 0,                  // slide to begin with  
    thumbnailsOpacity: 0.5,         // thumbnails opacity (for "thumbnails" mode)  
    thumbnailsTime: 500,            // thumbnails animation time (for "thumbnails" mode)  
    startRandom: true,              // start on random slide  
    photoSource: 'none',            // photo source - "flickrfeed", "flickrauth", "picasa" or "none"  
    photoRange: '',                 // photo range ("" or "1-3,5,6,7-9")  
    flickrFeedQuery: {              // query arguments for "flickrfeed" photoSource  
        set: '00000000',            // set ID  
        nsid: '00000000@N00'        // user ID  
    },  
    flickrAuthQuery: {              // query arguments for "flickrauth" photoSource  
        api_key: '00000000',        // auth key  
        photoset_id: '00000000'     // set ID  
    },  
    picasaQuery: {                  // query arguments for "picasa" photoSource  
        user: 'username',           // picasa user name  
        album: '00000000'           // picasa album ID  
    },  
    beforeSlide: function(){},      // before slide callback  
    afterSlide: function(){},       // after slide callback  
    slidesLoaded: function(){}      // slide images load callback  
	
	*/
	
	
	//setTimeout(function(){
	//$('.backslider').fadeIn();}, 400);
	//$('.backslider').fadeOut(0);
	TweenMax.from($('.backslider'),.5,{opacity:0,delay:.4});
	
	$('.backslider').backslider({
		photoSource: 'none',
		mode:'timer',
		preloadDelay: 400, 
    	startRandom: false, 
		effect:'crossfade',
		timerDelay: 7000,
		effectTime: 2000
	});
	
	
	
// removes backslider functionality if only one background image is used 
	if($(".bgslides ul li").length == 1)
		{
  		 $(".bgslides").removeClass('backslider');
  		 $(".bgslides").addClass('single_bg');		 
		}

	//set up video background
	/*
	var bgvideoelement = new MediaElement('bgvideoplayer', {
		loop: true,
		success: function (mediaElement, domObject) {
			mediaElement.play();
		},
	});
	*/

	
//change overlay background according to xml option light/dark
	if(overlaycolor == 'light') {
		$('.overlay').css('background-color', '#fff');
		$('.overlay').css('background', 'rgba(255,255,255,.9)');
		$('.fancybox-overlay').css('background', 'rgba(255,255,255,.9)');
		setColor = 'rgba(255,255,255,.9)';
	}
	else {
		setColor = 'rgba(0,0,0,.9)';
	}
		
$('#billingToggle').click(function(e){
	e.preventDefault();
		$('#billing').slideToggle();
});		
		

//open image gallery popup 
$('.gallerymodal').click(function(e) {
	e.preventDefault();
	$('#gallerypop').fadeIn(800);
	$("#gallerypop .generalclosebtn").show();
	//$('#bgvideoplayer')[0].pause();
});

$('.generalclosebtn').click(function(e){/*$('#bgvideoplayer')[0].play();*/});


//gallery functionality using jquery cycle plugin
	$('.galleryslides').cycle({ 
    fx:      'fade',
    speed:   600, 
    timeout: 0, 
    next:   '.gallerynext', 
    prev:   '.galleryprev' 
	});
	
	

//allow gallery to be swipeable in ipad
	$(".galleryslides").touchwipe({
      wipeLeft: function() {
            $(".galleryslides").cycle("next");
      },
      wipeRight: function() {
            $(".galleryslides").cycle("prev");
      }
});

//set up bg video mute button
/*
$("#bgvideomuteunmute").css({cursor:'pointer', position:'absolute', width:'22px', height:'22px', right:'10px',  bottom:'52px', backgroundImage:'url(./images/soundOn.png)', backgroundRepeat:'no-repeat', opacity:.75});
$("#bgvideomuteunmute").hover(
	function(){$(this).css('opacity','1')},
	function(){$(this).css('opacity','.75')}
	)
$("#bgvideomuteunmute").click(function(e) {
	var videomuted = !$('#bgvideoplayer')[0].muted; 
	$('#bgvideoplayer')[0].muted = videomuted;
	$(this).css("background-image", videomuted ? "url(./images/soundOff.png)" : "url(./images/soundOn.png)");
});
*/


 /* NEW FB SHARE CODE FOR GALLERY - CHANGE ONLY NAME AND DESCRIPTION AND IN THE completeImgSrc path - identify the correct folder path */
   $(".downloadimg").click(function(e) {
        var fullImgSrc = $(this).parent('.downloadimgsrc').css('background-image');
		fullImgSrc = /^url\((['"]?)(.*)\1\)$/.exec(fullImgSrc);
   		fullImgSrc = fullImgSrc ? fullImgSrc[2] : ""; // If matched, retrieve url, otherwise ""
        var hostName = document.location.hostname;
        var completeImgSrc = fullImgSrc;
FB.ui(
{
method: 'feed',
name: 'FIFTY SHADES OF GREY',
link: completeImgSrc,
picture: completeImgSrc,
description: 'The official website for the movie Fifty Shades of Grey, based on the #1 bestselling book by E L James.',
message: ''
});
});

/* NEW FB SHARE CODE FOR DOWNLOADS - CHANGE ONLY NAME AND DESCRIPTION AND IN THE completeImgSrc path - identify the correct folder path */
   $(".downloadicon").click(function(e) {
        var fullImgSrc = $(this).next('a').attr("href"); 
var hostName = document.location.hostname;
var completeImgSrc = 'http://' + hostName + '/' + fullImgSrc;

FB.ui(
{
method: 'feed',
name: 'FIFTY SHADES OF GREY',
link: 'http://' + hostName + '/' + fullImgSrc,
picture: completeImgSrc,
description: 'The official website for the movie Fifty Shades of Grey, based on the #1 bestselling book by E L James.',
message: ''
});
});





  /* NEW FB SHARE CODE FOR TRAILER - CHANGE NAME, DESCRIPTION, LINK */
   $(document).on('click', '.videopop .downloadTrailer', function() {
        var hostName = document.location.hostname;
FB.ui(
{
method: 'feed',
name: 'FIFTY SHADES OF GREY',
link: 'http://www.youtube.com/playlist?list=PLpTga61DBp6AqvhcaxS2q9s_UQGg1L_28',
description: 'The official website for the movie Fifty Shades of Grey, based on the #1 bestselling book by E L James.',
message: ''
});
});


//open story popup 

		(function($){
			$(window).load(function(){
				$("#storypop .popcontent").mCustomScrollbar({
			advanced:{updateOnContentResize: true}
					});
				$(".storymodal").click(function(e){
					$("#storypop .generalclosebtn").show();
					e.preventDefault();
					$("#storypop").fadeIn(800);
					//$('#bgvideoplayer')[0].pause();
				});
			});
		})(jQuery);
		
		
//open home wallpaper download popup 

		(function($){
			$(window).load(function(){
				/*
				$("#homeDLModalBtn").click(function(e){
					$("#homedlpop .generalclosebtn").show();
					e.preventDefault();
					$("#homedlpop").fadeIn(800);
					//$('#bgvideoplayer')[0].pause();
				});
				*/
			});
		})(jQuery);
		
	
	
	//show wallpaper sizes
	$('.wallpaper_options').hide();
		$(".wallpaper").hover(
			function () {
			$(this).children('.wallpaper_options').fadeIn(500);
			},
			function () {
			$(this).children('.wallpaper_options').fadeOut(500);
		
		});
		

// download popup functions

//open downloads modal popup	
		(function($){
			$(window).load(function(){
				$("#downloadspop .popcontent").mCustomScrollbar({
			advanced:{updateOnContentResize: true}
					});
				$(".downloadsmodal").click(function(e){
					$("#downloadspop .generalclosebtn").show();
					e.preventDefault();
					$("#downloadspop").fadeIn(800);

				});
			});
		})(jQuery);

		
//open general modal popup	
		(function($){
			$(window).load(function(){
				$("#gridpop .popcontent").mCustomScrollbar({
			advanced:{updateOnContentResize: true}
					});
				$(".gridmodal").click(function(e){
					$("#gridpop .generalclosebtn").show();
					e.preventDefault();
					$("#gridpop").fadeIn(800);
				});
			});
		})(jQuery);
		

	
//open video popup		
		$(".videomodal").fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		openSpeed	: 800,
		closeSpeed	: 800,
		width		: "70%",
		height		: "85%",
		padding: 0,
		wrapCSS: 'videopop',
		onStart		: resizeVideos,
		afterClose: function() {
			//$('#bgvideoplayer')[0].play();
			//videoIsOpen = false;
	    },
		afterShow : function() {
			var clonetrailerbtn = $('.postTrailerFB').clone(true, true);
			clonetrailerbtn.appendTo(".fancybox-wrap");
			$('.videopop .postTrailerFB').show();
			//$('#bgvideoplayer')[0].pause();
			repositionTrailerShare();
		}, 
		helpers : {
			media : {},
			overlay :{
				locked:false,
				css: {'background':setColor},
				openSpeed: 800,
     speedOut: 800//<-- here you control the overlay speedOu
			}
		}
	});

//open video onload delay setup	
	if (autoPlay == "1") {
	setTimeout(function(){
	$(".videomodal").trigger('click');}, videoDelay);
	
	}
	
	$("#singleWatchTrailerBtn").click(function(){
		$(".videomodal").trigger('click');
		autoPlay = false;
	});
	
	
	
	
	/* fbox media helper */
	(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : playonLoad, /* do NOT change this value - it is controlled in xml */
					autohide    : 1,
					showinfo	: 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					width		: 500,
					height		: 400,
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			}
		},
		

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				item = opts[ what ];
				rez  = url.match( item.matcher );

				if (rez) {
					type   = item.type;
					params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

					url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

					break;
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));

$(window).load(function() {
	//$(window).trigger('resize');
});

function resizeVideos()
{
	var vW = 1400;
	var vH = 700;
	var wW = $(window).width();
	var wH = $(window).height();
	
	var adjW = wW;
	var calcH = Math.round(wW*vH/vW);
	
	var adjH = wH;
	var calcW = Math.round(wH*vW/vH);

	var fW, fH, fL, fT;
	if(calcW > wW){
		fW = calcW; fH = adjH; fL = -Math.round((calcW-wW) / 2); fT = 0;
	} else {
		fW = adjW; fH = calcH; fL = 0; fT = -Math.round((calcH-wH) / 2);
	}
	
	//$("#bgvideo").css({width:fW,height:fH,left:fL,top:fT});
	
	//make sure the youtube iframe is as big as possible
	$('.fancybox-inner iframe').css({width:'100%', height:'100%'});
	
	//reposition the video share button based on the position of the fancybox close button
	if( $('.fancybox-wrap').length)
	{
		var vidOffset = $('.fancybox-wrap').offset();
		repositionTrailerShare();
		clearTimeout(fbTimeout);
		//recall because maximizing window comes with lag time
		fbTimeout = setTimeout(function(){repositionTrailerShare();},750);
	}
}

function repositionTrailerShare()
{
	var yAdd = 80;
	var xAdd = -138;
	var vidOffset = $('.fancybox-wrap').offset();
	var vidCloseOffset = $('.fancybox-close').offset();
	var xpos = vidCloseOffset.left-vidOffset.left;
	var ypos = vidCloseOffset.top-vidOffset.top+$('.fancybox-wrap').height();
	$('.videopop .postTrailerFB').css({left:xpos+xAdd,top:ypos+yAdd});
}


$( window ).resize(function() {
  resizeVideos();
});

resizeVideos();

$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#fullsize_background"),
	    $imgW      		 = $bg.width(),
		$imgH			 = $bg.height(),
		$minH			 = 1024,
		$minW			 = 768;
		
	console.log ("bg is " + $imgW + "x" + $imgH);
	    			    		
	function resizeBg() {
		var fW, fH, fX;
		
		var wW = theWindow.width();
		var wH = theWindow.height();
		
		var useW = Math.max(wW,$minW);
		var useH = Math.max(wH,$minH);
		
		var cW = Math.round($imgW * wH / $imgH);
		var cH = Math.round($imgH * wW / $imgW);
		
		if(cW > wW) {
			fW = cW
			fH = wH;
			fX = -Math.round((cW - wW)/2);
			console.log ("using cW, settings: fW="+fW+", fH="+fH+", fX="+fX);
		}
		else
		{
			fW = wW
			fH = cH;
			fX = 0;
			console.log ("using cH, settings: fW="+fW+", fH="+fH+", fX="+fX);
		}
		
		$bg.css({width:fW,height:fH,left:fX});
		
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});


/* 
***************************************************************************************************************************
	Device Orientation Functions
*************************************************************************************************************************** */

var ipad = false;
function updateOrientation() {
	if(window.orientation == 0 || window.orientation == 180){
		$('#portrait').show();
		$('.wrapper,.bgslides').hide();
	} else {
		$('#portrait').hide();		
		$('.wrapper,.bgslides').show();
	}
	//resizeHandle();
}
	
	
	var mobileUpdateFunction;

	if((/ipad/i).test(navigator.userAgent.toLowerCase())) {
		ipad = true;
		window.addEventListener("orientationchange", updateOrientation, false);
		mobileUpdateFunction = updateOrientation;
	}
	
	if(mobileUpdateFunction) mobileUpdateFunction();

});

function dosocialshare(t)
{
	//how many segments of the url to use, 1, 2, etc
	var segments = 2; 
	var path = "";
	//be careful changing anything below
	var hostName = document.location.hostname;		
	//split into an array							
	var pathsplit = location.pathname.split("/");	
	//remove the first element which is blank	
	pathsplit.shift();
	//determing how many segments to use, 
	//the lesser of segments or the patsplit length
	var segsToUse = Math.min(segments,pathsplit.length)
	//add the segments
	for(i=0;i<segsToUse;i++) path += "/" + pathsplit[i];
	//add "/" to the end of the path if it's the not last character
	if(path.charAt(path.length - 1) != "/") path += "/";
	
	var shareurl = "http://"+hostName+path;
	var shareimage = shareurl+"images/shareimage.jpg";
	var sharecopy = 'The official website for the movie Fifty Shades of Grey, based on the #1 bestselling book by E L James.';
		
	switch(t)
	{	
		case "fb":
			FB.ui(
			{
			method: 'feed',
			name: 'FIFTY SHADES OF GREY',
			link: shareimage,
			picture: shareimage,
			description: sharecopy,
			message: ''
			});
			break;	
		case "tw":
			var width  = 575,
			height = 400,
			message= encodeURIComponent("Check out the official site for FIFTY SHADES OF GREY: "+shareimage),
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = "https://twitter.com/share?text="+message,
			opts   = 'status=1' +
					 ',width='  + width  +
					 ',height=' + height +
					 ',top='    + top    +
					 ',left='   + left;
			window.open(url, 'twittershare', opts);
			break;	
		case "pin":
			var width  = 700,
			height = 550,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = "http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(shareurl)+"&media="+encodeURIComponent(shareimage)+"&description="+encodeURIComponent(sharecopy),
			opts   = 'status=1' +
					 ',width='  + width  +
					 ',height=' + height +
					 ',top='    + top    +
					 ',left='   + left;
			window.open(url, 'pinteristshare', opts);
			break;	
		case "g+":
			var width  = 700,
			height = 550,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = "https://plus.google.com/share?url="+encodeURIComponent(shareimage),
			opts   = 'status=1' +
					 ',width='  + width  +
					 ',height=' + height +
					 ',top='    + top    +
					 ',left='   + left;
			window.open(url, 'gplusshare', opts);
			break;
		case "tu":
			var width  = 600,
			height = 600,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = "//www.tumblr.com/share/photo?source=" + encodeURIComponent(shareimage) + "&caption=" + encodeURIComponent(sharecopy) + "&click_thru=" + encodeURIComponent(shareurl),
			opts   = 'status=1' +
					 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes' + 
					 ',width='  + width  +
					 ',height=' + height +
					 ',top='    + top    +
					 ',left='   + left;
			window.open(url, 'googleshare', opts);
			break;
	}
			
}