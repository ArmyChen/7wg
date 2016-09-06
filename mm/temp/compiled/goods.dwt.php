<?php
$GLOBALS['smarty']->assign('article_cat_cnv',    get_article_cat(9)); 
$GLOBALS['smarty']->assign('article_list_cnv',    index_get_all_cat_articles(9));  
$GLOBALS['smarty']->assign('index_ad',index_ad_sy_diy(1)); 
?>
<!DOCTYPE html>
<html style="font-size: 20px;"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta name="format-detection" content="telephone=no">
<title><?php echo $this->_var['page_title']; ?></title>
<meta name="Keywords" content="">
<meta name="Description" content="">
<link rel="shortcut icon" href="favicon.ico">

<link href="<?php echo $this->_var['ecsolve_path']; ?>/style/public.css" rel="stylesheet" type="text/css">

<script type="text/javascript">
var process_request = "<?php echo $this->_var['lang']['process_request']; ?>";
</script>
<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/mobjs/common.js"></script>
<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/transport.js"></script>
<script type="text/javascript">
// 筛选商品属性
jQuery(function($) {
	$(".info").click(function(){
		$('.goodsBuy .fields').slideToggle("fast");
	});
})

function changenum(diff) {
	var num = parseInt(document.getElementById('goods_number').value);
	var goods_number = num + Number(diff);
	if( goods_number >= 1){
		document.getElementById('goods_number').value = goods_number;//更新数量
		changePrice();
	}
}


</script>
<style type="text/css">
#slider {
    margin: 0;
    width: 32rem;
    
}


.jhdown {width:32rem; margin:0 auto; position:relative;}
.jhdown img {width:100%;}
.jhdown .jhdownbtm {display:block; position:absolute; bottom:20%; right:18%; width:25%;}
.jhxx {display:block; position:absolute; top:0; right:0; z-index:999; width:10%; height:100%;}


#tuWen {position:fixed; display:none; top:0; width:30rem; margin-left:50%; left:-16rem; margin-top: 0;background:#FFF;}
</style>
 <style>
 .header>img {height:4rem; width:100%;}
		    .catt{height:auto;overflow:hidden;padding-bottom:5px;}
			.catt a{border: #7E7E7E 1px solid;  text-align: center; background-color: #fff; margin-
			left:0px;margin-top:6px;padding-left: 10px;padding-right: 10px;display: block; white-space: nowrap;
			color:#000; text-decoration:none; float:left; margin-right:5px}
			.catt a:hover {border:#ED0036 1px solid;}
			.catt a:focus {outline-style:none;}
			.catt .cattsel {border:#ED0036 1px solid; background: url("themes/aizhigu/images/test.gif") no-repeat
			bottom right; background-color:#FFFFFF}
			.catt .cattsel a:hover {border: #ED0036 1px solid;background: url("themes/aizhigu/images/test.gif") no-
			repeat bottom right;}
			.decrease {
    background: #fafafa none repeat scroll 0 0;
    border: 0 none;
    display: inline-block;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    height: 100%;
    width: 2rem;
     float: left;
    text-align: center;
}
.num {
    border: 0 none;
    border-radius: 0;
    color: #333;
    float: left;
    font-size: 1.4rem;
  
    height: 100%;
    text-align: center;
    width: 2.8rem;
}
 .txt {
    border: 1px solid #e3e3e3;
    display: inline-block;
    height: 2.3rem;
    letter-spacing: 0;
    line-height: 2.3rem;
    overflow: hidden;
    vertical-align: middle;
}

.summary{line-height:2rem;}
#wapTeMai img{height:32rem;}
.swipe-wrap li {text-align:center;}

		  </style>
</head>
<body style="padding: 0px; margin: 0px auto;">


<div class="header headerHide">
    <img original="<?php echo $this->_var['ecsolve_path']; ?>/images/allwaplist.jpg" src="<?php echo $this->_var['ecsolve_path']; ?>/images/allwaplist.jpg">
    <h2>商品详情</h2>
    <a href="javascript:history.back();"></a>
    <a href="index.php" class="right"></a>
</div>

<script src="<?php echo $this->_var['ecsolve_path']; ?>/jsct/TouchSlide.js"></script>

<div id="wapTeMai">
    
    <div style="visibility: visible;" id="slider" class="swipe">
        <ul style="width: 1920px;" class="clearfix swipe-wrap">

<li data-index="0"><img alt="" src="<?php echo $this->_var['goods']['goods_img']; ?>"/></li>


 <?php $_from = $this->_var['pictures']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'picture');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['picture']):
        $this->_foreach['no']['iteration']++;
?>	
<?php if ($this->_foreach['no']['iteration'] > 1): ?>
<li data-index="<?php echo $this->_var['key']; ?>" > <img src="<?php echo $this->_var['picture']['img_url']; ?>" ></li>
<?php endif; ?>
 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 


                 </ul>
    <!--  <div  id="position">
            <ol class="clearfix">
             
		<?php $_from = $this->_var['pictures']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'picture');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['picture']):
        $this->_foreach['no']['iteration']++;
