$(document).ready(function(){
    $(".choose > span").click(function(){
        let seleccion = $(this).attr("data-choose");
        console.log(seleccion);

        $(".menu>div, .choose >span").removeClass("active");
        $(this).addClass("active");
        $("#"+seleccion).addClass("active animate__fadeInDown");
    });
});