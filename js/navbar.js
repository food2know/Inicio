   	$(document).ready(function(){
            $("#button label").click(function(){
            	var vAnchoComp = $(window).width();

            	if(vAnchoComp<900){
            	    if($("#button-menu").is(":checked"))
            	    {
            	    	$("div#center").css({"-webkit-transform":"translateX(0%)"});
            	    }
            	    else{
            	    	$("div#center").css({"-webkit-transform":"translateX(-100%)"});
            	    }
                }
            });

            function transformDivCenter(){
            	var vAnchoComp2 = $(window).width();
            	if(vAnchoComp2 > 900)
            	{
                    $("div#center").css({"-webkit-transform":"translateX(0%)"});
                }
            }

            setInterval(transformDivCenter, 1000);
    	});