?>
                <li></li>
                <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
            </ol>
        </div>-->
   </div>
        
</div>
















<div class="goods">

    
    <div class="information">
        <h3><?php echo $this->_var['goods']['goods_name']; ?></h3>
        
        <div class="clearfix xiaoShou"  style=" margin-top: 0.6rem;  margin-bottom: 0.6rem;">
	<span class="price">  ￥<?php echo $this->_var['goods']['shop_price']; ?> </span>
	
	<span class="fR clearfix"><a  href="javascript:;" onclick="javascript:collectg(<?php echo $this->_var['goods']['goods_id']; ?>)" ><img style="display: block;" original="<?php echo $this->_var['ecsolve_path']; ?>/images/index_otherbuy_hearts.png" class="fL" src="<?php echo $this->_var['ecsolve_path']; ?>/images/index_otherbuy_hearts.png"></a>收藏</span></div>
      

<div class="summary">
          
 <?php if ($this->_var['volume_price_list']): ?>
      <div class="padd">
       <font class="f1"><?php echo $this->_var['lang']['volume_price']; ?>：</font><br />
       <table  border="0" cellpadding="3" cellspacing="1" bgcolor="#ddd">
        <tr>
          <td align="center" bgcolor="#ebebeb"><strong><?php echo $this->_var['lang']['number_to']; ?></strong></td>
          <td align="center" bgcolor="#ebebeb"><strong><?php echo $this->_var['lang']['preferences_price']; ?>（不含运费）</strong></td>
        </tr>
        <?php $_from = $this->_var['volume_price_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('price_key', 'price_list');if (count($_from)):
    foreach ($_from AS $this->_var['price_key'] => $this->_var['price_list']):
?>
        <tr>
        <td align="center" bgcolor="#FFFFFF" class="shop"><?php echo $this->_var['price_list']['number']; ?></td>
        <td align="center" bgcolor="#FFFFFF" class="shop"><?php echo $this->_var['price_list']['format_price']; ?>/件</td>
        </tr>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
       </table>
      </div>
      <?php endif; ?>
 
      

<form action="javascript:addToCartg(<?php echo $this->_var['goods']['goods_id']; ?>)" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY" >

 <div class="shopcart" style="height:auto">

		  <table>
		  <?php $_from = $this->_var['specification']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('spec_key', 'spec');if (count($_from)):
    foreach ($_from AS $this->_var['spec_key'] => $this->_var['spec']):
?>
		  <tr><td>
		  <div class="pro_num" style="float:left; padding-top:0px"><span style="padding-top:6px"><?php echo $this->_var['spec']['name']; ?>：</span>
		  <div class="clear"></div>
		  	<div class="catt">
			<?php $_from = $this->_var['spec']['values']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'value');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['value']):
