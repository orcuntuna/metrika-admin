$(() => {

    $("#notification-toggle").on("click", () => {
        $("#user-box").hide();
        $("#notification-box").toggle(300); 
    });

    $("#user-toggle").on("click", () => {
        $("#notification-box").hide();
        $("#user-box").toggle(300); 
    });

});