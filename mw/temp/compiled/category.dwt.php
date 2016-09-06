<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $this->_var['page_title']; ?></title>
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta name="format-detection" content="telephone=no">
<script type="text/javascript">
var process_request = "<?php echo $this->_var['lang']['process_request']; ?>";
</script>
<link rel="shortcut icon" href="favicon.ico">
<link href="<?php echo $this->_var['ecsolve_path']; ?>/style/public.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/transport.js"></script>
<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/catcommon.js"></script>
<script type="text/javascript">
window.onload = function()
{
  
}
var compare_no_goods = "<?php echo $this->_var['lang']['compare_no_goods']; ?>";
var btn_buy = "加入";
var is_cancel = "取消";
var select_spe = "请选择商品属性";
</script>
<style type="text/css">
.jhdown {width:32rem; margin:0 auto; position:relative;}
.jhdown img {width:100%;}
.jhdown .jhdownbtm {display:block; position:absolute; bottom:20%; right:18%; width:25%;}
.jhxx {display:block; position:absolute; top:0; right:0; z-index:999; width:10%; height:100%;}
/*不同头部不可移动*/
a {
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
}

.header>img {height:4rem; width:100%;}
.header a  {}
.header .homei{background:url(themes/default/images/homepage.png) no-repeat 28% center; background-size:50%;}
.header .right { background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/chunSearch02.png) no-repeat center; background-size:contain;}
.header .search { display:none; position:absolute; padding-left:5%;  width:95%; height:4rem; z-index:2; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/allwaplist.jpg) no-repeat center; background-size:contain;  }
.header .search input.text {padding-left:1rem; margin-top:0.35rem; width:19rem; height:3.3rem; font-size:1.2rem; color:#aaa; vertical-align:bottom;}
.header .search input.submit { width:4.4rem; height:3.3rem; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/indexheadtopinput.png) no-repeat center; background-size:contain;vertical-align:bottom;}
.header .headerClose { right:0; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/chunclsed.png) no-repeat 0 0;   background-size:contain;}
.header h2 {line-height:4rem;}