?>
			<a <?php if ($this->_var['key'] == 0): ?>class="cattsel"<?php endif; ?> onclick="changeAtt(this,<?php echo $this->_var['value']['id']; ?>,<?php echo $this->_var['goods']['goods_id']; ?>)"
			href="javascript:;" name="<?php echo $this->_var['value']['id']; ?>" title="[<?php if ($this->_var['value']['price'] > 0): ?><?php echo $this->_var['lang']['plus']; ?>{elseif $value.price
			lt 0}<?php echo $this->_var['lang']['minus']; ?><?php endif; ?> <?php echo $this->_var['value']['format_price']; ?>]"><?php echo $this->_var['value']['label']; ?><input style="display:none"
			id="spec_value_<?php echo $this->_var['value']['id']; ?>" type="radio" name="spec_<?php echo $this->_var['spec_key']; ?>" value="<?php echo $this->_var['value']['id']; ?>" <?php if ($this->_var['key'] == 0): ?>
			checked<?php endif; ?> /></a>
			<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
			</div>
		  </div>
		  </td></tr>
		  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
		  <script language="javascript">
		  
		  function changeAtt(t,a,goods_id) {
			t.lastChild.checked='checked';
			for (var i = 0; i<t.parentNode.childNodes.length;i++) {
			if (t.parentNode.childNodes[i].className == 'cattsel') {
			t.parentNode.childNodes[i].className = '';
			}
			}
			t.className = "cattsel";

			changePrice();
			}
		  </script>
		  <tr><td>


<div class="pro_num">
              <div class="adjust hover-down"> 
	      
	      
	      
	<span class="txt">
		
 <button onclick="javascript:change_num(1);changePrice()" class="decrease" type="button">-</button>
                         <input type="text" value="1" name="number" id="buy_num" maxlength="10" onblur="changePrice()"   class="num">
			<button onclick="javascript:change_num(2);changePrice()" class="decrease" type="button">+</button>  

</span>

		
 <span style="padding-top:6px"><?php echo $this->_var['lang']['amount']; ?>：</span>
			  <font id="ECS_GOODS_AMOUNT" style=" color:#FF0000; "></font>



		
		</div> 


	      



              </div>

	  
	      
	      </td>
	      </tr>

		
	

 <tr>
		  <td>
 <div class="btn"> 
	 
	    
	  <!-- <span class="fR gcaranniu current" style="float:left;  margin-top: 1rem;"  onclick="javascript:collectg(<?php echo $this->_var['goods']['goods_id']; ?>)">加入收藏</span>-->
	    
	    <span class="fR gcaranniu current"  style="float:left;  margin-top: 1rem;"  onclick="javascript:addToCartg(<?php echo $this->_var['goods']['goods_id']; ?>,0,0)">加入购物车</span>
	    
	    </div>
 </td>
	      </tr>


		  </table>
            
            <div class="clear"></div>
           
          </div>
		  </form>

</div>

<script>
function change_num(type){

	var num=1;num = parseInt($("#buy_num").val());

	if(isNaN(num)){num=1;}

	if(type==1){num--;}else if(type==2){num++;}else{}

	if(num<1){num=1;}else if(num>1000){num=1000;}else{}	

	$("#buy_num").val(num);
	
	if($("#buy_num").val()==1){
		$("a.amount-up").css("background-position","4px -25px");
		$("a.amount-up").css("border","1px solid #A7A7A7");
		
		$("a.amount-down").css("background-position","-56px 4px");
		$("a.amount-down").css("border","1px solid #BDBDBD");		
	}else if($("#buy_num").val()>=1000){
		$("a.amount-up").css("background-position","4px 4px");
		$("a.amount-up").css("border","1px solid #BDBDBD");
		
		$("a.amount-down").css("background-position","-56px -26px");
		$("a.amount-down").css("border","1px solid #A7A7A7");
	}else if($("#buy_num").val()>1&&$("#buy_num").val()<1000){
		$("a.amount-up").css("background-position","4px -25px");
		$("a.amount-up").css("border","1px solid #A7A7A7");
		
		$("a.amount-down").css("background-position","-56px -26px");
		$("a.amount-down").css("border","1px solid #A7A7A7");	
	}else{
	
	}
	
}
$("#buy_num").change(function(){change_num(3);});		  
		  </script>



    </div>
    
	
   				
   
    <div class="details">
        <ul id="tuWenOld" class="nav clearfix">
            <li class="tuWen current">商品详情<hr></li>
            <li class="pingJia">用户评价<hr></li>
        </ul>
        <ul style="display: none;" id="tuWen" class="nav clearfix">
            <li class="tuWen current">商品详情<hr></li>
            <li class="pingJia">用户评价<hr></li>
        </ul>
        <ul class="card">
        	<li style="display: list-item;" class="textCard">
            	<div class="goodsDate clearfix">
             <?php if ($this->_var['goods']['mobile_desc']): ?>
		<?php echo $this->_var['goods']['mobile_desc']; ?>
	  <?php else: ?>
		<?php echo $this->_var['goods']['goods_desc']; ?>
	  <?php endif; ?>
                </div>
            </li>



        	<li style="display: none;" class="userEvaluation">
            	<ol>	            	
		

                <div id="ECS_COMMENT"> <?php 
