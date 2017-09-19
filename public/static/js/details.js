 
window.onload=function(){ 
		//放大镜
		$('#p-fangdajing').hover(function(){

			$('#move').show();
			$('#bigtu').show();

		},function(){

			$('#move').hide();
			$('#bigtu').hide();

		}); 
		$('#p-fangdajing').mousemove(function(e){

			var left = e.pageX;
			var t = e.pageY;
			var sl = $(this).offset().left;
			var st = $(this).offset().top;
			var w = $('#move').width() / 2;
			var h = $('#move').height() / 2;
			var newLeft = left - sl - w;
			var newTop = t - st - h;
			if(newLeft <= 0 ){
				newLeft = 0;
			}
			if(newTop <= 0 ){
				newTop = 0;
			}
			var maxLeft = $(this).width() - $('#move').width();
			var maxTop = $(this).height() - $('#move').height();
			if(newLeft >= maxLeft){
				newLeft = maxLeft;
			}
			if(newTop >= maxTop){
				newTop = maxTop;
			}
			$('#move').css('left',newLeft).css('top',newTop);
			var sw = $('#p-fangdajing').width();
			var bw = $('#bigPic').width();
			var sh = $('#p-fangdajing').height();
			var bh = $('#bigPic').height();
			var bleft =  bw * newLeft / sw;		
			var btop = bh * newTop / sh;
			$('#bigPic').css('left',-bleft).css('top',-btop);
		});

	//图片切换鼠标移入移出事件
		$('#imgList li img').hover(function(){
			var src = $(this).attr('src');
			
			$('#p-fangdajing img').attr('src',src);
			$('#bigPic').attr('src',src);
			$(this).parent().css('border','1px solid red');
			$(this).parent().css('cursor','pointer');

		},function(){
			$(this).parent().css('border','');

		});

 //点击数量+-1
 	var res=$('#p-cnt').val();
 	var a=1;
 	$('#pn-add').click(function(){
 		a+=1;
 		$('#p-cnt').val(a);
 			if(a>=10){
 			$('#p-cnt').val(1);
 		alert('你买不起,亲');
 		return;
 	}

 	})
 	$('#pn-dec').click(function(){
 		a-=1;
 		$('#p-cnt').val(a);
 			if(a<=0){
 			$('#p-cnt').val(1);
 		alert('别闹,亲');
 		return;
 	}

 })
 
	 //选项卡
/*
	 	$('#name ul li:eq(0)').click(function(){
	 		$('#intro').css('border','1px solid #ddd');
	 		$(this).css('background',' #E4393C')
	 		$(this).siblings().css('background','#F7F7F7').css('border-bottom','1px solid #F7F7F7');
	 	})*/
	 		
	 	$('#name ul li').click(function(){
	 		var i=$(this).index();
	 		$('#name ul li').eq(i).css('background','#E4393C').css('color','white');
	 		$('#name ul li').eq(i).siblings().css('color','black').css('background','#F7F7F7').css('border-bottom','#E4393C');
	 		if(i==0){
	 			$('.intro').eq(0).show().siblings().hide();
	 				
	 		}
	 		if(i==1){
	 			$('.intro').eq(1).show().siblings().hide();	
	 		}
	 		if(i==2){
	 			$('.intro').eq(2).show().siblings().hide();		
	 		}
	 		if(i==3){
	 			$('.intro').eq(3).show().siblings().hide();	
	 		}
	 	})

}