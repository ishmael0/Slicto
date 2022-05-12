$(document).ready(function() {

    var user_navListItems = $('div.user_setup-panel div a'),
        user_allWells = $('.user_setup-content'),
        user_allNextBtn = $('.user_nextBtn');
    var user_step1 = $('#user_step1');
    var user_step2 = $('#user_step2');
    var user_step3 = $('#user_step3');

    user_allWells.hide();

    user_navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);


        if (!$item.hasClass('disabled')) {
            /*alert(ok);*/
            user_navListItems.removeClass('step-tab').addClass('btn-default');
            $item.addClass('step-tab');
            user_allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    var s = 1;
    var counter = 60;

    user_step1.click(function() {
        var curStep = $(this).closest(".user_setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.user_setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='checkbox'],select"),
            isValid = true;

        $(".form-group").removeClass("has-error");

        $(".error").remove();

        $('#sitelawerror').removeClass("cheackboxerror");


        var username = $('#username').val();
        var password = $('#password').val();
        var passwordrep = $('#passwordrep').val();
        var usermobile = $('#usermobile').val();
        var isnumberUsermobile = $.isNumeric(usermobile);



        var name = $('#name').val();


        s = 1;
        if (username.length < 1) {
            s = 0;
            $('#username').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#username').prev('span').html('');
        }

        if (password.length < 1) {
            s = 0;
            $('#password').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (password.length < 6) {
            s = 0;
            $('#password').prev('span').html('رمزعبور باید بیش از 6 کاراکتر داشته باشد!');
            isValid = false;
        } else {
            $('#password').prev('span').html('');
        }



        if (passwordrep.length < 1) {
            s = 0;
            $('#passwordrep').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (passwordrep !== password) {
            s = 0;
            $('#passwordrep').prev('span').html('تکرار رمزعبور نادرست می باشد!');
            isValid = false;
        } else {
            $('#passwordrep').prev('span').html('');
        }



        if (usermobile.length < 1) {
            s = 0;
            $('#usermobile').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;

        } else if (isnumberUsermobile == false) {
            s = 0;
            $('#usermobile').prev('span').html('فرمت ورودی نادرست می باشد!');
            isValid = false;
        } else if (usermobile.length < 11 || usermobile.length > 11 || usermobile[0] != "0" || usermobile[1] != "9") {
            s = 0;
            $('#usermobile').prev('span').html('شماره تماس نامعتبر است!');
            isValid = false;
        } else {
            $('#usermobile').prev('span').html('');
        }



        if ($("#sitelaw").prop('checked') == false) {
            s = 0;
            $('#sitelawerror').addClass("cheackboxerror");
            isValid = false;
        } else {}




        if (s == 1 && isValid) {

            nextStepWizard.removeAttr('disabled').trigger('click');

            //var counter = 60;
            var interval = setInterval(function() {
                counter--;
                // Display 'counter' wherever you want to display it.
                if (counter <= 0) {
                    clearInterval(interval);
                    $('#timer').html("<span>زمان پایان یافت</span>");
                    return;
                } else {
                    $('#time').text(counter);
                    console.log("Timer --> " + counter);
                }

            }, 1000);




        }
    });

    user_step2.click(function() {

        var curStep = $(this).closest(".user_setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.user_setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='checkbox'],select"),
            isValid = true;

        $(".form-group").removeClass("has-error");

        $(".error").remove();

        var name = $('#txtPhoneNo').val();



        if (name.length < 1) {
            s = 0;
            $('#txtPhoneNo').after('<span class="error">لطفا کد را وارد کنید!</span>');
            isValid = false;
        } else if (name.length < 6) {
            s = 0;
            $('#txtPhoneNo').after('<span class="error">کد وارد شده نامعتبر است!</span>');
            isValid = false;
        } else {
            isValid = true;
            s = 1;
        }



        if (s == 1 && isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    user_step3.click(function(e) {
        var curStep = $(this).closest(".user_setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.user_setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='checkbox'],select"),
            isValid = true;
        s = 1;

        $(".form-group").removeClass("has-error");

        $(".error").remove();

        var name = $('#name').val();
        var family = $('#family').val();
        var nationalcode = $('#nationalcode').val();
        var nationalcodeReg = checkCodeMeli(nationalcode);
        var email = $('#email').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        if (name.length < 1) {
            s = 0;
            $('#name').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#name').prev('span').html('');
        }


        if (family.length < 1) {
            s = 0;
            $('#family').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#family').prev('span').html('');
        }

        if (nationalcode.length < 1) {
            s = 0;
            $('#nationalcode').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (!nationalcodeReg) {
            s = 0;
            $('#nationalcode').prev('span').html('کدملی نامعتبر است!');
            isValid = false;
        } else {
            $('#nationalcode').prev('span').html('');
        }


        if (email.length < 1) {
            s = 0;
            $('#email').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (!emailReg.test(email)) {
            s = 0;
            $('#email').prev('span').html('ایمیل نامعتبر می باشد!');
            isValid = false;
        } else {
            $('#email').prev('span').html('');
        }


        if (s == 1 && isValid) {
            e.stopPropagation();
            nextStepWizard.removeAttr('disabled').trigger('click');
        } else {
            e.preventDefault();
        }
    });

    $('div.user_setup-panel div a.step-tab').trigger('click');
});


function checkCodeMeli(code) {
    var L = code.length;
    if (L < 8 || parseInt(code, 10) == 0) return false;
    code = ('0000' + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    var c = parseInt(code.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
    return true;
}