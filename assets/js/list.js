$(function() {
    $('.clicka').click(function() {
        $(this).parent().siblings().slideToggle();
        $(this).children().toggleClass('active');
    })
})