$k = array (
  'name' => 'comments',
  'type' => $this->_var['type'],
  'id' => $this->_var['id'],
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></div>
            


		                        	
					                </ol>
            
            </li>
        </ul>
    </div>






























</div>













<?php echo $this->fetch('library/page_footer2.lbi'); ?>


<div class="clear"></div>

<div class="popupbox popupbox_addcart" id="popupbox_addcart" style="height:auto; ">
  <div class="popupbox_t">
    <div class="popupbox_con popupboxbg">
      <p style=" line-height:22px;"> <span class="green b" id="ShopcartMessage"></span><br>
       添加成功！<br>
      </p>
      <p style="margin-top: 15px;">
        <input type="button" name="button" class="addtocart_product_button" value="去购物车结算" onclick="window.location='flow.php'">
        <a href="javascript: BoxAddcartClose();" style="margin-left: 15px;" rel="nofollow"  class="addtoelse_product_button">再逛逛&gt;&gt;</a> </p>
      <a href="javascript:void(0);" id="close" class="close closelink1" rel="nofollow">&nbsp;</a> </div>
  </div>
</div>


 <script language="javascript">
	var fittingsArr = new Array(); 
	var fittingsArrLen = 0;
	var addCartCount = 0;
	function sum_price(){
	    fittingsArr.length=0; 
		var sum_price1 = 0.00;
		var sum_price2 = 0.00;
		$('.chk_fit').each(
			function(){
			    var chk = this.checked;
				if (chk){
					var price1 = $(this).attr('price1');
					var price2 = $(this).attr('price2');
					sum_price1 += price1*1;
					sum_price2 += price2*1;
					
					fittingsArr.push($(this).attr('goods_id'));
				}
			}
		);
		$('#fit_price1').html(parseInt(sum_price1));
		$('#fit_price2').html(parseInt(sum_price2));
		$('#fit_price3').html(parseInt(sum_price2 - sum_price1));
	}
	sum_price();
	function addFittingsToCart(){
	      fittingsArrLen = fittingsArr.length;
		  if (fittingsArrLen == 1){
		  	alert('请选择套餐组合产品!');
			return;
		  }
		  for (var i = 0; i < fittingsArr.length; i ++){

			  var spec_arr     = new Array();
			  var number       = 1;
			  var quick		   = 0;
  
			  var goods        = new Object();
			  var formBuy      = document.forms['ECS_FORMBUY'];
			  goods.goods_id = fittingsArr[i];
			  goods.number   = 1;
			  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
			  
			  // 检查是否有商品规格 
			  if (i == 0 && formBuy)
			  {
				spec_arr = getSelectedAttributes(formBuy);
			
				if (formBuy.elements['number'])
				{
				  number = formBuy.elements['number'].value;
				}
			
				quick = 1;
			  }
			  
			  goods.spec     = spec_arr;
			  goods.number   = number;
			  goods.quick    = quick;
			  
			  $.ajax({
					type:"POST",
					url:"flow.php?step=add_to_cart",
					cache:false,
					dataType:'json',     //接受数据格式
					data:'goods=' + $.toJSON(goods),
					success:addFittingsToCartResponse
				});
			  
			  
		  }
		  
	}
	function addFittingsToCartResponse(result)
	{
	  if (result.error > 0)
	  {
		
	  }
	  else
	  {
			addCartCount = addCartCount + 1;
			if (fittingsArrLen == addCartCount){
				
				$('#cartInfo_number').html(result.goods_number);
				
				$('#popupbox_addcart_totalcount').html(result.goods_number);
				$('#popupbox_addcart_subtotal').html(result.goods_price);
				$.blockUI({message: $('#popupbox_addcart')}); 
				$('#close').click(
					function(){
						$.unblockUI();
					    location.href = location.href;
					}
				);
				
				
			}
	  }
	}
	</script>

<script type="text/javascript" src="<?php echo $this->_var['ecsolve_path']; ?>/js/aizhigu_goods.js" charset="utf-8"></script>
<script src="<?php echo $this->_var['ecsolve_path']; ?>/js/bfd.js" type="text/javascript"></script>
<script src="<?php echo $this->_var['ecsolve_path']; ?>/js/blockUI.js" type="text/javascript"></script>





<script type="text/javascript">
var goods_id = <?php echo $this->_var['goods_id']; ?>;
var goodsattr_style = <?php echo empty($this->_var['cfg']['goodsattr_style']) ? '1' : $this->_var['cfg']['goodsattr_style']; ?>;
var gmt_end_time = <?php echo empty($this->_var['promote_end_time']) ? '0' : $this->_var['promote_end_time']; ?>;
<?php $_from = $this->_var['lang']['goods_js']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>
var <?php echo $this->_var['key']; ?> = "<?php echo $this->_var['item']; ?>";
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
var goodsId = <?php echo $this->_var['goods_id']; ?>;
var now_time = <?php echo $this->_var['now_time']; ?>;

changePrice();

/**
 * 点选可选属性或改变数量时修改商品价格的函数
 */
function changePrice()
{
  var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
  var qty = document.forms['ECS_FORMBUY'].elements['number'].value;
  
  $.ajax({
			type:"GET",
			url:"goods.php",
			cache:false,
			dataType:'json',     //接受数据格式
			data:'act=price&id=' + goodsId + '&attr=' + attr + '&number=' + qty,
			success:changePriceResponse
			});

  
}

/**
 * 接收返回的信息
 */
function changePriceResponse(res)
{
  if (res.err_msg.length > 0)
  {
    alert(res.err_msg);
  }
  else
  {
    document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;

    if (document.getElementById('ECS_GOODS_AMOUNT'))
      document.getElementById('ECS_GOODS_AMOUNT').innerHTML = res.result;
  }
}

function addPackageToCart(packageId)
{
  var package_info = new Object();
  var number       = 1;

  package_info.package_id = packageId
  package_info.number     = number;
  
  $.ajax({
			type:"POST",
			url:"flow.php?step=add_package_to_cart",
			cache:false,
			dataType:'json',     //接受数据格式
			data:'package_info=' + $.toJSON(package_info),
			success:addPackageToCartResponse
			});


}

function addToCartg(goodsId, parentId, flag)
{


  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var formBuy      = document.forms['ECS_FORMBUY'];
  var quick		   = 0;

  // 检查是否有商品规格 
  if (formBuy)
  {
    spec_arr = getSelectedAttributesg(formBuy);
 
    if (formBuy.elements['number'])
    {
      number = formBuy.elements['number'].value;
    }

	quick = 1;
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goodsId;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  
  if (flag == 0){


  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponseExg, 'POST', 'JSON');





  }else{
	
	Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponseg, 'POST', 'JSON');
	}			

}




