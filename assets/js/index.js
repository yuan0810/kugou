window.onload = function() {
    var slideshow = document.querySelector('.slideshow');
    var imgLi = document.querySelectorAll('.slideshow li');
    var numli = document.querySelectorAll('.slideshow-point li');
    var index = 0;
    var len = imgLi.length;
    var timer = 0;
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000, //可选选项，自动滑动
        effect: 'fade',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    })
    /*选项卡*/
    console.log(document.documentElement.clientHeight);
    var li1 = document.querySelectorAll('.option-left .newlist li');
    var ul1 = document.querySelectorAll('.playlist ul');
    for (var i = 0; i < li1.length; i++) {
        li1[i].onmouseover = function() {
            for (var j = 0; j < li1.length; j++) {
                li1[j].className = '';
                ul1[j].className = 'hide';
            }
            var index = this.getAttribute('data-index');
            li1[index].className = 'active';
            ul1[index].className = '';
        }
    }
    $('.newlist1 li').mouseover(function() {
        index = $(this).index();
        $('.hotradio-right .hotsinger').eq(3 * index).show().siblings().hide();
        $(this).addClass('active2').siblings().removeClass('active2');
        console.log($('.hotradio-right .hotsinger').eq(3 * index));
    })
    $('.hotsinger-point li').mouseover(function() {
        var num = $(this).index();
        console.log()
        $('.hotradio-right .hotsinger').eq(3 * index + num).show().siblings().hide();
        console.log($('.hotradio-right .hotsinger').eq(3 * index + num))
        console.log(3 * index + num);
        $(this).children().addClass('active3').parent().siblings().children().removeClass('active3');
    })
    /*回到顶部*/
    $(window).scroll(function() {
        var stop = $(window).scrollTop();
        if (stop > 400 & stop <= 2000) {
            $('.huidaodingbu').removeClass('ding');
        } else if (stop <= 400) {
            $('.huidaodingbu').addClass('ding');
        } else if (stop > 2000) {
            $('.huidaodingbu').addClass('ding');
        }
    })
    $('.huidaodingbu').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300)
    })
}