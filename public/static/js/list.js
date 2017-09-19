 window.onload=function(){

 //点击下拉菜
		 $('.brand3 a:eq(0)').click(function(){
			 	if($('.brand3 .brand3_1').text()=='更多'){
			 		$('#brand').css('height','300px');
			 		$('.brand3 .brand3_1').html('收起<span background:../img/search.ele.png></span>');
			 		$('.brand3 .brand3_1').css('border','1px solid #ddd');
			 		$('#brand2_word').show();
			 	}else{

			 		$('#brand').css('height','150px');
			 		$('.brand3 .brand3_1').html('更多<span background:../img/search.ele.png></span>');
			 		$('#brand2_word').hide();
			 		
			 	}
		 		
		 	
		 	
		 	
		 })

//点击消失同时创建div
/*var listthis;
	function create(){
	var res=listthis.text();
		 new_Sel=$('<div></div>').addClass('new_Sel');
		listthis.hide();
		$(new_Sel).text(res);
		console.log($(this))
		new_Sel.appendTo('#create_sel');
	}

	$('.price ul li').click(function(){
		listthis=$(this)
		create();

	})
	$(new_Sel).click(function(){
		$(this).hide();
		$(listthis).show()
	})*/



	var new_Sel;
	$('.price ul li').click(function(){
		var res=$(this).text();
		 new_Sel=$('<div></div>').addClass('new_Sel');
		$(this).parents('.price').hide();
		$(new_Sel).text(res);
		new_Sel.appendTo('#create_sel');
		// alert(res);
			console.log($(new_Sel))
			$(new_Sel).click(function(){
				$(this).hide();
				// alert(11);
				$('.price ul li').parents('.price').show();

			})
	})





}
	