function getSelectedAttributesg(formBuy)
{
  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < formBuy.elements.length; i ++ )
  {
    var prefix = formBuy.elements[i].name.substr(0, 5);

    if (prefix == 'spec_' && (
      ((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) ||
      formBuy.elements[i].tagName == 'SELECT'))
    {
      spec_arr[j] = formBuy.elements[i].value;
      j++ ;
    }
  }

  return spec_arr;
}









function addToCartResponseExg(result)
{

//alert(result);

  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
      }
    }
    // 没选规格，弹出属性选择框
    else
    {
      alert(result.message);
    }
  }
  else
  {

		$('#popupbox_addcart_totalcount').html(result.goods_number);
		$('#popupbox_addcart_subtotal').html(result.goods_price);
		$.blockUI({message: $('#popupbox_addcart')}); 
	 
$('#close').click(
			function(){
				$.unblockUI();
				location.href = location.href;
			}
		);
	
        
		
  }
}
function collectg(goodsId)
{
	Ajax.call('user.php?act=collect', 'id=' + goodsId, collectResponseg, 'GET', 'JSON');
 

}


function collectResponseg(result)
{
  alert(result.message);
}




function addToCartResponseg(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
      }
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
    else
    {
      //alert(result.message);
    }
  }
  else
  {
  alert("ssss");
      
		$('#popupbox_addcart_totalcount').html(result.goods_number);
		$('#popupbox_addcart_subtotal').html(result.goods_price);
    	$.blockUI({
			message: $('#popupbox_addcart')
		});
		$('#close').click(
			function(){
				$.unblockUI();
				location.href = location.href;
			}
		);
	
  }
}


