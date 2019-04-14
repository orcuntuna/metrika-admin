$(() => {

    $("#notification-toggle").on("click", () => {
        $("#user-box").hide();
        $("#notification-box").toggle(300); 
    });

    $("#user-toggle").on("click", () => {
        $("#notification-box").hide();
        $("#user-box").toggle(300); 
    });

    $(".nav li.sub a").click(function(){
        $(this).parent().find(".sub-nav").toggle();
        $(this).parent().find(".sub-nav-close").toggle();
        var navbarHeight = $(".nav").height();
        $(this).parent().find(".sub-nav").css({"height": navbarHeight});
        $(this).parent().find(".sub-nav-close").css({"height": navbarHeight});
    });

    $(".sub-nav-close").click(function(){
        $(".sub-nav").hide();
        $(".sub-nav-close").hide();
    });

});