
 $(function() {
   

    //秒杀倒计时   
	var end = new Date(2018,6,25,00,00,00);

	var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var second = document.getElementById('second');

	// 定义函数前面加0
	function fillZero(num){
		if(num<10){
			// 手动拼接0
			num = '0'+num;
		}
		// 返回结果
		return num;
	}

	daojishi();
	function daojishi(){
		var now = new Date();	
		var cha = end.getTime() - now.getTime();
		

		// 判断活动是否已经开始了
		if(cha<=0){
			// 停止定时器
			clearInterval(run);
			// 设置当前时间
			var xiaoshi = '00';
			var fen = '00';
			var miao = '00';
			// 赋值
			hour.innerHTML = xiaoshi;
			minute.innerHTML = fen;
			second.innerHTML = miao;
			// 弹框提示
			alert('活动已经结束了亲！');
		}else{
			// 计算小时
			var xiaoshi = fillZero(Math.floor(cha/1000/60/60));
			// 计算分钟
			var fen = fillZero(Math.floor(cha/1000/60%60));
			// 计算秒
			var miao = fillZero(Math.floor(cha/1000%60));
			// 赋值
			hour.innerHTML = xiaoshi;
			minute.innerHTML = fen;
			second.innerHTML = miao;
		}		
	}
	// 判断是否需要调用定时器
	// 当前此刻时间
	var now = new Date();	
	// 获取两个时间对象差值
	var cha = end.getTime() - now.getTime();
	// 表示还有剩余时间时，调用倒计时
	if(cha>0){
		// 使用定时器控制倒计时
		var run = setInterval(function(){
			// 调用倒计时
			daojishi();
		},1000)
	}

//轮播图
	var index = 0;
	// 定义变量run，就是定时器是否运行的标志
	var run;
	function lun(){
		// 轮播图核心理论：当前图片隐藏，下一张显示
			$('#imag li').removeAttr('class');
			// 圆点切换
			$('#circlelist li').removeAttr('class');
			// 索引自增++
			index++;
			// 临界值判断
			if(index==$('#imag li').length){
				// 重置为0
				index = 0;
			}
			// 下一张显示
			$('#imag li').eq(index).attr('class','active');
			$('#circlelist li').eq(index).attr('class','listactive');
	}
	// 定义轮播图自动轮显函数 autoRun()
	function autoRun(){
		// 定时器叠加问题：多个定时器同时触发了
		// 定时器一次只启动一个
		/*if(run){
			// 终止程序
			return;
		}
		// 设置定时器*/
		run = setInterval(function(){
			lun();
		},1000);
	}
	// 当页面第一次进入时自动调用轮播图函数
	autoRun();	

	$('#menu_flash_big').hover(function(){
		clearInterval(run);
		run=undefined;
		$('.jian').show();
	},function(){
		autoRun();
		$('.jian').hide();
	})
	//左右箭头移进去公共样式
	$('.jian').hover(function(){
		$(this).css('background','rgba(0,0,0,0.6)');
	},function(){
		$(this).css('background','rgba(0,0,0,0.1)');
	})

	// 左右箭头的单击事件
	left.onclick = function(){
		$('#imag li').removeAttr('class');
			// 圆点切换
			$('#circlelist li').removeAttr('class');
			// 索引自增++
			index--;

			// 临界值判断
			if(index<0){
				// 重置为0
				index = $('#imag li').length-1 ;
			}
			// 下一张显示
			$('#imag li').eq(index).attr('class','active');
			$('#circlelist li').eq(index).attr('class','listactive');
	}

	// 右侧箭头
	right.onclick = function(){
		lun();
	}

	//小圆点移入移除
	$('#circlelist li').hover(function(){
		clearInterval(run);
		
		index = $(this).index();

		$('#imag li').removeAttr('class');
		$('#circlelist li').removeAttr('class')
		$('#imag li').eq(index).attr('class','active');
		$('#circlelist li').eq(index).attr('class','listactive');

	});
	
//鼠标滑过去过渡效果

			
		$('#shoplist .shoplist_box').hover(function(){
			i = $(this).index();
			$('.shop_fu').eq(i).stop().animate({
				height:'100px',
				bottom:'0px',
			},1000);
			
		},function(){
			$('.shop_fu').eq(i).stop().animate({
				height:'0px',
				bottom:'0px',
			},1000);
			
		});

//检测滚动条上部出现搜索框
		//搜索框滚动检测
		$(window).scroll(function(){
			var gt=$(window).scrollTop();
			if(gt>550){
				$('#gd_chu').slideDown(800);
			}
			if(gt<550){
				$('#gd_chu').slideUp(800);
			}

		});
		//左边楼层滚动检测
		$('#floor ul li').mouseover(function(){
			$('#floor ul li').css('cursor','pointer');
		})
		$(window).scroll(function(){
			var gt=$(window).scrollTop();
			if(gt>800){
				$('#floor').fadeIn('normal');
			}
			if(gt<800){
				$('#floor').fadeOut('normal');

			};
			//享品质的范围
			/*if(gt>1100&&gt<1800){
				$('#floor ul li').eq(0).css('background','#C81623');
			}*/
			if(gt<1100){
				$('#floor ul li').css('background','#7A6E6E');
			}
			if(gt>1100){
				$('#floor ul li').eq(0).css('background','#C81623').siblings().css('background','#7A6E6E');
			}
			if(gt>2000){
				$('#floor ul li').eq(1).css('background','#C81623').siblings().css('background','#7A6E6E');
			}
			if(gt>6500){
				$('#floor ul li').eq(2).css('background','#C81623').siblings().css('background','#7A6E6E');
			}
			if(gt>6850){
				$('#floor ul li').eq(3).css('background','#C81623').siblings().css('background','#7A6E6E');
			}
			if(gt>7600){
				$('#floor ul li').css('background','#7A6E6E');
			}
			
			
		});
		
			$('#floor ul li').eq(4).click(function(){
				$('html,body').animate({
				scrollTop:'0'
			},1000);

				
	
			});
		$(window).scroll(function(){
			$('#floor ul li:eq(0)').click(function(){
				$(window).scrollTop(1500);
			})
			$('#floor ul li:eq(1)').click(function(){
				$(window).scrollTop(2300);
			})

			$('#floor ul li:eq(2)').click(function(){
				$(window).scrollTop(6800);
			})

			$('#floor ul li:eq(3)').click(function(){
				$(window).scrollTop(7200);
			})

		})
//选项卡
	$('#menu_right_mid li').eq(1).hover(function(){
		$('#menu_right_mid .list1').css('display','none');
		$('#menu_right_mid .list2').css('display','block').css('border','1px solid #ccc');

	},function(){
		$('#menu_right_mid .list1').css('display','block').css('border','1px solid #ccc');
		$('#menu_right_mid .list2').css('display','none');
	});	

	
//单击登录弹框
$('#nav li:eq(0)').click(function(){
		$('#tan_chu').fadeIn();
		var ww=$(document).width();
		var wh=$(document).height();
		$('#screen').show().css('height',wh).css('width',ww);
	})

	$('#tan_chu #tan_chu_up').click(function(){
		$('#tan_chu').fadeOut();
		$('#screen').hide();
	})
 
	$('#tan_chu #saoma').click(function(){
		$('#saoma span').css('color','#E4393C');
		$('#denglu span').css('color','#666666');
		$('#erweima').show();
	})

	$('#tan_chu #denglu').click(function(){
		$('#denglu span').css('color','#E4393C');
		$('#saoma span').css('color','#666666');
		$('#erweima').hide();
	})


  });
 




