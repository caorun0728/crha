//jsonp代码来源：http://www.cnblogs.com/napoleon_liu/archive/2010/11/04/1869369.html
var jsonp = (function(window){
    var document = window.document;
    var extend = function(obj, attrs){
        for(var name in attrs){
            obj[name] = attrs[name];
        }
    };

    var Class={
        create: function(class_define){
            var class_ = function(){};
            extend(class_, class_define);
            class_.create = function(attrs){
                var obj = new class_();
                extend(obj, attrs);
                if(obj.init){obj.init();}
                return obj;
            };
            return class_;
        }
    };

    var is_ie = !!window.ActiveXObject;

    var jsonp_imp=null;
    var jsonp = function () {
        jsonp_imp.apply(null, arguments);    
    };

    extend(jsonp, {
        guid:0,
        requests:{},
        avail_tag:[],
        request_timeout:5 //seconds
    });

    var removeChildSafe = function(parent, node) {
        for(var i=0, len=node.childNodes.length; i<len; ++i) {
            removeChildSafe(node, node.childNodes[i]);
        }
		setTimeout(function(){parent.removeChild(node);}, 2500);
    };

    var Request = Class.create({
        prototype:{
            remove:function(){
                var js = this.js;
                if(is_ie) {    
                    this.finished = 1;
                    this.on_ready_state_change();
                    js.detachEvent("onreadystatechange", this.on_ready_state_change);
                    this.js = null;
                }
                removeChildSafe(js.parentNode, js);    
                js = null;
                delete jsonp.requests[this.id];
            },
            on_complete:function(){
                if(this.success) {
                    this.success();
                    this.success = null;
                }
            },
            on_timeout:function(){
                var state = this.js.readyState;
                if( state != 'complete' &&  state != 'loaded' && this.failed) {
                    this.failed();
                    this.failed = null;
                }
                state = null;
                this.remove();
            },
            init:function(){
                var request = this;
                if(is_ie) {
                    request.on_ready_state_change = function(){
                        if(request.finished) {
                            request = null;
                            return;
                        }
                        if(request.js.readyState=='complete' || request.js.readyState=='loaded') {
                            request.on_complete();
                        }
                    };
                    this.js.attachEvent("onreadystatechange", request.on_ready_state_change);
                } else {
                    this.js.onload = function(){ 
                        request.on_complete();
                    };
                }
                setTimeout(function(){request.on_timeout();}, request.timeout);
            }
        }
    });

    var head = document.getElementsByTagName('head')[0];
    jsonp_imp = function(url, charset, timeout, failed, success) {
        var js = document.createElement('script');
        head.appendChild(js);
        if(!charset) {charset = 'utf-8';}
        var id = jsonp.guid++;
        if(!timeout) {timeout = jsonp.request_timeout*1000;}
        var now = new Date();
        var request = Request.create({
                    id: id,
                    url: url,
                    charset: charset, 
                    failed: failed, 
                    success: success,
                    js: js, 
                    stat_time: now,
                    timeout: timeout
        });
        jsonp.requests[id] = request;
        js.charset = charset;
        js.src = url;
        return id;
    };
    
    return jsonp;
})(window);