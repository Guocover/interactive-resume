$( 
	function(){
	//窗口大小和高度
	var w;
	var h;
	//滚动条位置
	var scroll_x;
	var scroll_y;
	var pre_scroll_y;
	var direction;
	var whichFoot;
	var now_position;
	var pre_position;
	//整个内容高度
	var content_h;
	var scense_h;
	var theEnd = false;
	var leftPages =3;
	var rightPages = 6;
    //页面刷新后回到最初
    $(document).ready(function(){

    	$(".reload").addClass("reload-animation");
    });
	window.onbeforeunload = function() {
	    $(window).scrollTop(0);
	};
	//滚轮事件
	$("#start_btn").click(function(){
		$("body").css("overflow-y","scroll");
		$(".myInfo").fadeOut(800);
		$(".info_tip").fadeIn(500);
	})
	window.onscroll = function() {
  	
  		now_position = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
  		var distant	 = now_position - pre_position;

		//第三页面动画
		if(now_position>(2*w-200)){
		      	setTimeout(page3_animation,400);
		      	
		    }
				
  		if(now_position <= 3*w-150){
  			
  			$(".fixed").css({"left":-now_position,"top":0}); 
  		}
  	
  		else 
  		
  		{
  				var top = now_position-3*w;
	  			// $(".man").css("left","75px"); 
	  			$(".fixed").css({"left":-3*w,"top":-top}); 
  		/*	if(now_position >= (4*w+2*h)&&now_position<(4*w+3*h))
  			{
  				var lift_h = now_position - (4*w+2*h)+300;
  				
  				$(".lift").css("top",lift_h);
  			}*/
  		}

  		if(now_position >=(content_h - w))
  		{
  			var position = 0;
  			$(".sun").fadeIn(3500);
  			if(!theEnd){
  				var sunshine = setInterval(function(){
  				if(position ==-600)
  					 position = 0;
  				else
  				     position -= 300;
  				 var xPos = position +"px";
  				$(".sun").css("background-position",xPos+" 0");    	
  			},1200);
  				theEnd = true;
  			}
  			
			}
			// if(Math.abs(now_position - pre_position) > 10) {
				// $(".man").toggleClass('walk');
				var str = '';
				switch(whichFoot)
				{
					case 1:
							
							str = '0 0';
							whichFoot=2;
							break;
					case 2:
							whichFoot=3;
							str = "-200px 0";
							break;
			
					case 3:
							whichFoot = 4;
							str ="-400px 0";
							break;
					case 4:
						whichFoot=1;
						str ="-600px 0";
						break;	
					
				}
				setTimeout(function() {
					$(".man").css("background-position",str);
				}, 200);
			// }
  		/*----moving and direction*/
  		if(now_position<pre_position)
		{	
			$(".man").addClass("rotateX");
			
			
				
		}	

		if(now_position>=pre_position)
		{	
			$(".man").removeClass("rotateX");
				// switch(whichFoot)
				// {
				// case 1:
						
				// 		$(".man").css("background-position","-163px -1px");
				// 		whichFoot=2;
				// 		break;
				// case 2:
				// 		whichFoot=3;
				// 		$(".man").css("background-position","-314px -1px");
				// 		break;
		
				// case 3:
				// 		whichFoot=1;
				// 		$(".man").css("background-position","-6px -1px");
				// 		break;
				// }
		}	
		
  		pre_position = now_position;
	};


	//初始化
	function init() {
		    // 获得窗口高度

		    w =$(window).width()+100;
		    h =$(window).height()+50;
		    content_h = leftPages*w + rightPages*h;
		  /*  scense_h = 4*w +4*h;*/
		  /*  var right_top = 3*w - 3*h;
		    var fixed_h   = 3*h;*/
		    // 初始化各高度宽度
		 
		    $(".scense").css({"width":w,"height":h}); 
		    $("#rs_content").css({"width":w,"height":content_h});
		    $(".fixed").css("width",4*w);      
		    $(".left").css({"width":3*w,"height":h}); 
		    $(".right").css("width",w);

	   		pre_position = 0;
		    now_position = 0;
		    direction = true;//设置正向 
		    whichFoot = 1;
		  }
	$(window).resize(function() {
	 		init();

		});	  
	function page3_animation(){
		$(".a-btn").addClass("a-btn-hover");
		setTimeout(function(){$(".a-btn .a-btn-text").addClass("a-btn-text-hover")},400);
		setTimeout(function(){$(".a-btn-slide-text").addClass("a-btn-slide-text-hover")},400);
	};
	init();
	
})