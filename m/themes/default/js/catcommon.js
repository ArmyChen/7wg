/* $Id : common.js 4865 2007-01-31 14:04:10Z paulgao $ */

function get_group_buy_time(_gmt_end_time)
{
	var auctionDate = 0;
var _GMTEndTime = 0;
var now_time = null;
var day = "天";
var hour = "小时";
var minute = "分";
var second = "秒";
var end = "结束";
var gmt_end_time = _gmt_end_time;	
var cur_date = new Date();
var startTime = cur_date.getTime();
var Temp;					
try
  {
    _GMTEndTime = gmt_end_time;
	_day = day;
    _hour = hour;
    _minute = minute;
    _second = second;
    _end = end;

  }
  catch (e)
  {
  }
  if (_GMTEndTime > 0)
  {
    if (now_time == undefined)
    {
      var tmp_val = parseInt(_GMTEndTime) - parseInt(cur_date.getTime() / 1000 + cur_date.getTimezoneOffset() * 60);
    }
    else
    {
      var tmp_val = parseInt(_GMTEndTime) - now_time;
    }
    if (tmp_val > 0)
    {
      auctionDate = tmp_val;
    }
  }
  
  now = new Date();
  var ts = parseInt((startTime - now.getTime()) / 1000) + auctionDate;
  var dateLeft = 0;
  var hourLeft = 0;
  var minuteLeft = 0;
  var secondLeft = 0;
  var hourZero = '';
  var minuteZero = '';
  var secondZero = '';
  if (ts < 0)
  {
    ts = 0;
    CurHour = 0;
    CurMinute = 0;
    CurSecond = 0;
  }
  else
  {
    dateLeft = parseInt(ts / 86400);
    ts = ts - dateLeft * 86400;
    hourLeft = parseInt(ts / 3600);
    ts = ts - hourLeft * 3600;
    minuteLeft = parseInt(ts / 60);
    secondLeft = ts - minuteLeft * 60;
  }

  if (hourLeft < 10)
  {
    hourZero = '0';
  }
  if (minuteLeft < 10)
  {
    minuteZero = '0';
  }
  if (secondLeft < 10)
  {
    secondZero = '0';
  }

  if (dateLeft > 0)
  {
    hourLeft = dateLeft*24 + hourLeft;
    Temp = '<b>' + hourLeft+'</b>' + _hour+'<b>' + minuteZero + minuteLeft+'</b>' + _minute + '<b>' + secondZero + secondLeft + '</b>' + _second;
	
  }
  else
  {
    if (hourLeft > 0)
    {
      Temp = '<b>'+hourLeft+'</b>' + _hour+'<b>' + minuteZero + minuteLeft+'</b>' + _minute + '<b>' + secondZero + secondLeft + '</b>' + _second;
    }
    else
    {
      if (minuteLeft > 0)
      {
        Temp = '<b>' + minuteLeft+'</b>' + _minute + '<b>' + secondZero + secondLeft + '</b>' + _second;
      }
      else
      {
        if (secondLeft > 0)
        {
          Temp = '<b>' + secondLeft + '</b>' + _second;
        }
        else
        {
          Temp = '';
        }
      }
    }
  }

  if (auctionDate <= 0 || Temp == '')
  {
    Temp = "<strong>" + _end + "</strong>";
  }
  if (screen.width>=1210){
  Temp = '剩余'+Temp;
  }
  return Temp;
}

/* *
 * 添加商品到购物车czneng 
 */
function addToCartcat(goodsId, parentId)
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
    spec_arr = getSelectedAttributes(formBuy);

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
  //888
  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponsecat, 'POST', 'JSON');
}










/**
 * 获得选定的商品属性
 */
function getSelectedAttributes(formBuy)
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

/* *
 * 处理添加商品到购物车的反馈信息
 */
function addToCartResponsecat(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = '/user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
      }
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
		//alert(result.goods_id);
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
	//alert(result.goods_id);
   opennoSpeDiv(result.message, result.goods_id, result.parent);
  }
}

/* *
 * 添加商品到收藏夹
 */
function collect(goodsId)
{
  Ajax.call('/user.php?act=collect', 'id=' + goodsId, collectResponse, 'GET', 'JSON');
}

/* *
 * 处理收藏商品的反馈信息
 */
function collectResponse(result)
{
  alert(result.message);
}

/* *
 * 处理会员登录的反馈信息
 */