function BoxAddcartscClose(){
$('#popupbox_addcartsc a.closesc').trigger('click');
}


function BoxAddcartClose(){
	$('#popupbox_addcart .popupbox_t .popupbox_con a.close').trigger('click');
}










</script>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>

  wx.config({
    debug: false,
    appId: '<?php echo $this->_var['signPackage']['appId']; ?>',
    timestamp: <?php echo $this->_var['signPackage']['timestamp']; ?>,
    nonceStr: '<?php echo $this->_var['signPackage']['nonceStr']; ?>',
    signature: '<?php echo $this->_var['signPackage']['signature']; ?>',
    jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage' 
    ]
  });
 wx.ready(function () {
	//甜心100监听“分享给朋友”
    wx.onMenuShareAppMessage({
      title: '<?php echo $this->_var['goods']['goods_style_name']; ?>',
      desc: '<?php echo $this->_var['goods']['goods_style_name']; ?>',
      link: '<?php echo $this->_var['url']; ?>',
      imgUrl: '<?php echo $this->_var['site_url']; ?><?php echo $this->_var['goods']['original_img']; ?>',
      trigger: function (res) {
		
		<?php if ($this->_var['url']): ?>
        alert('恭喜！分享可以获取提成哦！');
		<?php else: ?>
		alert('糟糕，需要分销商登录才能获得提成哦！');
		<?php endif; ?>
		
      },
      success: function (res) {
		<?php if ($this->_var['dourl']): ?>
        window.location.href="<?php echo $this->_var['dourl']; ?>&type=1"; 
		<?php endif; ?>
      },
      cancel: function (res) {
        alert('很遗憾，您已取消分享');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });

	//分享到朋友圈甜心100
    wx.onMenuShareTimeline({
      title: '<?php echo $this->_var['goods']['goods_style_name']; ?>',
      link: '<?php echo $this->_var['url']; ?>',
      imgUrl: '<?php echo $this->_var['site_url']; ?><?php echo $this->_var['goods']['original_img']; ?>',
      trigger: function (res) {
			
        <?php if ($this->_var['url']): ?>
			alert('恭喜！分享可以获取提成哦！');
		<?php else: ?>
			alert('糟糕，需要分销商登录才能获得提成哦！');
		<?php endif; ?>
      },
      success: function (res) {
       	<?php if ($this->_var['dourl']): ?>
        window.location.href="<?php echo $this->_var['dourl']; ?>&type=2"; 
		<?php endif; ?>
      },
      cancel: function (res) {
         alert('很遗憾，您已取消分享');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });


});

</script>




	     <script>
var slider =
  Swipe(document.getElementById('slider'), {
    auto: 5000,
    continuous: true,

  });
function getNum(n){ 
	if(n < 10) {return "0" + n;}
    else {return n;}
}
$('#meiRiBiKan li:odd,#xiaXian li:odd').css('float','right');
</script>

<script>
$(function(){ 
   $("#cuoWu").hide();
});


card('.details');
$('.jhxx').click(function(){
	$('.jhdown').hide();
	});


/*导航条固定*/
$('.nav .tuWen').click(function(){
		$('.nav li').removeClass('current');	
		$('.nav .tuWen').addClass('current');	
	});
$('.nav .pingJia').click(function(){
		$('.nav li').removeClass('current');	
		$('.nav .pingJia').addClass('current');	
	});
	
	
$(window).scroll(function(){
	var tuwengao = $('#tuWenOld').offset().top;
	var tuwenscrollt =  $(window).scrollTop();
	var tuwenshow =  tuwenscrollt - tuwengao;
	if ( tuwenshow < 0 ) { 
		$('#tuWen').hide(); 
	}else{
		$('#tuWen').show(); 
		}
		
		if(tuwenscrollt>500){
			$('.bototmFixTop').show();
		}else{
			$('.bototmFixTop').hide();
		};			
});

$(document).ready(function(e) {
$('.sx_cont:last').after('<br />');
$('.zengPin').click(function(){
	$('.gift').slideToggle();
	})
});



</script>
</body>
</html>