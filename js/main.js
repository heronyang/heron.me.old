/*
$(".link").hover(function(){
    console.log("animtion fired");
    $(this).animate({ color: '#B22222'}, "slow");
}, function() {
    $(this).animate({ color: '#666'}, "slow"); //original color
});
*/
$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $(".button-collapse").sideNav();
});