function signInResponse(result)
{
  toggleLoader(false);

  var done    = result.substr(0, 1);
  var content = result.substr(2);

  if (done == 1)
  {
    document.getElementById('member-zone').innerHTML = content;
  }
  else
  {
    alert(content);
  }
}

/* *
 * 评论的翻页函数
 */
function gotoPage(page, id, type)
{
  Ajax.call('comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, gotoPageResponse, 'GET', 'JSON');
}

function gotoPageResponse(result)
{
  document.getElementById("ECS_COMMENT").innerHTML = result.content;
}

/* *
 * 商品购买记录的翻页函数
 */
function gotoBuyPage(page, id)
{
  Ajax.call('goods.php?act=gotopage', 'page=' + page + '&id=' + id, gotoBuyPageResponse, 'GET', 'JSON');
}

function gotoBuyPageResponse(result)
{
  document.getElementById("ECS_BOUGHT").innerHTML = result.result;
}

/* *
 * 取得格式化后的价格
 * @param : float price
 */
function getFormatedPrice(price)
{
  if (currencyFormat.indexOf("%s") > - 1)
  {
    return currencyFormat.replace('%s', advFormatNumber(price, 2));
  }
  else if (currencyFormat.indexOf("%d") > - 1)
  {
    return currencyFormat.replace('%d', advFormatNumber(price, 0));
  }
  else
  {
    return price;
  }
}

/* *
 * 夺宝奇兵会员出价
 */

function bid(step)
{
  var price = '';
  var msg   = '';
  if (step != - 1)
  {
    var frm = document.forms['formBid'];
    price   = frm.elements['price'].value;
    id = frm.elements['snatch_id'].value;
    if (price.length == 0)
    {
      msg += price_not_null + '\n';
    }
    else
    {
      var reg = /^[\.0-9]+/;
      if ( ! reg.test(price))
      {
        msg += price_not_number + '\n';
      }
    }
  }
  else
  {
    price = step;
  }

  if (msg.length > 0)
  {
    alert(msg);
    return;
  }

  Ajax.call('snatch.php?act=bid&id=' + id, 'price=' + price, bidResponse, 'POST', 'JSON')
}

/* *
 * 夺宝奇兵会员出价反馈
 */

function bidResponse(result)
{
  if (result.error == 0)
  {
    document.getElementById('ECS_SNATCH').innerHTML = result.content;
    if (document.forms['formBid'])
    {
      document.forms['formBid'].elements['price'].focus();
    }
    newPrice(); //刷新价格列表
  }
  else
  {
    alert(result.content);
  }
}
//888
onload = function()
{
    
}

/* *
 * 夺宝奇兵最新出价
 */

function newPrice(id)
{
  Ajax.call('snatch.php?act=new_price_list&id=' + id, '', newPriceResponse, 'GET', 'TEXT');
}

/* *
 * 夺宝奇兵最新出价反馈
 */

function newPriceResponse(result)
{
  document.getElementById('ECS_PRICE_LIST').innerHTML = result;
}

/* *
 *  返回属性列表
 */
function getAttr(cat_id)
{
  var tbodies = document.getElementsByTagName('tbody');
  for (i = 0; i < tbodies.length; i ++ )
  {
    if (tbodies[i].id.substr(0, 10) == 'goods_type')tbodies[i].style.display = 'none';
  }

  var type_body = 'goods_type_' + cat_id;
  try
  {
    document.getElementById(type_body).style.display = '';
  }
  catch (e)
  {
  }
}

/* *
 * 截取小数位数
 */
function advFormatNumber(value, num) // 四舍五入
{
  var a_str = formatNumber(value, num);
  var a_int = parseFloat(a_str);
  if (value.toString().length > a_str.length)
  {
    var b_str = value.toString().substring(a_str.length, a_str.length + 1);
    var b_int = parseFloat(b_str);
    if (b_int < 5)
    {
      return a_str;
    }
    else
    {
      var bonus_str, bonus_int;
      if (num == 0)
      {
        bonus_int = 1;
      }
      else
      {
        bonus_str = "0."
        for (var i = 1; i < num; i ++ )
        bonus_str += "0";
        bonus_str += "1";
        bonus_int = parseFloat(bonus_str);
      }
      a_str = formatNumber(a_int + bonus_int, num)
    }
  }
  return a_str;
}

function formatNumber(value, num) // 直接去尾
{
  var a, b, c, i;
  a = value.toString();
  b = a.indexOf('.');
  c = a.length;
  if (num == 0)
  {
    if (b != - 1)
    {
      a = a.substring(0, b);
    }
  }
  else
  {
    if (b == - 1)
    {
      a = a + ".";
      for (i = 1; i <= num; i ++ )
      {
        a = a + "0";
      }
    }
    else
    {
      a = a.substring(0, b + num + 1);
      for (i = c; i <= b + num; i ++ )
      {
        a = a + "0";
      }
    }
  }
  return a;
}

/* *
 * 根据当前shiping_id设置当前配送的的保价费用，如果保价费用为0，则隐藏保价费用
 *
 * return       void
 */
function set_insure_status()
{
  // 取得保价费用，取不到默认为0
  var shippingId = getRadioValue('shipping');
  var insure_fee = 0;
  if (shippingId > 0)
  {
    if (document.forms['theForm'].elements['insure_' + shippingId])
    {
      insure_fee = document.forms['theForm'].elements['insure_' + shippingId].value;
    }
    // 每次取消保价选择
    if (document.forms['theForm'].elements['need_insure'])
    {
      document.forms['theForm'].elements['need_insure'].checked = false;
    }

    // 设置配送保价，为0隐藏
    if (document.getElementById("ecs_insure_cell"))
    {
      if (insure_fee > 0)
      {
        document.getElementById("ecs_insure_cell").style.display = '';
        setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(insure_fee));
      }
      else
      {
        document.getElementById("ecs_insure_cell").style.display = "none";
        setValue(document.getElementById("ecs_insure_fee_cell"), '');
      }
    }
  }
}

