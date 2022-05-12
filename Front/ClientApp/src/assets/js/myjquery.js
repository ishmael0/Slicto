$(document).ready(function() {

    $(document).ready(function () {

        ConvertNumberToPersion();
    });

    function ConvertNumberToPersion() {
        persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
        traverse(document.body);
    }



    $('.more-link').click(function() {
        var read = $(this);
        if (read.hasClass('readmore')) {
            $('.readmore').css("display", "none");
            $('.readless').css("display", "block");
        } else {
            $('.readmore').css("display", "block");
            $('.readless').css("display", "none");
        }

        var rh = $('.rh-text');
        if (rh.hasClass('rh-full-text')) {
            rh.removeClass('rh-full-text');
        } else {
            rh.addClass('rh-full-text');
        }

    });

    $('.precept-title').click(function() {
        var pt = $('.precept-text');

        if (pt.hasClass('close')) {
            pt.removeClass('close');
            pt.addClass('open');
            $('.angel-down').css("display", "none");
            $('.angel-up').css("display", "block");

        } else {
            pt.removeClass('open');
            pt.addClass('close');
            $('.angel-down').css("display", "block");
            $('.angel-up').css("display", "none");
        }
    });


    $('.ordering').each(function() {
        var pt = $(this);
        var ordering = $('.ordering');
        pt.click(function() {

            if (ordering.hasClass('active')) {
                ordering.removeClass('active');
                pt.addClass('active');
            } else {
                ordering.addClass('active');
                pt.removeClass('active');
            }
        });
    });

    $('.facilities-title').each(function() {
        var pt = $(this);
        var factext = $('.facilities-text');
        pt.click(function() {

            if (pt.hasClass('closefac')) {
                pt.removeClass('closefac');
                pt.addClass('openfac');
            } else {
                pt.removeClass('openfac');
                pt.addClass('closefac');
            }
        });
    });



    $('.cart-count-btn').click(function () {
        popcart = $('.pop-over-cart');

        if (popcart.hasClass("d-none")) {
            popcart.removeClass("d-none");
            popcart.addClass("d-block");
        }
        else {
            popcart.removeClass("d-block");
            popcart.addClass("d-none");
        }
    });

    $('#login-user-btn').click(function () {
        goRegister = $('.goRegister');

        if (goRegister.hasClass("d-none")) {
            goRegister.removeClass("d-none");
            goRegister.addClass("d-block");
        }
        else {
            goRegister.removeClass("d-block");
            goRegister.addClass("d-none");
        }
    });

    $('#login-wholesalers').click(function () {
        goRegister = $('.goRegister');

        if (goRegister.hasClass("d-block")) {
            goRegister.removeClass("d-block");
            goRegister.addClass("d-none");
        }

    });



});