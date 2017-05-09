define(['jquery'],function(){
	return{
		webChat:function(){
			var codeImgWidth = $(".codeImg").outerWidth();	
			$("#codeImgShow").hover(function(){
				$(".codeImg").css("width","0px").show();
				$(".codeImg").stop(true).animate({"width" : codeImgWidth + 22 +"px"},300);
			},function(){
				$(".codeImg").stop(true).animate({"width" : "0px"},300);
			});
		}
	}
})