/* *
 * 当支付方式改变时出发该事件
 * @param       pay_id      支付方式的id
 * return       void
 */
function changePayment(pay_id)
{
  // 计算订单费用
  calculateOrderFee();
}

function getCoordinate(obj)
{
  var pos =
  {
    "x" : 0, "y" : 0
  }

  pos.x = document.body.offsetLeft;
  pos.y = document.body.offsetTop;

  do
  {
    pos.x += obj.offsetLeft;
    pos.y += obj.offsetTop;

    obj = obj.offsetParent;
  }
  while (obj.tagName.toUpperCase() != 'BODY')

  return pos;
}

function showCatalog(obj)
{
  var pos = getCoordinate(obj);
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'block')
  {
    div.style.display = 'block';
    div.style.left = pos.x + "px";
    div.style.top = (pos.y + obj.offsetHeight - 1) + "px";
  }
}

function hideCatalog(obj)
{
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'none') div.style.display = "none";
}

function sendHashMail()
{
  Ajax.call('user.php?act=send_hash_mail', '', sendHashMailResponse, 'GET', 'JSON')
}

function sendHashMailResponse(result)
{
  alert(result.message);
}

/* 订单查询 */
function orderQuery()
{
  var order_sn = document.forms['ecsOrderQuery']['order_sn'].value;

  var reg = /^[\.0-9]+/;
  if (order_sn.length < 10 || ! reg.test(order_sn))
  {
    alert(invalid_order_sn);
    return;
  }
  Ajax.call('user.php?act=order_query&order_sn=s' + order_sn, '', orderQueryResponse, 'GET', 'JSON');
}

function orderQueryResponse(result)
{
  if (result.message.length > 0)
  {
    alert(result.message);
  }
  if (result.error == 0)
  {
    var div = document.getElementById('ECS_ORDER_QUERY');
    div.innerHTML = result.content;
  }
}

function display_mode(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() {document.forms['listform'].submit();}
}

function display_mode_wholesale(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() 
    {
        document.forms['wholesale_goods'].action = "wholesale.php";
        document.forms['wholesale_goods'].submit();
    }
}

/* 修复IE6以下版本PNG图片Alpha */
function fixpng()
{
  var arVersion = navigator.appVersion.split("MSIE")
  var version = parseFloat(arVersion[1])

  if ((version >= 5.5) && (document.body.filters))
  {
     for(var i=0; i<document.images.length; i++)
     {
        var img = document.images[i]
        var imgName = img.src.toUpperCase()
        if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
        {
           var imgID = (img.id) ? "id='" + img.id + "' " : ""
           var imgClass = (img.className) ? "class='" + img.className + "' " : ""
           var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
           var imgStyle = "display:inline-block;" + img.style.cssText
           if (img.align == "left") imgStyle = "float:left;" + imgStyle
           if (img.align == "right") imgStyle = "float:right;" + imgStyle
           if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
           var strNewHTML = "<span " + imgID + imgClass + imgTitle
           + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
           + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
           + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
           img.outerHTML = strNewHTML
           i = i-1
        }
     }
  }
}

