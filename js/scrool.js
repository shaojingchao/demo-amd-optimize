define(['Sslide'],function(){
	return{
		banner:function(){
			jQuery(".indexFocus").slide({ titCell:".hd ul", mainCell: ".bd ul", effect: "fold", autoPlay:true,autoPage:true,trigger:"mouseover",interTime:5000 }); 
		    jQuery(".indexFocus").hover(function () { jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show",0.6) }, function () { jQuery(this).find(".prev,.next").fadeOut()});
		    jQuery(".expertTeam").slide({ titCell:".teamNav", mainCell: ".teamMain ul", effect: "fold", autoPlay:true,autoPage:true,trigger:"mouseover",interTime:5000 }); 
		    jQuery(".studScroll").slide({ mainCell: ".bd .studList", effect: "left", vis: 4, scroll: 1, autoPage: true, pnLoop: false, trigger: "click" });
		}
	}
})