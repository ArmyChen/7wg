var error_msg={"i":'<i class="icon_err"></i>',"county_error":"请选择区县","town_error":"请选择乡镇","city_error":"请选择省区","id_error":"地址编号不能为空","old":"设为默认","now":"默认地址","save_error":"设置默认地址失败","user_error":"请填写收货人姓名","add_error":"请选择所在地区","address_error":"请填写完整的地址信息","phone_error":"手机号码格式不正确"};var Verification={"Focusin":function(c,a,b){SUBMIT_TYPE=true;if(b=="1"){$("#error_"+c).addClass("err_msg2");$("#error_"+c).removeClass("err_msg err_msg1")}else{$("#"+c).addClass("err_txt");$("#error_"+c).removeClass("err_msg2");$("#error_"+c).addClass("err_msg err_msg1")}$("#error_"+c).show();$("#error_"+c).html(a)},"Focusout":function(b,a){$("#"+b).removeClass("err_txt");$("#error_"+b).hide()}};function citySelect(a,c){var b=$("select[name='"+c+"']");if(false){return}else{$.getJSON(SHOP_SITE_URL+"/index.php?act=member_address&op=getpostseq2&act_to=city&statename_code="+b.val(),function(d){$("#statename_name").val($("#statename option:selected").text());$("select[name='city']").html(d);$("select[name='county']").html('<option value="0">'+error_msg.county_error+"</option>");$("select[name='town']").html('<option value="0">'+error_msg.town_error+"</option>");$("#town").hide()})}}function countySelect(a,c){var b=$("select[name='statename']").val();if(b==0){showDialog(error_msg.city_error,"error","","","1","","","","","","2");return}var d=$("select[name='city']").val();if(d==0){$("select[name='county']").html('<option value="0">'+error_msg.county_error+"</option>");$("select[name='town']").html('<option value="0">'+error_msg.town_error+"</option>");$("#town").hide();return}else{$.getJSON(SHOP_SITE_URL+"/index.php?act=member_address&op=getpostseq2&act_to="+a+"&statename_code="+b+"&cityname_code="+d,function(e){$("#city_name").val($("#city option:selected").text());$("select[name='county']").html(e);$("select[name='town']").html('<option value="0">'+error_msg.town_error+"</option>");$("#town").hide()})}}function townSelect(a,c){var b=$("select[name='statename']").val();var e=$("select[name='city']").val();var d=$("select[name='county']").val();if(b==0&&e!=0){showDialog(error_msg.city_error,"error","","","1","","","","","","2");return}else{if(e==0){showDialog(error_msg.county_error,"error","","","1","","","","","","2");return}}if(d==0){showDialog(error_msg.town_error,"error","","","1","","","","","","2");return}else{$.getJSON(SHOP_SITE_URL+"/index.php?act=member_address&op=getpostseq2&act_to="+a+"&statename_code="+b+"&cityname_code="+e+"&countryname_code="+d,function(f){$("#county_name").val($("#county option:selected").text());$("select[name='town']").html(f);$("#town").show()})}}function zoneSelect(a,b){$("#town_name").val($("#town option:selected").text());$("#transpzone_id").val($("#town").val())}var default_type=true;function fundefault(b){if(!default_type){return false}if(b==""){showDialog(error_msg.id_error,"error","","","1","","","","","","2");return false}var a=$("#defaultid").val();if(a==b){return false}default_type=false;$.ajax({type:"POST",dataType:"json",url:SHOP_SITE_URL+"/index.php?act=member_address&op=default",data:{"id":b},success:function(c){default_type=true;if(c!=null&&c.state!=""){if(c.state=="1"){if(c.old!=""&&c.now!=""){$("#defaultid").val(c.now);$("#default_yn"+c.old).html(error_msg.old);$("#default_yn"+c.now).html(error_msg.now)}}else{if(c.state=="-10"){}else{showDialog(c.msg)}}}else{showDialog(error_msg.save_error)}}})}var SUBMIT_TYPE=true;$("#addresssubmit").click(function(){if(SUBMIT_TYPE==false){return}SUBMIT_TYPE=false;var a=$("#true_name").val();if(a==""){Verification.Focusin("true_name",error_msg.i+error_msg.user_error,"2");return false}else{Verification.Focusout("true_name","2")}var g=$("#statename").find("option:selected").val();var f=$("#city").find("option:selected").val();var e=$("#county").find("option:selected").val();var c=$("#town").find("option:selected").val();if(g=="0"||f=="0"||e=="0"||c=="0"){Verification.Focusin("statename",error_msg.i+error_msg.add_error,"2");return false}else{Verification.Focusout("statename","2")}var b=$("#address").val();if(b==""){Verification.Focusin("address",error_msg.i+error_msg.address_error,"2");return false}else{Verification.Focusout("address","2")}var d=$("#tel_phone").val();if(d==""){Verification.Focusin("tel_phone",error_msg.i+error_msg.phone_error,"2");return false}else{Verification.Focusout("tel_phone","2")}ajaxpost("address_form","","","","",function(){SUBMIT_TYPE=true})});