function hash(string, length)
{
  var length = length ? length : 32;
  var start = 0;
  var i = 0;
  var result = '';
  filllen = length - string.length % length;
  for(i = 0; i < filllen; i++)
  {
    string += "0";
  }
  while(start < string.length)
  {
    result = stringxor(result, string.substr(start, length));
    start += length;
  }
  return result;
}

function stringxor(s1, s2)
{
  var s = '';
  var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var max = Math.max(s1.length, s2.length);
  for(var i=0; i<max; i++)
  {
    var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    s += hash.charAt(k % 52);
  }
  return s;
}

var evalscripts = new Array();
function evalscript(s)
{
  if(s.indexOf('<script') == -1) return s;
  var p = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/ig;
  var arr = new Array();
  while(arr = p.exec(s)) appendscript(arr[1], '', arr[2], arr[3]);
  return s;
}

function $$(id)
{
    return document.getElementById(id);
}

function appendscript(src, text, reload, charset)
{
  var id = hash(src + text);
  if(!reload && in_array(id, evalscripts)) return;
  if(reload && $$(id))
  {
    $$(id).parentNode.removeChild($$(id));
  }
  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  //scriptNode.charset = charset;
  try
  {
    if(src)
    {
      scriptNode.src = src;
    }
    else if(text)
    {
      scriptNode.text = text;
    }
    $$('append_parent').appendChild(scriptNode);
  }
  catch(e)
  {}
}

function in_array(needle, haystack)
{
  if(typeof needle == 'string' || typeof needle == 'number')
  {
    for(var i in haystack)
    {
      if(haystack[i] == needle)
      {
        return true;
      }
    }
  }
  return false;
}

var pmwinposition = new Array();

var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
function pmwin(action, param)
{
  var objs = document.getElementsByTagName("OBJECT");
  if(action == 'open')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].style.visibility != 'hidden')
      {
        objs[i].setAttribute("oldvisibility", objs[i].style.visibility);
        objs[i].style.visibility = 'hidden';
      }
    }
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    var pmwidth = 800;
    var pmheight = clientHeight * 0.9;
    if(!$$('pmlayer'))
    {
      div = document.createElement('div');div.id = 'pmlayer';
      div.style.width = pmwidth + 'px';
      div.style.height = pmheight + 'px';
      div.style.left = ((clientWidth - pmwidth) / 2) + 'px';
      div.style.position = 'absolute';
      div.style.zIndex = '999';
      $$('append_parent').appendChild(div);
      $$('pmlayer').innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left">' +
        '<div style="width: 800px; height: ' + pmheight + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' +
        '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' +
        '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="关闭" /></a>' +
        '<iframe id="pmframe" name="pmframe" style="width:' + pmwidth + 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>';
    }
    $$('pmlayer').style.display = '';
    $$('pmlayer').style.top = ((clientHeight - pmheight) / 2 + scrollTop) + 'px';
    if(!param)
    {
        pmframe.location = '/pm.php';
    }
    else
    {
        pmframe.location = '/pm.php?' + param;
    }
  }
  else if(action == 'close')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].attributes['oldvisibility'])
      {
        objs[i].style.visibility = objs[i].attributes['oldvisibility'].nodeValue;
        objs[i].removeAttribute('oldvisibility');
      }
    }
    hiddenobj = new Array();
    $$('pmlayer').style.display = 'none';
  }
}

var pmwindragstart = new Array();
function pmwindrag(e, op)
{
  if(op == 1)
  {
    pmwindragstart = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    pmwindragstart[2] = parseInt($$('pmlayer').style.left);
    pmwindragstart[3] = parseInt($$('pmlayer').style.top);
    doane(e);
  }
  else if(op == 2 && pmwindragstart[0])
  {
    var pmwindragnow = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    $$('pmlayer').style.left = (pmwindragstart[2] + pmwindragnow[0] - pmwindragstart[0]) + 'px';
    $$('pmlayer').style.top = (pmwindragstart[3] + pmwindragnow[1] - pmwindragstart[1]) + 'px';
    doane(e);
  }
  else if(op == 3)
  {
    pmwindragstart = [];
    doane(e);
  }
}

