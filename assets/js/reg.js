$(function() {
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
    $(".demoform").Validform({
        tiptype: 4
    });
})