$(document).ready(function(){

    $(".info").css({"position":"relative", "left":"-1000px", "opacity":"0"});
    $(".info-per").css({"position":"relative", "left":"-1000px", "opacity":"0"});
    var comp = true;
    var comp2 = true;
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var beneficios = $("#beneficios").offset();
        beneficios = beneficios.top;
        var conocenos = $("#conocenos").offset();
        conocenos = conocenos.top;
 
        if((windowHeight+100) >= beneficios && comp == true){
            $(".info").each(function(index){
    
                $(this).delay(500*index).animate({"position":"static", "left":"0px", "opacity":"1"},"slow");
                comp = false;
            });
        }

        if((windowHeight+100) >= conocenos && comp2 == true){
            $(".info-per").each(function(index){
                $(this).delay(500*index).animate({"position":"static", "left":"0px", "opacity":"1"},"slow");
            });
        }
    });

});


              