function doane(event)
{
  e = event ? event : window.event;
  if(is_ie)
  {
    e.returnValue = false;
    e.cancelBubble = true;
  }
  else if(e)
  {
    e.stopPropagation();
    e.preventDefault();
  }
}

/* *
 * 添加礼包到购物车
 */
function addPackageToCart(packageId)
{
  var package_info = new Object();
  var number       = 1;

  package_info.package_id = packageId
  package_info.number     = number;
  //888
  Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + objToJSONString(package_info), addPackageToCartResponse, 'POST', 'JSON');
}

/* *
 * 处理添加礼包到购物车的反馈信息
 */
function addPackageToCartResponse(result)
{
  if (result.error > 0)
  {
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = '/user.php?act=add_booking&id=' + result.goods_id;
      }
    }
    else
    {
      alert(result.message);    
    }
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = 'flow.php?step=cart';
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }

    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type)
      {
        case '1' :
          if (confirm(result.message)) location.href = cart_url;
          break;
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}

function setSuitShow(suitId)
{
    var suit    = document.getElementById('suit_'+suitId);

    if(suit == null)
    {
        return;
    }
    if(suit.style.display=='none')
    {
        suit.style.display='';
    }
    else
    {
        suit.style.display='none';
    }
}


/* 以下四个函数为属性选择弹出框的功能函数部分 */
//检测层是否已经存在
function docEle() 
{
  return document.getElementById(arguments[0]) || false;
}

//生成属性选择层
function openSpeDiv(message, goods_id, parent) 
{

	
  var _id = "speDiv";
  var m = "mask";
  if (docEle(_id)) document.removeChild(docEle(_id));
  if (docEle(m)) document.removeChild(docEle(m));
  //计算上卷元素值
  var scrollPos; 
  if (typeof window.pageYOffset != 'undefined') 
  { 
    scrollPos = window.pageYOffset; 
  } 
  else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
  { 
    scrollPos = document.documentElement.scrollTop; 
  } 
  else if (typeof document.body != 'undefined') 
  { 
    scrollPos = document.body.scrollTop; 
  }

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "hidden";
    i++;
  }

  // 新激活图层
  var newDiv = document.createElement("div");
  newDiv.id = _id;
  newDiv.style.position = "absolute";
  newDiv.style.zIndex = "10000";
  newDiv.style.width = "284px";
  newDiv.style.height = "";
  newDiv.style.top = (parseInt(scrollPos + 50)) + "px";
  newDiv.style.left = (parseInt(document.body.offsetWidth) - 300) / 2 + "px"; // 屏幕居中
  newDiv.style.overflow = "auto"; 
  newDiv.style.background = "#FFF";
  newDiv.style.border = "3px solid #BD0000";
  newDiv.style.padding = "5px";
//alert("fffffffff");
  //生成层内内容
  newDiv.innerHTML = '<h4>' + select_spe + "</h4>";

  for (var spec = 0; spec < message.length; spec++)
  {
      newDiv.innerHTML += '<hr ><div class=spc>【' +  message[spec]['name'] + '】</div>';

      if (message[spec]['attr_type'] == 1)
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          if (val_arr == 0)
          {
            newDiv.innerHTML += "<div class='lipart'><input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' checked /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br /></div>';      
          }
          else
          {
            newDiv.innerHTML += "<div class='lipart'><input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br /></div>';      
          }
        } 
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
      else
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          newDiv.innerHTML += "<input style='margin-left:15px;' type='checkbox' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + ' [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';     
        }
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
  }
  newDiv.innerHTML += "<div class='spc'>【 购买数量 】</div><div style='margin-bottom:8px;'><span class='goods_cut'  onclick='javascript:goods_cut(" + goods_id + ")' >[-]</span><input type='text' value='1' class='goods_number_cat' name='goods_number_cat_" + goods_id +"'  value='1'   id='goods_number_cat_" + goods_id +"' /><span class='goods_add'  onclick='javascript:goods_add(" + goods_id + ")' >[+]</span></div>";
  newDiv.innerHTML += "<div style='clear:both;'></div><br /><input type='button' value='加入购物车' class='buyaniu' onclick='javascript:submit_car(" + goods_id + "," + parent + ")'/><input type='button' value=' 去结算 ' class='buyzhexu'  onclick='javascript:submit_div(" + goods_id + "," + parent + ")'/>&nbsp;&nbsp;<input type='button' value=' 取消 ' class='buycancle' onclick='javascript:cancel_div()'/><br />";
  document.body.appendChild(newDiv);


  // mask图层
  var newMask = document.createElement("div");
  newMask.id = m;
  newMask.style.position = "absolute";
  newMask.style.zIndex = "9999";
  newMask.style.width = document.body.scrollWidth + "px";
  newMask.style.height = document.body.scrollHeight + "px";
  newMask.style.top = "0px";
  newMask.style.left = "0px";
  newMask.style.background = "#FFF";
  newMask.style.filter = "alpha(opacity=30)";
  newMask.style.opacity = "0.40";
  document.body.appendChild(newMask);
}







