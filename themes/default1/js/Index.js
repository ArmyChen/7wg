﻿/******************************************************************************
* filename: index.js
* Include Modul Scripting
* (C) NSW程序部 2011-11-13
* (C) NSW(http://www.nsw88.com)
*******************************************************************************/
SKIN_PATH="/Skins/default/";
function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function (rsp) {
        var IM = gav(rsp, "showIM");
        showIM(IM);
        var username = gav(rsp, "username");
        if (username.length > 0) {
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(username);
            $j("commonHeaderUser").fadeIn(80);
            $j("login_user").show();
            $j("user_default").hide();
            return username;
        }
    });
    return "";
}

/********************
* 根据key获取 ajax对象节点值getAjaxVal
* xMsg : xml对象
* key : 节点的属性key
********************/
function gav(xMsg, key) {
    var jMsg = $(xMsg);
    var s = $(jMsg.find("node[key=" + key + "]")).text();
    return s;
}
//是否显示在线客服
function showIM(res) {
    if ($("#bodd").html() != "") {
        if (res == "True") {
            $("#bodd").show();
            $("#kefubtn").hide();
            $("#divOranIm").show();
        }
        else {
            $("#bodd").hide();
            $("#kefubtn").show();
            $("#divOranIm").hide();
        }
    }
}


//初始化头部热门关键词
function initCommonHeaderKeywords(_s) {
    if (_s == "") _s = "6";
    $.post("/ajax.ashx?action=initcommonheaderkeywords&t=" + Math.random(), {
        s: _s
    }, function (msg) {
        $j("commonHeaderkeywords").html(msg);
    });
}

function $j(elmId) { return $("#" + elmId); }
function $v(elmId, val) {
    if (val == null) {
        var o = $j(elmId).attr("value");
        if (o == null || o == undefined)
            return "";
        return o;
    } else {
        return $j(elmId).attr("value", val);
    }
}
function $tv(elmId) { return $.trim($v(elmId)); }


    //邮件订阅
function subscription(src, elmId) {
    if (elmId == null) {
        elmId = "txtSubscriptionEmail";
    }
    var _email = $.trim($j(elmId).val());
    var ptn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (_email.length == 0) {
        $a("E-Mail 不可为空");
        $j(elmId).focus();
        return false;
    }
    if (!ptn.test(_email)) {
        $a("E-Mail 格式错误。");
        $j(elmId).focus();
        return false;
    }
    showProc(src);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: _email
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
        } else {
            $a(sMsg);
        }
        showProc(src, false);
    });
}

