
<?php echo $this->smarty_insert_scripts(array('files'=>'utils.js')); ?>
<dl>
  
  <dd >
  <div style="width:90%;margin:0 auto;">收货人  </div>
  <div class="u_sright inputBoxflow passWord clearfix">
    <input name="consignee" type="text" class="inputBg" id="consignee_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['consignee']); ?>" />
  
     </div>
    </dd>
</dl>
<dl>

  <dd >

  <div style="width:90%;margin:0 auto;">联系电话 </div>
    <div class="u_sright inputBoxflow passWord clearfix">
    <input name="tel" type="text" class="inputBg"  id="tel_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['tel']); ?>" />

    </div></dd>
</dl>


<?php if ($this->_var['real_goods_count'] > 0): ?> 

<dl>

  <dd > 

<div style="width:90%;margin:0 auto;"><?php echo $this->_var['lang']['country_province']; ?> </div>
<div style="width:100%;margin:0 auto; text-align: center;">
<input name="country" value="1" type="hidden" />
    
      <div style="width:90%;margin:0 auto; text-align: center;">
    <select name="province" id="selProvinces_<?php echo $this->_var['sn']; ?>" onchange="region.changed(this, 2, 'selCities_<?php echo $this->_var['sn']; ?>')" class="inputBg_touch" style="height:3.5rem; border:1px solid #ddd; width:100%; margin-bottom:1rem;">
      <option value="0">请选择省份</option>
      <?php $_from = $this->_var['province_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'province');if (count($_from)):
    foreach ($_from AS $this->_var['province']):
?>
      <option value="<?php echo $this->_var['province']['region_id']; ?>" <?php if ($this->_var['consignee']['province'] == $this->_var['province']['region_id']): ?>selected<?php endif; ?>><?php echo $this->_var['province']['region_name']; ?></option>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    </select>
 </div>
       <div style="width:90%;margin:0 auto; text-align: center;">
    <select name="city" id="selCities_<?php echo $this->_var['sn']; ?>" onchange="region.changed(this, 3, 'selDistricts_<?php echo $this->_var['sn']; ?>')"   class="inputBg_touch" style="height:3.5rem; border:1px solid #ddd; width:100%; margin-bottom:1rem;">
      <option value="0">请选择市</option>
      <?php $_from = $this->_var['city_list'][$this->_var['sn']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'city');if (count($_from)):
    foreach ($_from AS $this->_var['city']):
?>
      <option value="<?php echo $this->_var['city']['region_id']; ?>" <?php if ($this->_var['consignee']['city'] == $this->_var['city']['region_id']): ?>selected<?php endif; ?>><?php echo $this->_var['city']['region_name']; ?></option>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    </select>
 </div>


    <div style="width:90%;margin:0 auto; text-align: center;">
    <select name="district" id="selDistricts_<?php echo $this->_var['sn']; ?>"  class="inputBg_touch" style="height:3.5rem; border:1px solid #ddd; width:100%; margin-bottom:1rem;">
      <option value="0">请选择区</option>
      <?php $_from = $this->_var['district_list'][$this->_var['sn']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'district');if (count($_from)):
    foreach ($_from AS $this->_var['district']):
?>
      <option value="<?php echo $this->_var['district']['region_id']; ?>" <?php if ($this->_var['consignee']['district'] == $this->_var['district']['region_id']): ?>selected<?php endif; ?>><?php echo $this->_var['district']['region_name']; ?></option>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    </select>
    </div>

</div>

  

  
  
  
  </dd>
</dl>


<?php endif; ?> 

<?php if ($this->_var['real_goods_count'] > 0): ?> 

<dl>

  <dd >
  <div style="width:90%;margin:0 auto; ">详细地址</div>
    <div class="u_sright inputBoxflow passWord clearfix">
    <input name="address" type="text" class="inputBg"  id="address_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['address']); ?>"  />
   
        </div>
    </dd>
</dl>

<?php endif; ?> 

<!--
<dl>
 <dd>
<div style="width:90%;margin:0 auto;"><?php echo $this->_var['lang']['backup_phone']; ?> </div>
    <div class="u_sright inputBoxflow passWord clearfix">
<input name="mobile" type="text" class="inputBg"  id="mobile_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['mobile']); ?>" /> <div></dd>
</dl>
--> 
<?php if ($this->_var['real_goods_count'] > 0): ?> 
 
<!--
<dl>
 <dd>
<div style="width:90%;margin:0 auto;"><?php echo $this->_var['lang']['sign_building']; ?><div>
<div class="u_sright inputBoxflow passWord clearfix">
<input name="sign_building" type="text" class="inputBg"  id="sign_building_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['sign_building']); ?>" /></div></dd>
</dl>
<dl>
 <dd>
<div style="width:90%;margin:0 auto;"><?php echo $this->_var['lang']['deliver_goods_time']; ?><div>
<div class="u_sright inputBoxflow passWord clearfix">

<input name="best_time" type="text"  class="inputBg" id="best_time_<?php echo $this->_var['sn']; ?>" value="<?php echo htmlspecialchars($this->_var['consignee']['best_time']); ?>" /></div></dd>
</dl>--> 
<?php endif; ?>

<dl style="border:none; padding-bottom:0">
<?php if ($_SESSION['user_id'] > 0 && $this->_var['consignee']['address_id'] > 0): ?> 

  <dd class="w40">
    <button type="submit" class="c-btn3" name="Submit" style="margin-top:1rem;" >我选择这个作为收货地址</button>
  </dd>
  <dd class="w10"></dd>
  <dd class="w40"> 
    <button type="button" class="c-btn3" name="button" onclick="if (confirm('<?php echo $this->_var['lang']['drop_consignee_confirm']; ?>')) location.href='flow.php?step=drop_consignee&amp;id=<?php echo $this->_var['consignee']['address_id']; ?>'"><?php echo $this->_var['lang']['drop']; ?></button>
  </dd>
<?php else: ?>
  <dd>
    <button type="submit" class="c-btn3" name="Submit" style="margin-top:1rem;" >我新增加一个收货地址</button>
  </dd>
<?php endif; ?>
</dl>
<input type="hidden" name="step" value="consignee" />
<input type="hidden" name="act" value="checkout" />
<input name="address_id" type="hidden" value="<?php echo $this->_var['consignee']['address_id']; ?>" />