//生成属性选择层
function opennoSpeDiv(message, goods_id, parent) 
{
  var _id = "speDiv";
  var m = "mask";
  if (docEle(_id)) document.removeChild(docEle(_id));
  if (docEle(m)) document.removeChild(docEle(m));
  //计算上卷元素值
  var scrollPos; 
  if (typeof window.pageYOffset != 'undefined') 
  { 
    scrollPos = window.pageYOffset; 
  } 
  else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
  { 
    scrollPos = document.documentElement.scrollTop; 
  } 
  else if (typeof document.body != 'undefined') 
  { 
    scrollPos = document.body.scrollTop; 
  }



  // 新激活图层
  var newDiv = document.createElement("div");
  newDiv.id = _id;
  newDiv.style.position = "absolute";
  newDiv.style.zIndex = "10000";
  newDiv.style.width = "284px";
  newDiv.style.height = "260px";
  newDiv.style.top = (parseInt(scrollPos + 50)) + "px";
  newDiv.style.left = (parseInt(document.body.offsetWidth) - 300) / 2 + "px"; // 屏幕居中
  newDiv.style.overflow = "auto"; 
  newDiv.style.background = "#FFF";
  newDiv.style.border = "3px solid #BD0000";
  newDiv.style.padding = "5px";

  //生成层内内容
  newDiv.innerHTML = '<h4 >' + select_spe + "</h4>";

  
  newDiv.innerHTML += "<div class='spc'>【 购买数量 】</div><div style='margin-bottom:8px;'><span class='goods_cut'  onclick='javascript:goods_cut(" + goods_id + ")' >[-]</span><input type='text' value='1' class='goods_number_cat' name='goods_number_cat_" + goods_id +"'  value='1'   id='goods_number_cat_" + goods_id +"' /><span class='goods_add'  onclick='javascript:goods_add(" + goods_id + ")' >[+]</span></div>";
  newDiv.innerHTML += "<div style='clear:both;'></div><center><input type='button' value='加入购物车' class='buyaniu' onclick='javascript:submit_carnospc(" + goods_id + "," + parent + ")'/><input type='button' value=' 去结算 ' class='buyzhexu' onclick='javascript:submit_div(" + goods_id + "," + parent + ")'/>&nbsp;&nbsp;<input type='button' value=' 取消 ' class='buycancle' onclick='javascript:cancel_div()'/><br /><br /></center>";
  document.body.appendChild(newDiv);


  // mask图层
  var newMask = document.createElement("div");
  newMask.id = m;
  newMask.style.position = "absolute";
  newMask.style.zIndex = "9999";
  newMask.style.width = document.body.scrollWidth + "px";
  newMask.style.height = document.body.scrollHeight + "px";
  newMask.style.top = "0px";
  newMask.style.left = "0px";
  newMask.style.background = "#FFF";
  newMask.style.filter = "alpha(opacity=30)";
  newMask.style.opacity = "0.40";
  document.body.appendChild(newMask);
}













//获取选择属性后，加入购物车
function submit_car(goods_id, parentId) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  //var number       = 10;
//czneng开发
var fid = "goods_number_cat_"+goods_id;


if(document.getElementById(fid))
{
var number = document.getElementById(fid).value;
}






//czneng开发
  var input_arr      = document.getElementsByTagName('input'); 
  var quick		   = 1;

  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < input_arr.length; i ++ )
  {
    var prefix = input_arr[i].name.substr(0, 5);

    if (prefix == 'spec_' && (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))
    {
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  //888
  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponseback, 'POST', 'JSON');

  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }

}







