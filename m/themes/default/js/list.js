var cvon=0;
var mo=0;
var isf=0;
var s_x=$("#sha");
var cv=$("#c_v");
var mods=$("#mode");
var glist=$("#glist");
var lod=$("#lod");
var pg=$("#pgnum");
var gl=$("#glist");
var nxpage=$("#nxpage");
var prpage=$("#prpage");
var npage=parseInt(page)+1;
var yem=$("#yem");
var pagesb=$("#pages");
var hpy=true;
var t_sl=$("#t_sl");
if(t_sl.length>1){
t_sl.focus(function(){
$("#qxs").show();	
}).blur(function(){
setTimeout(cans,500);
});
}
function cans(){
$("#qxs").hide();	
}
function sha(){
if(cvon==0){
	s_x.text("收起");
	cv.show();
	cvon=1;
}else{
	s_x.text("筛选");
	cv.hide()
	cvon=0;
	}
}

cv.click(function(){
	s_x.text("筛选");
	cv.hide()
	cvon=0;
});
cv.delegate("a","click",function(event){
	event.stopPropagation();
});

function mod(obj){
	if(mo==0){
		mods.addClass("von")
		glist.addClass("bigm");
		mo=1;
	}else{
		mods.removeClass("von")
		glist.removeClass("bigm");
		mo=0;
	}
}

window.onscroll=function(){
	if(isf==0&&npage<=total){
	var sTop=document.documentElement.scrollTop+document.body.scrollTop+$(window).height();
	var sHeight=document.body.scrollHeight-320-jian;
if(sTop >=sHeight){
loadData();
	}
}
}
function loadData(){
if(npage>total){return;}
isf=1;
//lod.show();
$.ajax({
        url:nurl+npage,
        async:false,
        dataType:"html",
        success:function(c){
			//lod.hide();

			var ct = $(c).find('#glist');
			//console.log(ct);
			gl.append(ct.html());
			isf=0;
			yem.text(npage+"/"+total);
			npage++;
			if(hpy){
			//pg.text(npage+"/"+total);
			pagesb.hide();
			//if(npage==total){nxpage.attr("href","javascript:;").text("最后一页了");}
			hpy=false;
			}
			
        }
    });  
}
if(page==1){prpage.attr("href","javascript:;").text("第一页了");}
yem.click(function(){
$("#pgl").show();	
})
function gxl(){
$("#pgl").hide();	
}