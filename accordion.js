$(document).ready(function () {
    $(document).on("click",".myh1",function () {
        $(this).next().slideToggle(500);
        $(this).prevAll("p").slideUp(500);
        $(this).nextUntil(this).nextAll("p").slideUp(500);
    }) 
});