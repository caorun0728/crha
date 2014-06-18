$(function(){
	$(".btn_url").click(function(){
		//$(".player, .content").slideDown(600);
		//$(".info").slideUp(600);
		$("#playfrm").click();
		$("#playfrm").disabled = true;
	});
	$("#u").focus(function(){
		var txt_value = $(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		};
	});
	$("#u").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);
		};
	});
});

$(document).ready(function(){ 
    var hash = window.location.hash + '';
    if(hash.indexOf('#%21')==0){
        hash = decodeURIComponent(hash);
    }
    if(hash.match(/#!u=(.+)/)){
        var url = hash.match(/#!u=(.+)/)[1];
        if(url){
            $('#u').val(url);
            $('#frompost').submit();
        }
    }
});

(function() {
	function h(a) {
		return (a + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s+/g, "&nbsp;")
	}
	function j(a) {
		a.stopPropagation();
		a.preventDefault();
		return ! 1
	}
	var b = {},
	e = this; (e.navigator.userAgent + "").match(/(?:android|iphone|ipod|ipad|ios)/i);
	var m = swfobject.hasFlashPlayerVersion("10"),
	p = !!(e.navigator.userAgent + "").match(/(?:chrome)/i);
	b.uploader = {
		uploadFile: function() {
			if (b.uploader.uploader && b.uploader.uploader.x2_uploader_uploadFile) return b.uploader.uploader.x2_uploader_uploadFile()
		},
		setStyle: function(a) {
			if (b.uploader.uploader && b.uploader.uploader.x2_uploader_setStyle) return b.uploader.uploader.x2_uploader_setStyle(a)
		},
		uploadError: function(a) {
			alert(6 == a ? "BT文件上传超时，请稍候重试": 5 == a ? "BT文件大小超过6M，请选择其他BT文件": "BT文件上传失败，请稍候重试")
		},
		browser: function() {},
		uploadSuccess: function(a) {
			if (a = jQuery.parseJSON(a)) {
				var c = a.ret;
				0 == c && 40 == a.infohash.length ? ($("#u").val(a.infohash), $("#playfrm").click(), b.message("info", "BT种子已上传完成, 准备播放！")) : b.message("info", 2 == c ? "请求参数有误，请检查后重新添加": 6 == c ? "该种子文件解析失败，请稍后再试": "BT文件上传失败，请稍候重试")
			}
		},
		uploadProgress: function(a, c) {
			b.message("info", "正在上传 " + h(c) + " " + parseInt(100 * a, 10) + "%")
		},
		setFilename: function(a) {
			b.message("info", "开始上传 " + h(a))
		},
		init: function() {
			var a = $("#btupload");
			if (a.length) if (m) {
				var c = a.outerHeight(),
				d = a.outerWidth();
				$('<div id="uploader"><div id="_uploader"></div></div>').css({
					position: "absolute",
					left: 0,
					top: 0,
					width: d,
					height: c,
					cursor: "pointer"
				}).appendTo(a.css({
					position: "relative"
				}).off("click"));
				swfobject.embedSWF("http://vod.7ibt.com/yb/img/fileUploader.swf?v=2.8.80", "_uploader", d, c, "10.0.0", "http://vod.xunlei.com/library/expressInstall.swf", {
					description: "请选择BT种子文件(*.torrent)",
					extension: "*.torrent",
					timeOut: 30,
					//url: "http://dynamic.vod.lixian.xunlei.com/interface/upload_bt?from=vlist&t=" + (new Date).getTime(),
url: "http://i.vod.xunlei.com/submit/post_bt?from=" + b,
                                        cekUrl: "http://vod.7ibt.com/yb/check_bt.php",
					label: "",
					limitSize: 6442450944,
					jsPrefix: "x2.uploader.",
					asPrefix: "x2_uploader_",
					isImmediately: !0
				},
				{
					wmode: "transparent",
					allowScriptAccess: "always"
				},
				function(c) {
					c.success && (b.uploader.uploader = ( - 1 != e.navigator.appName.indexOf("Microsoft") ? e: document)._uploader, a.prop("disabled", !1))
				})
			} else a.hide()
		}
	};
	var k = $("#filename"),
	i = [];
	b.showFiles = function(a) {
		function c(a) {
			var b = [];
			$.each(a,
			function(a, c) {
				var d = decodeURIComponent(c.name),
				d = d.slice(d.lastIndexOf("/") + 1);
				b.push('<option value="' + c.index + '">');
				b.push(h(d));
				b.push("</option>")
			});
			return b.join("")
		}
		function d() {
			var c = k.find("select").val(),
			d = {};
			$.each(i,
			function(a, b) {
				if (b.index == c) return d = b,
				!0
			});
			b.play({
				url: "bt://" + a + "/" + d.index,
				name: decodeURIComponent(d.name),
				hash: a,
				index: d.index,
				gcid: d.gcid,
				cid: d.cid,
				filesize: d.file_size,
				url_hash: d.url_hash,
				duration: 0
			})
		}
		a = a.toUpperCase();
		if (a.match(/^[A-Z0-9]{40}$/)) return b.message("info", "分析磁力链或种子视频..."),
		$.getJSON("http://i.vod.xunlei.com/req_subBT/info_hash/" + a + "/req_num/2000/req_offset/0/?jsonp=?",
		function(a) {
			if (!a || !a.resp) b.message("info", "分析磁力链或种子视频失败。");
			else if (i = a.resp.subfile_list || [], i.length) {
				a = i;
				if (1 == a.length) a = decodeURIComponent(a[0].name);
				else {
					var e = [],
					g = {};
					$.each(a,
					function(a, b) {
						var c = decodeURIComponent(b.name);
						0 < c.indexOf("/") ? (c = c.slice(0, c.lastIndexOf("/")), g[c] = g[c] ? g[c] : [], g[c].push(b)) : e.push(b)
					});
					var f = ["<select>"];
					f.push(c(e));
					$.each(g,
					function(a, b) {
						b = g[a];
						f.push('<optgroup label="' + h(a) + '">');
						f.push(c(b));
						f.push("</optgroup>")
					});
					f.push("</select>");
					a = f.join("") + " 该链接包含多个视频，请选择播放。"
				}
				k.html(a).show().find("select").change(d).find("option").click(d)
			}
		}).error(function() {
			b.message("info", "获取磁力链或种子视频失败。")
		})
	};
	b.initMessageBox = function() {
		function a() {
			b.css({
				top: $(e).scrollTop(),
				left: ($(e).width() - b.width()) / 2 + $(e).scrollLeft()
			})
		}
		if (!$("#message").length) {
			var b = $('<div id="message"><div id="message-inner"><div id="message-close">' + right_str + '</div><div id="message-body">' + left_str + '</div></div></div>').appendTo("body").on("mouseover",
			function() {
				$(this).stop().css({
					opacity: 1
				})
			});
			$(e).on({
				resize: a,
				scroll: a
			});
			a();
		}
	};
	b.message = function(a, c) {
		b.initMessageBox();
		if (!a || !c) return $("#message").hide();
		$("#message-body").html(c).attr();
		$("#message").show().stop().css({
			opacity: 1
		});
		"error" == a ? alert(c) : $("#message").fadeOut(800);
	};
	b.hashQuery = function(a) {
		var b = {},
		d = e.location.hash + "";
		0 == d.indexOf("#%21") && (d = decodeURIComponent(d));
		$.each(d.replace(/^#!/, "").split("&"),
		function(a, d) {
			var e = d.match(/^(.*?)=(.*?)$/);
			e && (b[e[1]] = decodeURIComponent(e[2]))
		});
		return a ? b[a] : b
	};
	$(document).ready(function() {
		b.initMessageBox();
		b.uploader.init();
	});
	e.x2 = b
})();