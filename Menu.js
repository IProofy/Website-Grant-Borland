(function() {

	   window.addEventListener('resize', resize);

     var isOpen = false;

		 $("#small-menu").click(function(){
			 if(isOpen)
			 {
				 $("#navlist").fadeIn().fadeOut();
				 $("#player").animate({top:"300px"});
				 isOpen = false;
			 }
			 else
			 {
				 $("#navlist").fadeOut().fadeIn(1000);
				 $("#player").animate({top:"500px"});
				 isOpen = true;
			 }
		 });

     if($(document).width() <= 768){
        $("#navlist").hide();
       	cssOpen();
     }else{
			 	cssClose();
     }


  	function resize() {
    if($(document).width() <= 768){
      if(!isOpen) $("#navlist").hide();
				cssOpen();
    	}else{
				cssClose();
    	}
  	}

		function cssOpen() {
			$("#logo").hide();
			$("#small-menu").show();
			$("#navlist li").css("float","none");
			$("#navlist").css("width","90%");
			$("#navlist").css("top","155px");
			$("#navlist a").css("border-bottom","1px solid rgba(77,77,77,0.35)");
		}

		function cssClose() {
			$("#logo").show();
			$("#navlist").show();
			$("#small-menu").hide();
			$("#navlist").css("top","25px");
			$("#navlist").css("width","auto");
			$("#navlist li").css("float","left");
			$("#navlist a").css("border-bottom","0px");
			$("#player").css("top","300px");
		}

})();
