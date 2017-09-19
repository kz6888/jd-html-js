window.onload=function(){

		$('input[name=username]').focus(function(){
			$('.sp_huo').eq(0).text('☆支持中文,数字,字母,下划线的组合,4-20个字符').css('color','#ddd');
			$(this).css('outline','none');

	});

		$('input[name=username]').blur(function(){
			$('.sp_huo').eq(0).text(' ');
			var yz1=$(this).val();
			var reg = /^\w{4,20}$/;
			var res = reg.test(yz1);
			if(res){
				$('.duihao:eq(0)').show();
			}else{
				$('.sp_huo').eq(0).text('☆请输入正确的格式').css('color','#EE2222');
				$('.duihao:eq(0)').hide();
			}
	});





			$('input[name=userpass]').focus(function(){
			$('.sp_huo').eq(1).text('☆建议使用字母,数字和符号两种及以上的组合,6-20个字符').css('color','#ddd');
			$(this).css('outline','none');
	});

		$('input[name=userpass]').blur(function(){
			$('.sp_huo').eq(1).text(' ');
			var yz2=$(this).val();
			var reg = /^[\W\w]{6,20}$/;
			var res = reg.test(yz2);
			if(res){
				$('.duihao:eq(1)').show();
			}else{
				$('.sp_huo').eq(1).text('☆请输入正确的格式').css('color','#EE2222');
				$('.duihao:eq(0)').hide();
			}
	});





		$('input[name=dinguserpass]').focus(function(){
			$('.sp_huo').eq(2).text('☆请再次输入密码').css('color','#ddd');
			$(this).css('outline','none');
	});

		$('input[name=dinguserpass]').blur(function(){
			$('.sp_huo').eq(2).text(' ');
			var a=$('input[name=userpass]').val();
			var b=$(this).val();
			if(a==b&&a!=''){
				$('.duihao:eq(2)').show();
			}else{
				$('.sp_huo').eq(2).text('☆两次输入的密码不一致').css('color','#EE2222');
				$('.duihao:eq(2)').hide();
			}
	});





		$('input[name=userphone]').focus(function(){
			$('.sp_huo').eq(3).text('☆完成验证后,你可以用手机进行登录和修改密码').css('color','#ddd');
			$(this).css('outline','none');
	});

		$('input[name=userphone]').blur(function(){
			$('.sp_huo').eq(3).text(' ');
			var yz4=$(this).val();
			var reg = /^1[34578]\d{9}$/;
			var res=reg.test(yz4);
			if(res){
				$('.duihao:eq(3)').show();
			}else{
				$('.sp_huo').eq(3).text('☆请输入正确的手机号').css('color','#EE2222');
				$('.duihao:eq(3)').hide();
			}
	});






		$('input[name=useryanzheng]').focus(function(){
			$('.sp_huo').eq(4).text('☆看不清?点击图片更换验证码');
			$(this).css('outline','none');
	});

		$('input[name=useryanzheng]').blur(function(){
			$('.sp_huo').eq(4).text(' ');
			var yz6=$(this).val();
			var yz5=$('#yanzhengma').text();
			if(yz6==yz5){
				$('.duihao:eq(4)').show();
			}else{
				$('.sp_huo').eq(4).text('☆请输入正确的验证码').css('color','#EE2222');
				$('.duihao:eq(4)').hide();
			}

	});






		$('input[name=useryanzheng]').focus(function(){
			$(this).css('outline','none');
	});

		$('input[name=shoujiyanzheng]').focus(function(){
			$(this).css('outline','none');
	});


//随机数
function rand(m,n){

			return Math.ceil(Math.random()*(n-m+1))+m-1;

		}


$('#yanzhengma').click(function(){
	$(this).text(rand(10000,99999)).css('background','rgba('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+','+0.5+')');
})





}
