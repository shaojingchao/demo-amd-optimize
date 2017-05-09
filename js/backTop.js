define(['jquery'],function(){
	return{
		backTop:function(){
			$("#backTop").click(function(){
			$('body,html').animate({scrollTop:0},1000);
			return false;
			});
		}
	}
})