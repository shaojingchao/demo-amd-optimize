define(['jquery'],function(){
	return{
		infor:function(){
		$(".introNav a").hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			})
			$(".introMain>dl:first").css("display","block");
		}
	}
})