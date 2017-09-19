window.onload=function(){
//全选 反选 全不选
$('#quot button:eq(0)').click(function(){
	$('input').attr('checked','checked');
})

$('#quot button:eq(1)').click(function(){
	$('input').removeAttr('checked','checked');
})

$('#quot input:eq(0)').click(function(){

	var a=$(this).prop("checked");
 	if(a==true){
 		$('input').attr('checked','checked');
 	}else{
 		$('input').removeAttr('checked','checked');
 	}
})
 	

//获取钱相加减

var danjia=$('#gengduo p').text();
//+1
var m=1;
$('#zeng input[name=b]').val(m);
$('#zeng input[name=c]').click(function(){
	m+=1;
	$('#zeng input[name=b]').val(m);
	//总价
	var shuliang=$('#zeng input[name=b]').val();
	$('#shuzi p b').text((danjia*shuliang).toFixed(2));

	//最终下面的总价
	var zong1=$('#shuzi p b').text();
	var z1=Number(zong1);
	var zong2=$('#shuzi1 p b').text();
	var z2=Number(zong2);
	$('.cey p em').text((z1+z2).toFixed(2));

})
//-1

$('#zeng input[name=a]').click(function(){
	m-=1;
	$('#zeng input[name=b]').val(m);
	//总结
	var shuliang=$('#zeng input[name=b]').val();
	$('#shuzi p b').text((danjia*shuliang).toFixed(2));

	if(m==0){
		$('#product').hide();
		$('.ftxt:eq(0)').hide();
	}

	//最终下面的总价
	var zong1=$('#shuzi p b').text();
	var z1=Number(zong1);
	var zong2=$('#shuzi1 p b').text();
	var z2=Number(zong2);
	$('.cey p em').text((z1+z2).toFixed(2));

})



var dan=$('#gengduo1 p').text();
//+1
var n=1;
$('#zeng1 input[name=b]').val(n);
$('#zeng1 input[name=c]').click(function(){
	n+=1;
	$('#zeng1 input[name=b]').val(n);
	//总价
	var shulian=$('#zeng1 input[name=b]').val();
	$('#shuzi1 p b').text((dan*shulian).toFixed(2));

	//最终下面的总价
	var zong1=$('#shuzi p b').text();
	var z1=Number(zong1);
	var zong2=$('#shuzi1 p b').text();
	var z2=Number(zong2);
	$('.cey p em').text((z1+z2).toFixed(2));
})
//-1

$('#zeng1 input[name=a]').click(function(){
	n-=1;
	$('#zeng1 input[name=b]').val(n);
	//总结
	var shulian=$('#zeng1 input[name=b]').val();
	$('#shuzi1 p b').text((dan*shulian).toFixed(2));
	if(n==0){
		$('#product1').hide();
		$('.ftxt:eq(1)').hide();
	}
	//最终下面的总价
	var zong1=$('#shuzi p b').text();
	var z1=Number(zong1);
	var zong2=$('#shuzi1 p b').text();
	var z2=Number(zong2);
	$('.cey p em').text((z1+z2).toFixed(2));


})



//选项卡
$('#extar .abv').hover(function(){
	$(this).css('color','white').css('background','red');
},function(){
	$(this).css('color','black').css('background','white');
})


$('#extar .abv:eq(0)').hover(function(){
	/*$('.yida eq(0)').css('background','url(../imgs/caixihuan1.png)');
	$('.yida eq(1)').css('background','url(../imgs/caixihuan2.png)');
	$('.yida eq(2)').css('background','url(../imgs/caixihuan3.png)');
	$('.yida eq(3)').css('background','url(../imgs/caixihuan4.png)');*/

	$('#zhanshi').hide();
	$('#xian1').show();

},function(){
	$('#zhanshi').show();
	$('#xian1').hide();
})

$('#extar .abv:eq(1)').hover(function(){

	$('#zhanshi').show();
	$('#xian1').hide();
	$('#xian2').hide();

},function(){
	$('#zhanshi').show();
	$('#xian1').hide();
	$('#xian2').hide();
})

$('#extar .abv:eq(2)').hover(function(){

	$('#zhanshi').hide();
	$('#xian1').show().html('<center><p>你不登录我咋知道你关注了啥</p></center>');

},function(){
	$('#zhanshi').show();
	$('#xian1').hide().html('<center><p>谁知道你喜欢啥</p></center>');
})


$('#extar .abv:eq(3)').hover(function(){
	$('#xian2').show();
	$('#zhanshi').hide();
	$('#xian1').hide();
},function(){
	$('#zhanshi').show();
	$('#xian1').hide();
	$('#xian2').hide();
})
















}