//，加入购物车
function submit_carnospc(goods_id, parentId) 
{

//alert("测试弹出");
  var goods        = new Object();
  //var number       = 10;
//czneng开发
var fid = "goods_number_cat_"+goods_id;


if(document.getElementById(fid))
{
var number = document.getElementById(fid).value;
}






//czneng开发
  var quick		   = 1;



  goods.quick    = quick;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  //888
  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponseback, 'POST', 'JSON');

  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  

}







//czneng
function goods_cut(goodsId){
var fid = "goods_number_cat_"+goodsId;
var num_val=document.getElementById(fid);
var new_num=num_val.value;
var Num = parseInt(new_num);
if(Num>1)Num=Num-1;
num_val.value=Num;
}

function goods_add(goodsId){
var fid = "goods_number_cat_"+goodsId;
var num_val=document.getElementById(fid);
var new_num=num_val.value;
var Num = parseInt(new_num);
Num=Num+1;
num_val.value=Num;
}

//czneng



/* *
 * 处理添加商品到购物车的反馈信息
 */
function addToCartResponseback(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = '/user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
      }
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
		//alert("测试弹出");
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = document.URL;  //czneng
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }

    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type)
      {
        case '1' :
          if (confirm(result.message)) location.href = cart_url;
          break;
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}











//获取选择属性后，再次提交到购物车
function submit_div(goods_id, parentId) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  //czneng开发
var fid = "goods_number_cat_"+goods_id;
if(document.getElementById(fid))
{
var number = document.getElementById(fid).value;
}
//czneng开发
  var input_arr      = document.getElementsByTagName('input'); 
  var quick		   = 1;

  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < input_arr.length; i ++ )
  {
    var prefix = input_arr[i].name.substr(0, 5);

    if (prefix == 'spec_' && (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))
    {
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  //888
  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponsesup, 'POST', 'JSON');

  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }

}




/* *
 * 处理添加商品到购物车的反馈信息
 */
function addToCartResponsesup(result)
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
    else
    {
      alert(result.message);
    }
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = 'flow.php?step=cart';
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }

    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type)
      {
        case '1' :
          if (confirm(result.message)) location.href = cart_url;
          break;
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}














// 关闭mask和新图层
function cancel_div() 
{
  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }
}

/**
 * 回到页面顶部
 * @param acceleration 加速度
 * @param time 时间间隔 (毫秒)
 **/
function goTop(acceleration, time) {
 acceleration = acceleration || 0.1;
 time = time || 16;
 
 var x1 = 0;
 var y1 = 0;
 var x2 = 0;
 var y2 = 0;
 var x3 = 0;
 var y3 = 0;
 
 if (document.documentElement) {
  x1 = document.documentElement.scrollLeft || 0;
  y1 = document.documentElement.scrollTop || 0;
 }
 if (document.body) {
  x2 = document.body.scrollLeft || 0;
  y2 = document.body.scrollTop || 0;
 }
 var x3 = window.scrollX || 0;
 var y3 = window.scrollY || 0;
 
 // 滚动条到页面顶部的水平距离
 var x = Math.max(x1, Math.max(x2, x3));
 // 滚动条到页面顶部的垂直距离
 var y = Math.max(y1, Math.max(y2, y3));
 
 // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
 var speed = 1 + acceleration;
 window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

 // 如果距离不为零, 继续调用迭代本函数
 if(x > 0 || y > 0) {
  var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
  window.setTimeout(invokeFunction, time);
 }
}