function showProc(src, show) {
    var oImg = $j("imgProc");
    if (show == null)
        show = true;
    if (show) {
        $(src).hide();
        if (oImg.length > 0){
            oImg.remove();
        }
        $("<img src='" + SKIN_PATH + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(src);
    } else {
        $(src).show();
        oImg.remove();
    }
}
function hideDdl(cntrId) {
    var arrTags = ["select", "iframe", "applet", "object"];
    var jCntr;
    if (cntrId != null){
        jCntr = $j(cntrId);
    }else{
        jCntr = $(document.body);
    }
    for (var i = 0; i < arrTags.length; ++i) {
        jCntr.find(arrTags[i]).css("visibility", "hidden");
    } 
   
}
function $a(sMsg, boxType, autoClose, focusElmId, sTitle, behavior) {
    if (boxType == null) {
        boxType = 2;
    }
    if (autoClose == null) {
        autoClose = -1;
    }
    //标题
    if (sTitle == null) {
        sTitle = "消息提示";
    }

    hideDdl();
    var jMesbook1 = $j("mesbook1");
    if (jMesbook1.length == 0) {
        var sHtml = "<div id='mesbook1'>"
				+ "<div><img style='float:right' onclick='hideMsg()' id='mesbook1ImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam ml5' /><span id='mesbook1Title'></span></div>"
				+ "<dl class='b1'>"
					+ "<dt><img id='mesbook1Icon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title='' /></dt>"
					+ "<dd class='l_25' id='mesbook1Msg'></dd>"
					+ "<dd class='b' style='visibility:hidden' id='mesbook1AutoClose'>此窗口<span id='mesbook1Delay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd>"
					+ "<dd id='mesbook1Btns'>"
					+ "<input type='button' class='b15' value='关 闭' />"
					+ "</dd>"
				+ "</dl>"
			+ "</div>";
        $(document.body).append(sHtml);
    }
    var jMesbook1 = $j("mesbook1");
    var jMesbook1ImgClose = $j("mesbook1ImgClose");
    var jMesbook1Icon = $j("mesbook1Icon");
    var jMesbook1Msg = $j("mesbook1Msg");
    var jMesbook1AutoClose = $j("mesbook1AutoClose");
    var jMesbook1Delay = $j("mesbook1Delay");
    var jMesbook1Title = $j("mesbook1Title");
    var jMesbook1Btns = $j("mesbook1Btns");

    jMesbook1Title.html(sTitle);
    //消息内容
    jMesbook1Msg.html(sMsg);
    //图标
    var iconPath = SKIN_PATH + "Img/";
    switch (boxType) {
        case 1: iconPath += "ico_ok.gif"; break;
        case 2: iconPath += "ico_info.gif"; break;
        case 3: iconPath += "ioc_ques.gif"; break;
        case -1: iconPath += "ico_error.gif"; break;
        default: iconPath += "ico_normal.gif"; break;
    }
    jMesbook1Icon.attr("src", iconPath);

    //关闭按钮
    var okBtn = jMesbook1Btns.find("input");
    okBtn.removeAttr("onclick");
    okBtn.click(function() {
        hideMsg();
        if (focusElmId != null){
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    jMesbook1ImgClose.removeAttr("onclick");
    jMesbook1ImgClose.click(function() {
        hideMsg();
        if (focusElmId != null){
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    okBtn.focus();

    //显示
    showFullBg();
    setCM("mesbook1");
    relocation("mesbook1");
    jMesbook1.fadeIn(80);
}
/********************
* 显示一个全屏灰度背景
* elmId : 元素ID或元素
********************/
function showFullBg(elmId, isHideDdl, opacity, bgColor, zIndex, speed, behavior) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    var jElm = $j(elmId);
    if (jElm.length == 0) {
        var sHtml = "<div style='position:absolute;top:0;left:0;display:none;' id='" + elmId + "'></div>";
        $(document.body).append(sHtml);
    }
    if (opacity == null) {
        opacity = 0.75;
    }
    if (bgColor == null) {
        bgColor = "#777";
    }
    if (zIndex == null) {
        zIndex = "9";
    }
    if (speed == null) {
        speed = 80;
    }
    if (isHideDdl == null) {
        isHideDdl = true;
    }
    var jElm = $j(elmId);
    var dd = document.documentElement;
    var sWidth = dd.scrollWidth;
    var sHeight = dd.scrollHeight;
    var cH = dd.clientHeight;
    var cW = dd.clientWidth;
    if (sHeight < cH){
        sHeight = cH;
     }
    if (sWidth < cW){
        sWidth = cW;
    }
    jElm.css({ "z-index": zIndex, "background": bgColor, "opacity": opacity, "filter": "progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity * 100 + ")" });
    jElm.css({ "height": sHeight, "width": sWidth });
    if (isHideDdl) {
        hideDdl(null, behavior);
    }
    jElm.fadeIn(speed);
    if (behavior != null) {
        behavior();
    }
}

function setCM(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
   
    jElm.css({ "top": "50%", "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    var isIE=navigator.userAgent.toUpperCase().indexOf("MSIE")==-1?false:true;

    //if(isIE){
        jElm.css({ "position": "absolute", "z-index": "999" });
//    }else{
//        jElm.css({ "position": "fixed", "z-index": "999"});
//    }
    jElm.fadeIn(speed);
}

function setCMS(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
    var height=document.documentElement.scrollTop;
    if(height>100)
    {
        jElm.css({ "top": "50%", "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }
    else
    {
        h=200;
        jElm.css({ "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }

    jElm.css({ "position": "absolute", "z-index": "999" });
    jElm.fadeIn(speed);
}
/********************
* 重置一个层为绝对居中于窗口的位置
* elmId : 元素ID或元素
********************/
function relocation(elmId) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (jElm.length == 0) {
        return;
    }

    var dd = document.documentElement.scrollTop || document.body.scrollTop;
    var t = (dd - (jElm.height() / 2) + "px");
    jElm.css({ "margin-top": t/*, "left": l */ });
}
/********************
* 隐藏消息提示层
********************/
function hideMsg() {
    showDdl();
    var jShadow = $j("mesbook1");
    hideFullBg();
    jShadow.fadeOut(80);
}
/********************
* 隐藏下拉框函数
********************/
function showDdl() {
    var arrTags = ["select", "iframe", "applet", "object"];
    for (var i = 0; i < arrTags.length; ++i) {
        $(arrTags[i]).css("visibility", "visible");
    }
}
/********************
* 隐藏全屏灰度背景
* speed : (可选)渐变消退的速度
********************/
function hideFullBg(elmId, speed) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    if (speed == null) {
        speed = 80;
    }
    var jElm = $j(elmId);
    jElm.fadeOut(speed);
    showDdl();
}


     //菜单选中
function muneCur()
{
        var htmlName=location.href.substring(location.href.lastIndexOf("/")+1);
   
        if(htmlName=="")
        {
            htmlName=MARK;
        }
        var i=0;
        switch(htmlName)
        {
            case "product-0001,0014.shtml":
                 i=1;
            break;
            case "product-0001,0015.shtml":
               i=2;
            break;
            case "product-0001,0016.shtml":
                i=3;
            break;
            case "product":
               i=4;
            break;
            case "news-0001,0002,0010.shtml":
                i=5;
            break;
            case "news-0001,0002,0019.shtml":
               i=6;
            break;
            case "guanyuxiyangzhushou.html":
               i=7;
            break;
            case "news":
               i=8;
            break;
            case "lianxixiyangzhushou.html":
               i=9;
            break;
            default:
           i=0;
            break;
           
        }
        var h=0;
        $("#menulist>li").each(function (){
            
            if(h==i)
            {
                 $(this).attr("class","cur");
            }else{
                $(this).attr("class","");
                }
            h++;
        });
}


//用户登陆
function LoginCheck(_username, _password) {
    if (_username == undefined || _username.length == 0) {
        $a("请输入用户名", "错误提示", "txtUsername");
        return;
    }
    if (_password == undefined || _password.length == 0) {
        $a("请输入密码", "错误提示", "txtPassword");
        return;
    }
    $.post("/ajax.ashx?action=logincheck&t=" + Math.random(), {
        username: _username,
        password: _password
    },
       function(msg) {
           if (gav(msg, "state") == "1") {
               $a(gav(msg, "msg"),null,null,null,null,function (){
                window.location.href = location.href+"?t="+ Math.random();
               });
               //window.location.href = url;
           }
           else {
               $a(gav(msg, "msg"));
           };
       });
}


function SearchObjectByGet(FieldList, url, getUrlOnly) {
    if (getUrlOnly == null) {
        getUrlOnly = false;
    }
    var newUrl = GetSearchURL(FieldList, url);
    if (getUrlOnly) {
        return newUrl;
    }
    window.location.href = newUrl;
}

//根据字段列表获取查询页面路径字符串
//FieldList格式：控件ID名称,查询字段名称|控件ID名称1,查询字段名称1|.. 
function GetSearchURL(FieldList, URL) {
    //1\定义变量
    if (URL == null) {
        URL = getIntactRawUrl();
    }

    //2\循环把变量列表取出来,组合成URL
    var TempFieldList = FieldList.split("|");
    for (var i = 0; i < TempFieldList.length; i++) {
        //1>寻找控件
        var control1 = TempFieldList[i].split(",");
        var controlname;
        var control = document.getElementById(control1[0]);
        if (control1.length == 2) { controlname = control1[1]; } else { controlname = control1[0]; }
        if (control != null) {
            //2>取出控件的值
            var controlvalue = control.value;
            //3>设置URL
            if (controlvalue != null) {
                URL += "&" + controlname + "=" + encodeURIComponent(controlvalue);
            }
        }
    }
    return URL;
}
function getIntactRawUrl() {
    var path = location.href;
    var pos;
    pos = path.lastIndexOf('#');
    path = path.substring(0, pos);
    return path;
}

/********************
* 增加书签
* url : URL
* title : 收藏项目的标题
********************/
function addBookmark(url, title) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        return true;
    }
}

//加入收藏
function addBookmark() {
    var _title = document.title;
    var url = document.URL;
    if (window.sidebar) {
        window.sidebar.addPanel(_title, url, "");
    }
    else
        if (window.opera && window.print) {
        var __mbm = document.createElement('a');
        __mbm.setAttribute('rel', 'sidebar');
        __mbm.setAttribute('href', url);
        __mbm.setAttribute('title', _title);
        __mbm.click();
    }
    else
        if (document.all) {
        window.external.AddFavorite(url, _title);
    }
}

function subscription(src, elmId) {
    if (elmId == null) {
        elmId = "txtSubscriptionEmail";
    }
    var _email = $.trim($j(elmId).val());
    var ptn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (_email.length == 0) {
        $a("E-Mail 不可为空");
        $j(elmId).focus();
        return false;
    }
    if (!ptn.test(_email)) {
        $a("E-Mail 格式错误。");
        $j(elmId).focus();
        return false;
    }
    showProc(src);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: _email
    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
        } else {
            $a(sMsg);
        }
        showProc(src, false);
    });
}

function heaernavcs() {
    var objsiteurl = "http://" + window.location.host;
    var objurl = new Array();
    objurl[0] = "/";
    objurl[1] = "/duxinjiaogang.shtml";
    objurl[2] = "/duxincaogang.shtml";
    objurl[3] = "/duxingangcai.shtml";
    objurl[4] = "/product/";
    objurl[5] = "/yingyonganli.shtml";
    objurl[6] = "/xingyezixun.shtml";
    objurl[7] = "/baikezhishi.shtml";
    objurl[8] = "/Helps/aboutus.html";
    objurl[9] = "/Helps/ContactUs.html";


    var objnvar;
    for (var i = 0; i < objurl.length; i++) {
        objnvar = document.getElementById("headnav" + i);
        var aa = objsiteurl + objurl[i];
        if (location.href == aa) {
            document.getElementById("headnav" + i).className = "cur";
        }
    }
} 