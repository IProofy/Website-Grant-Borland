(function() {

	   window.addEventListener('resize', resize);

     var isOpen = false;

		 $("#small-menu").click(function(){
			 if(isOpen)
			 {
				 $("#navlist").fadeIn().fadeOut();
				 $("#player").delay(300).animate({top:"800px"});
				 $("#slots").delay(300).animate({top:"400px"});
				 isOpen = false;
			 }
			 else
			 {
				 $("#navlist").delay(300).fadeOut().fadeIn(1000);
				 $("#player").animate({top:"960px"});
				 $("#slots").animate({top:"600px"});
				 isOpen = true;
			 }
		 });

     if($(document).width() <= 768){
        $("#navlist").hide();
       	cssOpen();
     }else{
			 isOpen= false;
			 	cssClose();
     }


  	function resize() {
    if($(document).width() <= 768){
      if(!isOpen) $("#navlist").hide();
				cssOpen();
    	}else{
				isOpen= false;
				cssClose();
    	}
  	}

		function cssOpen() {
			$("#logo").hide();
			$("#small-menu").show();
			$("#navlist li").css("float","none");
			$("#navlist").css("width","90%");
			$("#navlist").css("top","125px");
			$("#navlist a").css("border-bottom","1px solid rgba(77,77,77,0.35)");
		}

		function cssClose() {
			$("#logo").show();
			$("#navlist").show();
			$("#small-menu").hide();
			$("#navlist").css("top","20px");
			$("#navlist").css("width","auto");
			$("#navlist li").css("float","left");
			$("#navlist a").css("border-bottom","0px");
			$("#player").css("top","800px");
			$("#slots").css("top","400px");
		}

})();
