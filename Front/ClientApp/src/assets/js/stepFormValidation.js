$(document).ready(function() {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');
    var step1 = $('#step1');
    var step2 = $('#step2');
    var step3 = $('#step3');
    var step4 = $('#step4');

    allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);


        if (!$item.hasClass('disabled')) {
            /*alert(ok);*/
            navListItems.removeClass('step-tab').addClass('btn-default');
            $item.addClass('step-tab');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    var s = 1;
    var counter = 60;

    step1.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
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
        } else {
            // s = 1;


            // var counter = 60;
            // var interval = setInterval(function() {


            //     counter--;
            //     // Display 'counter' wherever you want to display it.
            //     if (counter <= 0) {
            //         clearInterval(interval);
            //         $('#timer').html("<span>زمان پایان یافت</span>");
            //         return;
            //     } else {
            //         $('#time').text(counter);
            //         console.log("Timer --> " + counter);
            //     }



            // }, 1000);


        }




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

    step2.click(function() {

        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
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

    step3.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='checkbox'],select"),
            isValid = true;

        $(".form-group").removeClass("has-error");

        $(".error").remove();

        var name = $('#name').val();
        var family = $('#family').val();

        var mobile = $('#mobile').val();
        var isnumbermobile = $.isNumeric(mobile);
        var phone = $('#phone').val();
        var isnumberphone = $.isNumeric(phone);

        var email = $('#email').val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var usershire = $("#usershire").val();
        var usercity = $("#usercity").val();



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



        if (mobile.length < 1) {
            s = 0;
            $('#mobile').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (isnumbermobile == false) {
            s = 0;
            $('#mobile').prev('span').html('فرمت ورودی نادرست می باشد!');
            isValid = false;
        } else if (mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9") {
            s = 0;
            $('#mobile').prev('span').html('شماره تماس نامعتبر است!');
            isValid = false;
        } else {
            $('#mobile').prev('span').html('');
        }



        if (phone.length < 1) {
            s = 0;
            $('#phone').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else if (isnumberphone == false) {
            s = 0;
            $('#phone').prev('span').html('فرمت ورودی نادرست می باشد!');
            isValid = false;
        } else if (phone.length < 11 || phone.length > 11 || phone[0] != "0") {
            s = 0;
            $('#phone').prev('span').html('شماره تماس نامعتبر است!');
            isValid = false;
        } else {
            $('#phone').prev('span').html('');
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


        if (usershire == null) {
            s = 0;
            $('#usershire').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            isValid = false;
        } else {
            $('#usershire').prev('span').html('');
        }

        if (usercity == null) {
            s = 0;
            $('#usercity').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            isValid = false;
        } else {
            $('#usercity').prev('span').html('');
            s = 1;
        }
        // else {
        //     s = 1;
        // }



        if (s == 1 && isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    step4.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='checkbox'],select"),
            isValid = true;

        $(".form-group").removeClass("has-error");

        $(".error").remove();

        var shopname = $('#shopname').val();
        var shopslogan = $('#shopslogan').val();
        var shopdescription = $('#shopdescription').val();



        if (shopname.length < 1) {
            s = 0;
            $('#shopname').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#shopname').prev('span').html('');
        }


        if (shopslogan.length < 1) {
            s = 0;
            $('#shopslogan').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#shopslogan').prev('span').html('');
        }


        if (shopdescription.length < 1) {
            s = 0;
            $('#shopdescription').prev('span').html('لطفا این فیلد را پر کنید!');
            isValid = false;
        } else {
            $('#shopdescription').prev('span').html('');
            s = 1;
            isValid = true;
        }



        if (s == 1 && isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
        // alert(isValid);
    });

    $('div.setup-panel div a.step-tab').trigger('click');
});