/*=============readmoreicon==========*/
$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"btn",function(){
        var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".applicationskill-box").find(".invisible-content").toggle();
        $(this).parent(".applicationskill-box").find("visible-content").toggle();
    });
});