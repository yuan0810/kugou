/*$(function() {
    $(".registerform").Validform(); //就这一行代码！;

    var getInfoObj = function() {
        return $(this).parents("td").next().find(".info");
    }

    $("[datatype]").focusin(function() {
        if (this.timeout) { clearTimeout(this.timeout); }
        var infoObj = getInfoObj.call(this);
        if (infoObj.siblings(".Validform_right").length != 0) {
            return;
        }
        infoObj.show().siblings().hide();

    }).focusout(function() {
        var infoObj = getInfoObj.call(this);
        this.timeout = setTimeout(function() {
            infoObj.hide().siblings(".Validform_wrong,.Validform_loading").show();
        }, 0);

    });

});*/