var setAmount={
					min:1,
					max:999,
					reg:function(x){
						return new RegExp("^[1-9]\\d*$").test(x);
					},
					amount:function(obj,mode){
						var x=$(obj).val();
						if (this.reg(x)){
							if (mode){
								x++;
							}else{
								x--;
							}
						}else{
							alert("请输入正确的数量！");
							$(obj).val(1);
							$(obj).focus();
						}
						return x;						
					},
					reduce:function(obj){
						var x=this.amount(obj,false);
						if (x>=this.min){
							$(obj).val(x);
						}else{
							alert("商品数量最少为"+this.min);
							$(obj).val(1);
							$(obj).focus();
						}
					},
					add:function(obj){
						var x=this.amount(obj,true);
						if (x<=this.max){
							$(obj).val(x);
						}else{
							alert("商品数量最多为"+this.max);
							$(obj).val(999);
							$(obj).focus();
						}
					},
					modify:function(obj){
						var x=$(obj).val();
						if (x<this.min||x>this.max||!this.reg(x)){
							alert("请输入正确的数量！");
							$(obj).val(1);
							$(obj).focus();
						}
					}
				}




  function ForDight(Dight,How)
		　　{
			　　var c=Math.pow(10,How);
			　　return Math.round(Dight*c)/c;
		　　}
  function compute_comb_sum_price(obj){
		   		var temp = $('#fitting-price').html();
				temp = temp.replace('￥', '');
				var comb_sum_price = temp * 1;
				temp = $(obj).attr('price');
				temp = temp.replace('￥', '');
				var comb_price = temp * 1;
				if (temp != ''){
					if (obj.checked){
						comb_sum_price = comb_sum_price + comb_price;
					}else{
					    comb_sum_price = comb_sum_price - comb_price;
					}
				}
				$('#fitting-amount').html(getFittingGoodsNum());
				if ($('#fitting-amount').html() == ''){
					$('#fitting-amount').html('0');
				}
		        $('#fitting-price').html('￥'+ForDight(comb_sum_price, 1));
				
		   }
  function batchAddCart(){
		   		var obj = document.getElementsByName('comb_id');
				var comb_id = '';
				
				for (var i = 0; i < obj.length; i ++){
					if (obj[i].checked){
                        comb_id = obj[i].value;
					}
				}
				if (comb_id == ''){
					alert('请选择最佳组合商品！');
					return;
				}
				var _goods_id = document.forms['ECS_FORMBUY'].elements['goodsId'].value;
                addToCart(_goods_id);
				for (var i = 0; i < obj.length; i ++){
					if (obj[i].checked){
					    addToCartEx(obj[i].value);
					}
				}

				
		        
                 location.href = "flow.php?step=cart";
				
		   }
		   
		   function getFittingGoodsNum(){
		   		var obj = document.getElementsByName('comb_id');
				var num = 0;
				
				for (var i = 0; i < obj.length; i ++){
					if (obj[i].checked){
                        num ++;
					}
				}
				return num;
			}
		   
		   function clearFittingGoods(){
		   		var obj = document.getElementsByName('comb_id');
				var comb_id = '';
				
				for (var i = 0; i < obj.length; i ++){
					obj[i].checked = false;
				}
			}	
		   clearFittingGoods();
		   function addToCartEx(goodsId, parentId)
			{
			  var goods        = new Object();
			  var spec_arr     = new Array();
			  var fittings_arr = new Array();
			  var number       = 1;
			  var formBuy      = document.forms['ECS_FORMBUY'];
			  var quick		   = 0;
			
			  goods.quick    = quick;
			  goods.spec     = spec_arr;
			  goods.goods_id = goodsId;
			  goods.number   = number;
			  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
			  Ajax.call('flow.php?step=add_to_cart', 'goods=' + objToJSONString(goods), addToCartResponseEx, 'POST', 'JSON');
			  
			}
			
			function addToCartResponseEx(result)
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
                  alert('该商品存在规格选择！添加到购物车失败');
                }
                else
                {
                  alert(result.message);
                }
              }
              else
              {
              
              }
			}
  

//商品信息切换
 function nTabs(thisObj, Num) {
            if (thisObj.className == "active") return;
            var tabList = document.getElementById("myTab").getElementsByTagName("li");
            for (i = 0; i < tabList.length; i++) {//点击之后，其他tab变成灰色，内容隐藏，只有点击的tab和内容有属性
                if (i == Num) {
                    thisObj.className = "active";
                    document.getElementById("myTab_Content" + i).style.display = "block";
                } else {
                    tabList[i].className = "normal";
                    document.getElementById("myTab_Content" + i).style.display = "none";
                }
            }
        }

//商品信息切换


/**
 * 回到页面顶部
 * @param acceleration 加速度
 * @param time 时间间隔 (毫秒)
 **/
function goTop(acceleration, time) {
	acceleration = acceleration || 0.1;
	time = time || 16;
 
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;
	var x3 = 0;
	var y3 = 0;
 
	if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}
	if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	var x3 = window.scrollX || 0;
	var y3 = window.scrollY || 0;
 
	// 滚动条到页面顶部的水平距离
	var x = Math.max(x1, Math.max(x2, x3));
	// 滚动条到页面顶部的垂直距离
	var y = Math.max(y1, Math.max(y2, y3));
 
	// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
 
	// 如果距离不为零, 继续调用迭代本函数
	if(x > 0 || y > 0) {
		var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
		window.setTimeout(invokeFunction, time);
	}
} 