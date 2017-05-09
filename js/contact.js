define(['jquery'],function(){
	return{
		contact:function(){
			var contactImgWidth = $(".contact").outerWidth();	
			$("#contactShow").hover(function(){
				$(".contact").css("width","0px").show();
				$(".contact").stop(true).animate({"width" : contactImgWidth + 22 +"px"},300);
			},function(){
				$(".contact").stop(true).animate({"width" : "0px"},300);
			});
		}
	}
})