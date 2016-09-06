<?php
$GLOBALS['smarty']->assign('index_ad',index_ad_sy_diy(4));  
$GLOBALS['smarty']->assign('time_list',     get_time_list()); 
$GLOBALS['smarty']->assign('index_ad_sm',index_ad_sy_diy(7));  
$GLOBALS['smarty']->assign('index_ad_dsm',index_ad_sy_diy(6));  
$GLOBALS['smarty']->assign('index_ad_leimu',index_ad_sy_diy(8));  
$GLOBALS['smarty']->assign('index_news_list',index_get_all_cat_articles(114));  
$GLOBALS['smarty']->assign('index_news_cat',get_article_cat(114)); 
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<meta name="apple-touch-fullscreen" content="YES">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">
<title><?php echo $this->_var['page_title']; ?></title>
<meta name="Keywords" content="<?php echo $this->_var['Keywords']; ?>">
<meta name="Description" content="<?php echo $this->_var['Description']; ?>">
<link rel="stylesheet" type="text/css" href="<?php echo $this->_var['ecsolve_path']; ?>/style/style.css">
<style>
.bigm{padding:0 6px;}
</style>
<script type="text/javascript">
window.onload = function()
{
  
}
var compare_no_goods = "<?php echo $this->_var['lang']['compare_no_goods']; ?>";
var btn_buy = "加入";
var is_cancel = "取消";
var select_spe = "请选择商品属性";
</script>
</head>
<body>
<div id="top">
<div class="header hfix hm_on" id="hometop">
<a class="logo" href="tel:4006600606"></a>
<a href="#/fenlei.html" class="h_t h_fl">分类</a>
<form action="search.php" class="t_se" onsubmit="return se(this)"><input class="t_sl" id="t_sl" name="keyword" placeholder="搜索商品" type="search"><input class="t_sr" value="" type="submit"></form>
<a href="#/chaxun.php" class="h_t h_wl">物流</a>
</div>
<div class="sebg hid" id="sebg">
<div class="lr10 lh35 ov"><em class="left">热门搜索</em><a href="javascript:;" onclick="gx()" class="right">关闭</a></div>


  
   <?php $_from = $this->_var['searchkeywords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'val');if (count($_from)):
    foreach ($_from AS $this->_var['val']):
?>
   <a href="<?php echo $this->_var['weburl']; ?>/k-<?php echo urlencode($this->_var['val']); ?>.html"  class="hw" ><em class="red"><?php echo $this->_var['val']; ?></em></a>
   
   <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>



</div>
</div>
<div class="page load">
<div class="slider" id="slider">
<ul style="width: 3200px; height: 200px; transform: translate3d(-1920px, 0px, 0px); transition-duration: 300ms;" class="sul">



<?php $_from = $this->_var['index_ad_sm']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'ad');$this->_foreach['index_ads'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_ads']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['ad']):
        $this->_foreach['index_ads']['iteration']++;
?>
 <li style="width: 640px;"><a href="<?php echo $this->_var['ad']['url']; ?>"><img src="<?php echo $this->_var['ad']['file_url']; ?>" width="100%"></a></li>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>






</ul>

</div>

<div class="bgw pt10">


<?php $_from = $this->_var['index_ad_leimu']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'ad');$this->_foreach['index_ads'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['index_ads']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['ad']):
        $this->_foreach['index_ads']['iteration']++;
?>

 <a href="<?php echo $this->_var['ad']['url']; ?>" class="da"><img src="<?php echo $this->_var['weburl']; ?>/<?php echo $this->_var['ad']['file_url']; ?>" class="dam"><p><?php echo $this->_var['ad']['title']; ?></p></a>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>



<div class="clear"></div>
</div>


<!--
<div class="bgw mt10">
<a href="#/loot.php" class="left lotm"><div class="hoot"><p class="alL">omysky 探花Chaser10频防水深阴仿真按摩器</p><img src="<?php echo $this->_var['ecsolve_path']; ?>/images/5230_thumb_P220_1389930293705.jpg" class="limg"><p><b class="xj">¥128.00</b><del class="pl10">¥205.40</del></p></div><img src="<?php echo $this->_var['ecsolve_path']; ?>/images/thr1.png" width="100%"></a>
<div class="dhr left">
<a href="#/hot.html" class="lotm2 left"><img src="<?php echo $this->_var['ecsolve_path']; ?>/images/thr2.png" width="100%"></a>
<a href="#/new.html" class="lotm3 left"><img src="<?php echo $this->_var['ecsolve_path']; ?>/images/thr31.png" width="100%"></a>
<a href="#/need.php" class="lotm3 left"><img src="<?php echo $this->_var['ecsolve_path']; ?>/images/thr5.png" width="100%"></a>
</div>
</div>
-->



