$(function() {
    $('.jian').click(function() {
        var num = $(this).siblings('input').val();
        num--;
        if (num < 1) {
            return false;
        }
        $(this).siblings('input').val(num);
        var money = $(this).parent('.jiage').siblings('.money').text();
        var price = parseFloat(money);
        // console.log($(this).parent('.jiage').siblings('.price').text());
        var sum = num * price;
        console.log(sum);
        $(this).parent('.jiage').siblings('.price').text(sum + '.00元');
        total();

        // sum($(this), num);
    })
    $('.jia').click(function() {
        var num = $(this).siblings('input').val();
        num++;
        $(this).siblings('input').val(num);
        var money = $(this).parent('.jiage').siblings('.money').text();
        var price = parseFloat(money);
        // console.log($(this).parent('.jiage').siblings('.price').text());
        var sum = num * price;
        $(this).parent('.jiage').siblings('.price').text(sum + '.00元');
        total();
    })
    $('.number').change(function() {
        var num = $(this).val();
        var money = $(this).parent('.jiage').siblings('.money').text();
        var price = parseFloat(money);
        var sum = num * price;
        $(this).parent('.jiage').siblings('.price').text(sum + '.00元');
        // sum($(this), num);
        total();
    })
    $('.delete').click(function() {
        $(this).parents('tr').remove();
        total();
    })

    function total() {
        var totalNum = 0;
        $('.number').each(function() {
            totalNum += Number($(this).val());
        })
        var totalPrice = 0;
        $('.price').each(function() {
            totalPrice += parseFloat($(this).text());
        })
        $('.total span').text(totalPrice);
    }
    total();


})