.navWrapHide {width:32rem; position:fixed; top:0; z-index:10;}
.nav {height:3.2rem; background:white; border-bottom:0.1rem #c7c7c7 solid;}
.nav li {width:6.9rem; margin:0 1.7rem; height:3.1rem;font-size:1.3rem; line-height:3.1rem; text-align:center; color:#333;}
.nav .navShang {margin-left:2rem;}
.nav li a {display:block;}
.nav .current {color:#ff4483;}
.nav li hr {width:6.9rem; border:none; border-top:0.2rem #ff4483 solid;}
/*特卖头部专用样式*/

/*轮播图尺寸*/
#slider {
    margin: 0;
    width: 32rem;
    height: 10rem;
}
.swipe #position {width:32rem; position:absolute; bottom:1.3rem; text-align:center;}
.swipe #position {bottom:0.2rem;}
.swipe #position ol {padding:0.1rem;}
.swipe #position li {
    margin: 0px 0.2rem;
    padding: 0.2rem;
    border: 0.1rem solid rgb(255, 255, 255);
}

.navHeight {height:4rem;}
.navWrap {position:relative; width:32rem; height:3.6rem; overflow:hidden;}
.navWrapHide {position:fixed; top:0; z-index:10;}
.navWrap .nav {position:absolute; left:0; top:0; width:70rem; height:3.5rem; background:white; border-bottom:0.1rem #c7c7c7 solid;}
.navWrap .gengDuo,.navWrap .shouHui  {position:absolute; display:block; right:0; top:0; width:2rem; height:3.3rem; line-height:3.3rem; font-size:2rem; color:#888; z-index:1; cursor:pointer;}
.navWrap .shouHui {right:30rem;}
.navWrap .shouHui {display:none;}
.navWrap .nav li {float:left; width:7rem; height:3.3rem;font-size:1.3rem; line-height:3.3rem; text-align:center; color:#333;}
.navWrap .nav li a {display:block;}
.navWrap .nav .current {color:#ff4483;}
.navWrap .nav li hr {width:7rem; border:none; border-top:0.2rem #ff4483 solid;}
/*特卖头部专用样式*/

#shangXin,#meiRiBiKan,#xiaXian,#nvShen {padding:0 0.5rem;}
#shangXin h3,#meiRiBiKan h3,#xiaXian h3,#nvShen h3 {padding:0rem 0 1.2rem 0.5rem; font-weight:normal; font-size:1.2rem; line-height:1.5rem; color:#333;}
#shangXin h3{padding-top:1rem; background-position:0.5rem 1.3rem;}
#meiRiBiKan h3 {}
#xiaXian h3 {}
#nvShen h3 {}

#shangXin h3 span,#meiRiBiKan h3 span,#xiaXian h3 span,#nvShen h3 span {display:inline-block; width:12rem; height:1.5rem; line-height:1.4rem; background:#ff4483; font-size:1.0rem; color:white; text-align:center; border-radius:0.2rem;}
#nvShen h3 span{width:16rem;}
#shangXin a dt {width:31rem; height:13rem; overflow:hidden;}
#shangXin a {position:relative; display:block; margin-bottom:0.5rem; height:19.5rem; background:white; border-bottom-left-radius:0.2rem; border-bottom-right-radius:0.2rem; overflow:hidden;}

#shangXin dd {width:28.8rem; height:6.4rem; padding:0 1rem; border:0.1rem #E6E6E6 solid; border-bottom-left-radius:0.2rem; border-bottom-right-radius:0.2rem; border-top:none;}
#shangXin dd img {width:31rem; height:13rem;}
#shangXin h4{padding:0.7rem 0 1rem; font-size:1.3rem; height:1.7rem; font-weight:normal; overflow:hidden; line-height:1.7rem; word-break:keep-all; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
#shangXin .teTime { position:absolute; left:0; top:10.7rem; width:28.5rem; padding-left:2.5rem; height:2.3rem; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/wap_daojishi_bg.png) no-repeat 0 -0.3rem; background-size:31rem; line-height:2.2rem; color:white; }
#shangXin .teTime span {color:#fff;}
#shangXin .liJi {position:absolute; width:8rem; height:2.5rem; right:1rem; bottom:0.8rem; font-size:14px; text-align:center; color:white; background:#ff4483; border-radius:0.2rem;}
#shangXin .yuan{padding-right:1rem; font-size:1.5rem; color:#ff4483;}
#shangXin .old {padding-right:3rem; font-size:1.1rem; color:#999;}
#shangXin .ren {font-size:1.1rem; color:#999;}
#shangXin .teMaiTime .current .liJi{background:#999;}

#meiRiBiKan li {position:relative; float:left; margin-bottom:0.5rem; width:15.1rem; height:21.5rem; background:white; border:0.1rem #e5e5e5 solid; border-bottom-left-radius:0.2rem; border-bottom-right-radius:0.2rem; overflow:hidden;}
#meiRiBiKan li a{display:block;}
#meiRiBiKan dd {padding:0.5rem; font-size:1.1rem; border-top:0.1rem white solid; color:#9c9c9c;}
#meiRiBiKan dd h4{height:1.7rem; margin-bottom:0.2rem; font-size:1.3rem; color:#333; font-weight:normal; line-height:1.7rem; word-break:keep-all; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
#meiRiBiKan dt img {width:15.1rem; height:15.1rem;}
#meiRiBiKan dd .yuan {font-size:1.4rem; color:#ff4483;}
#meiRiBiKan .teTime { position:absolute; top:12.7rem; left:0; width:12.6rem; padding-left:2.5rem; height:2.3rem; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/wap_meiri_bg.png) no-repeat 0 -0.3rem; background-size:15.1rem; font-size:1.2rem; color:white; line-height:2.2rem; }
#meiRiBiKan .guang {position:absolute; top:0; left:0;}

#xiaXian li {position:relative; float:left; margin-bottom:0.5rem; width:15.1rem; height:22.3rem; background:white; border:0.1rem #e5e5e5 solid; border-bottom-left-radius:0.2rem; border-bottom-right-radius:0.2rem; overflow:hidden;}
#xiaXian li a{display:block;}
#xiaXian dd {padding:0.5rem; font-size:1.1rem; border-top:0.1rem white solid; color:#9c9c9c;}
#xiaXian dd h4{height:1.7rem; margin-bottom:0.2rem; font-size:1.3rem; color:#333; font-weight:normal; line-height:1.7rem; word-break:keep-all; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
#xiaXian dt img {width:15.1rem; height:15.1rem;}
#xiaXian dd .yuan {font-size:1.4rem; color:#ff4483;}
#xiaXian .teTime { position:absolute; top:12.8rem; left:0; width:12.6rem; padding-left:2.5rem; height:2.3rem; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/wap_meiri_bg.png) no-repeat 0 -0.3rem; background-size:15.1rem; font-size:1.2rem; color:white; line-height:2.2rem; }
#xiaXian .guang {position:absolute; top:0; left:0;}

#nvShen .bottom {display:block; position:relative; width:31rem; height:15rem; margin-bottom:0.5rem;}
#nvShen .bottom img{width:31rem; height:15rem;}
#nvShen .bottom h4 { position:absolute; width:31rem; height:2.3rem; bottom:0; left:0; background:url(<?php echo $this->_var['ecsolve_path']; ?>/images/wap_last_bg.png); text-indent:0.5rem; color:white; line-height:2.3rem; font-weight:normal;word-break:keep-all; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; } 


.footer .icp{line-height:2rem; padding-bottom:1rem;}
@media only screen and (min-width: 480px){#shangXin .liJi{font-size:16px;}}
@media only screen and (min-width: 640px){#shangXin .liJi{font-size:24px;}}

.Contebox{width:93%; margin:0 auto 1rem; padding-bottom:1rem; border-bottom:1px solid #ff4483;}
.S-title{height:30px; margin-top:6px; font:normal normal 15px/30px 'microsoft yahei'; color:#333333; position:relative;  background-repeat:no-repeat; background-size:13px 226px;font-size: 1.2rem;}
.S-title a{width:100%; text-align:right; height:30px; font-size:1.2rem;  position:absolute; top:0; right:0;  color: rgb(239, 89, 163);}


.gram a{ width:30.6%; margin:7px 2.5% 0 0; display:block; float:left; text-align:center;background:#ffffff; border: 0.1rem #e5e5e5 solid;color: rgb(132, 127, 127);
}
.gram a:nth-child(3n){margin-right:0;}
.gram a img{width:100%; height:auto;}

.goodsad {margin: 0; width: 32rem; margin-bottom:1rem; margin-top:1rem;}
.goodsad img {width:32rem;  text-align:center;}
.goodsad .tittle {display:block;  height:3rem; line-height:3rem; overflow:hidden; text-indent: 1rem;}
.goodsad h3 span {display:inline-block; width:12rem; height:2.8rem; line-height:2.8rem; background:#22944d; font-size:1.4rem; color:white; text-align:center; border-radius:0.2rem;}
.goodsad h3{padding-bottom:1rem; font-size:1.2rem;  font-weight:normal; color:#333; text-align:center;}


</style>

</head>
<body style="padding: 0px; margin: 0px auto;">
<div id="wrap">
    

<div class="navHeight">	
    <div class="navHeightWap">	
        <div class="header">
            <div class="search">
              <form method="post" action="search.php" name="searchForm" id="searchForm_id">
                    <input  placeholder="请输入商品名称" name="keywords" class="text"   type="text"><input class="submit" value="" type="submit">
                </form>
                <a class="headerClose"></a>
            </div>
            <img original="<?php echo $this->_var['ecsolve_path']; ?>/images/allwaplist.jpg" src="<?php echo $this->_var['ecsolve_path']; ?>/images/allwaplist.jpg">
            <h2><?php echo $this->_var['cat_name']; ?> </h2>
    <a href="javascript:history.back();"></a>
            <a class="right headerOpen"></a>
        </div>

      

    </div>
</div>


<div class="listPage">


        
                
            







            <ul class="clearfix rankNav">
                <li   class="<?php if ($this->_var['pager']['sort'] == 'goods_id' && $this->_var['pager']['order'] == 'DESC'): ?>current<?php endif; ?>"> <a href="<?php echo $this->_var['script_name']; ?>.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=goods_id&order=DESC&keywords=<?php echo $this->_var['keywords']; ?>#goods_list&">综合<hr></a></li>
                <li class="<?php if ($this->_var['pager']['sort'] == 'shop_price'): ?>current<?php endif; ?>"> <a href="<?php echo $this->_var['script_name']; ?>.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=shop_price&order=<?php if ($this->_var['pager']['sort'] == 'shop_price' && $this->_var['pager']['order'] == 'ASC'): ?>DESC<?php else: ?>ASC<?php endif; ?>&keywords=<?php echo $this->_var['keywords']; ?>#goods_list"> 价格<hr></a></li>
                <li class="<?php if ($this->_var['pager']['sort'] == 'sales_count' && $this->_var['pager']['order'] == 'DESC'): ?>current<?php endif; ?>"> <a href="<?php echo $this->_var['script_name']; ?>.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=sales_count&order=DESC&keywords=<?php echo $this->_var['keywords']; ?>#goods_list">销量<hr></a></li>
            </ul>
            
                
<?php if ($this->_var['extime'] == $this->_var['addtime']): ?>
<div class="goodsad">   <h3><span>周五全场特惠<?php echo $this->_var['zhekou']; ?>折</span></h3></div>
<?php endif; ?>




      
    <ul class="list clearfix" id="container">
       


<?php if ($this->_var['goods_list']): ?>
 <?php $_from = $this->_var['goods_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');$this->_foreach['goods_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['goods_list']['total'] > 0):
    foreach ($_from AS $this->_var['goods']):
        $this->_foreach['goods_list']['iteration']++;
?> 
 <?php if ($this->_var['goods']['goods_id']): ?>


               <li class="clearfix">
           <a href="<?php echo $this->_var['goods']['url']; ?>" class="aimg"> <img original="<?php echo $this->_var['goods']['goods_img']; ?>" src="<?php echo $this->_var['goods']['goods_img']; ?>"  class="listimg"></a>
            <p class="tittle"><a href="<?php echo $this->_var['goods']['url']; ?>"><?php echo sub_str(htmlspecialchars($this->_var['goods']['name']),23); ?></a></p>
            <p class="selling"><?php if ($this->_var['goods']['promote_price'] != ""): ?> 
				<?php echo $this->_var['goods']['promote_price']; ?>  <span  class="fR caranniu current" onclick="javascript:addToCartcat(<?php echo $this->_var['goods']['goods_id']; ?>)"  href="javascript:;">加入购物车</span>
                <?php else: ?> 
				 <?php echo $this->_var['goods']['shop_price']; ?>    <span  class="fR caranniu current" onclick="javascript:addToCartcat(<?php echo $this->_var['goods']['goods_id']; ?>)"  href="javascript:;">加入购物车</span>
                <?php endif; ?></p>
         
 
        </li>

                <?php endif; ?>
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

  <?php else: ?>

    <p>找不到匹配条件的商品哦~ ~</p>

    <?php endif; ?>




            </ul>
 		  <div id="J_PageNavWrap" class="pagenav-wrapper" style="">
<div class="pagenav-content">
				    <?php echo $this->fetch('library/pages.lbi'); ?></div></div>
				    <!--
                  <p class="sOpen" onclick="data();"><img original="<?php echo $this->_var['ecsolve_path']; ?>/images/wuliu_open.png" src="<?php echo $this->_var['ecsolve_path']; ?>/images/wuliu_open.png">点击显示更多</p>
				  <div class="nodata" style="text-align:center;"></div>-->

</div>

<?php echo $this->fetch('library/page_footer.lbi'); ?>







	   
      
      




                       </body></html>