<?php $_from = get_categories_tree_index(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['cat_tree'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat_tree']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['cat_tree']['iteration']++;
?>

<div class="bgw mt10">
<h2 class="t"><a class="brl" href="<?php echo $this->_var['cat']['url']; ?>"><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a><a class="more right" href="<?php echo $this->_var['cat']['url']; ?>"></a></h2>
<div style="background-color:#1c1c1c" class="hpre ov">
<?php $_from = $this->_var['cat']['adlist']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'ad');$this->_foreach['ad'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['ad']['total'] > 0):
    foreach ($_from AS $this->_var['ad']):
        $this->_foreach['ad']['iteration']++;
?>
<a  href="<?php echo $this->_var['ad']['url']; ?>"><img width="100%" src="<?php echo $this->_var['ad']['ad_code']; ?>"></a>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</div>
</div>

<div class="m_z ov">
<?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['cat_cat_id'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat_cat_id']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['cat_cat_id']['iteration']++;
?>
<a class="red fB" href="<?php echo $this->_var['child']['url']; ?>"><?php echo htmlspecialchars($this->_var['child']['name']); ?></a>
 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
<a href="<?php echo $this->_var['cat']['url']; ?>">更多&gt;</a>
</div>
 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>




 
  






<div class="bgw">
<h2 class="t"><a class="brl" href="hot.html">精品推荐</a><a class="more right" href="<?php echo $this->_var['weburl']; ?>/search.php?intro=hot"></a></h2>
<div class="gd bigm">
<?php $_from = $this->_var['goods_hot']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'goods');$this->_foreach['name'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['name']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['goods']):
        $this->_foreach['name']['iteration']++;
?>
 <?php if ($this->_foreach['name']['iteration'] < 13): ?>
<a class="ga" href="<?php echo $this->_var['goods']['url']; ?>"><div class="pm"><img class="gm" src="<?php echo $this->_var['goods']['thumb']; ?>"><h3 class="gt"><?php echo htmlspecialchars($this->_var['goods']['name']); ?></h3><p class="lp"><em class="xj"><?php echo $this->_var['goods']['shop_price']; ?></em><em class="s_s"></em></p></div></a>
<?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</div>
</div>





</div>

<!--
<div style="position:fixed;left:0;bottom:0;width:100%;height:4.2rem;padding-top:0.4rem;z-index:90;border-top:1px solid #e0e0e0;background-color:#fcfcfc;color:#000;line-height:1.8rem;" id="weix">
<div class="page" style="position:relative;">
<img src="<?php echo $this->_var['ecsolve_path']; ?>/images/hwx3.png" style="width:4rem;height:4rem;float:left;margin:0 0.6rem 0 1rem;">
<p>您的专属私密情趣顾问（尊享1对1服务）</p>
<p>婷婷微信：<em style="background-color:#d80d0d;color:#fff;padding:0 5px;">aaagcd</em> ←长按可以复制</p>
<a href="javascript:;" onclick="document.getElementById('weix').className='hid'" style="position:absolute;color:#fff;width:2rem;background-color:#999;border-radius:100%;height:2rem;display:block;right:0.3rem;top:-0.2rem;text-align:center;line-height:2rem">X</a>
</div></div>
-->
<?php echo $this->fetch('library/page_footer.lbi'); ?>


<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/app.js"></script><script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/vganswip.js"></script>
<script>
var a_on=true;
var hometop=$("#hometop");
$("#slider").vganswiper({bi:0.3125});
$("#t_sl").focus(function(){
var w=$(this).attr("placeholder");
var v=$(this).val();
if(v==w){
$(this).val("");
}
$("#sebg").show();
}).blur(function(){
setTimeout(gx,500);
});
function gx(){
$("#sebg").hide();
}
window.onscroll=function(){
	var sTop=document.documentElement.scrollTop+document.body.scrollTop;
	if(sTop>100){
	if(a_on){
		hometop.addClass("hm_on");
		a_on=false;
		}
	}else{
		if(!a_on){
		hometop.removeClass("hm_on");
		a_on=true;
		}
	}
}
lazyload({defObj:"#lazy"});
</script>

</body></html>