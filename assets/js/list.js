$(function() {
    $('.clicka').click(function() {
        $(this).parent().siblings().slideToggle();
        $(this).children().toggleClass('active');
    })
    /*登录*/
    var d = dialog({
        content: $('.shadow'),
        lock: true,
        fixed: true,
    })
    $('.header .login').click(function() {

        d.showModal()

    })
    $('.close').click(function() {
        d.close();
    })
    $('.shadow .name').focus(function() {
        $('.shadow .name').attr('value', ' ');

    })
})