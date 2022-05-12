$(document).ready(function() {


    $('#product-form').submit(function(e) {


        var menu1 = $('#menu1').val();

        var menu2 = $('#menu2').val();

        var menu3 = $('#menu3').val();

        var productname = $('#productname').val();

        var comment = $('#comment').val();

        var brand = $('#brand').val();

        var planTitle = $('#plan_title').val();

        var price1 = $('#price1').val();

        var isnumber1 = $.isNumeric(price1);

        var price2 = $('#price2').val();

        var isnumber2 = $.isNumeric(price2);

        var phone = $('#phone').val();

        var isnumberphone = $.isNumeric(phone);

        var discount = $('#discount').val();
        var isnumberdiscount = $.isNumeric(discount);


        var img1 = $("#product-img1").val();
        var img2 = $("#product-img2").val();
        var img3 = $("#product-img3").val();


        $(".error").remove();


        var state = 1;
        if (menu1 == null) {
            $('#menu1').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#menu1').prev('span').html('');
        }

        if (menu2 == null) {
            $('#menu2').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#menu2').prev('span').html('');
        }

        if (menu3 == null) {
            $('#menu3').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#menu3').prev('span').html('');
        }


        if (productname.length < 1) {
            $('#productname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#productname').prev('span').html('');
        }

        if (comment.length < 1) {
            $('#comment').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#comment').prev('span').html('');
        }

        if (brand.length < 1) {
            $('#brand').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#brand').prev('span').html('');
        }

        if (planTitle.length < 1) {
            $('#plan_title').next('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#plan_title').next('span').html('');
        }

        if (price1.length < 1) {
            $('#price1').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumber1 == false) {
            $('#price1').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (price1.length < 5) {
            $('#price1').prev('span').html('تعداد کاراکترها باید بیشتر از 5 باشد!');
            state = 0;
        } else {
            $('#price1').prev('span').html('');
        }

        if (price2.length < 1) {
            $('#price2').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumber2 == false) {
            $('#price2').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (price2.length < 5) {
            $('#price2').prev('span').html('تعداد کاراکترها باید بیشتر از 5 باشد!');
            state = 0;
        } else {
            $('#price2').prev('span').html('');
        }

        if (phone.length < 1) {
            $('#phone').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumberphone == false) {
            $('#phone').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (phone.length < 11 || phone.length > 11 || phone[0] != "0" || phone[1] != "9") {
            $('#phone').prev('span').html('شماره تلفن نامعتبر است!');
            state = 0;
        } else {
            $('#phone').prev('span').html('');
        }

        if (discount.length > 0 && (isnumberdiscount == false || discount < 0 || discount > 99)) {
            $('#discount').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else {
            $('#discount').prev('span').html('');
        }

        if (img1.length < 1) {
            $('#img-error1').before('<span class="error">یک عکس برای محصول انتخاب کنید.</span>');
            state = 0;
        }
        if (img2.length < 1) {
            $('#img-error2').before('<span class="error">یک عکس برای محصول انتخاب کنید.</span>');
            state = 0;
        }
        if (img3.length < 1) {
            $('#img-error3').before('<span class="error">یک عکس برای محصول انتخاب کنید.</span>');
            state = 0;
        }







        var check = true;
        $('.imgUp :input').each(function() {
            $(this).next().html('');

            if ($(this).val() == '') {
                // alert(this.type);
                if (this.type == "file") {
                    $(this).next('span').html("یک تصویر برای ویژگی انتخاب کنید!");
                    state = 0;
                } else {
                    $(this).next('span').html("این فیلد را پر کنید!");
                    state = 0;
                }
            } else if (this.type == 'number') {
                if ($(this).val() < 1) {
                    $(this).next('span').html("تعداد باید بیشتر از 1 عدد باشد!");
                    state = 0;
                }
            } else {
                $(this).next('span').html('');
            }
        });







        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });

    $('#user-form').submit(function(e) {


        var shopname = $('#shop-name').val();

        var shopslogan = $('#shop-slogan').val();

        var shopdescription = $('#shop-description').val();

        var fname = $('#fname').val();

        var lname = $('#lname').val();

        var mobile = $('#mobile').val();
        var isnumbermobile = $.isNumeric(mobile);

        var phone = $('#phone').val();
        var isnumberphone = $.isNumeric(phone);

        var email = $('#email').val();

        var shire = $('#shire').val();

        var city = $("#city").val();

        var prepass = $("#prepass").val();

        var newpass = $("#newpass").val();

        var newpassrep = $("#newpassrep").val();


        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;



        $(".error").remove();


        var state = 1;

        if (shopname.length < 1) {
            $('#shop-name').prev('span').html('لطفا این فیلد را پر کنید.');
            state = 0;
        } else {
            $('#shop-name').prev('span').html('');
        }

        if (shopslogan.length < 1) {
            $('#shop-slogan').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#shop-slogan').prev('span').html('');
        }


        if (shopdescription.length < 1) {
            $('#shop-description').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#shop-description').prev('span').html('');
        }


        if (fname.length < 1) {
            $('#fname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#fname').prev('span').html('');
        }

        if (lname.length < 1) {
            $('#lname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#lname').prev('span').html('');
        }



        if (mobile.length < 1) {
            $('#mobile').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumbermobile == false) {
            $('#mobile').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9") {
            $('#mobile').prev('span').html('شماره تلفن نامعتبر است!');
            state = 0;
        } else {
            $('#mobile').prev('span').html('');
        }



        if (phone.length < 1) {
            $('#phone').prev('span').html('لطفا این فیلد را پر کنید.');
            state = 0;
        } else if (isnumberphone == false) {
            $('#phone').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (phone.length < 11 || phone.length > 11 || phone[0] != "0") {
            $('#phone').prev('span').html('شماره تلفن نامعتبر است!');
            state = 0;
        } else {
            $('#phone').prev('span').html('');
        }



        if (shire == null) {
            $('#shire').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#shire').prev('span').html('');
        }

        if (city == null) {
            $('#city').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#city').prev('span').html('');
        }



        if (prepass.length < 1) {
            $('#prepass').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (prepass.length < 6) {
            $('#prepass').prev('span').html('رمز عبور نباید کمتر از 6 رقم باشد!');
            state = 0;
        } else {
            $('#prepass').prev('span').html('');
        }


        if (newpass.length < 1) {
            $('#newpass').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (newpass.length < 6) {
            $('#newpass').prev('span').html('رمز عبور نباید کمتر از 6 رقم باشد!');
            state = 0;
        } else {
            $('#newpass').prev('span').html('');
        }


        if (newpassrep.length < 1) {
            $('#newpassrep').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (newpassrep.length !== newpass.length) {
            $('#newpassrep').prev('span').html('تکرار رمز عبور جدید نادرست می باشد!');
            state = 0;
        } else {
            $('#newpassrep').prev('span').html('');
        }



        if (email.length < 1) {
            $('#email').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (!emailReg.test(email)) {
            $('#email').prev('span').html('ایمیل نامعتبر می باشد!');
            state = 0;
        } else {
            $('#email').prev('span').html('');
        }





        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });


    // new form validation
    $('#customer_form').submit(function(e) {

        var fname = $('#fname').val();

        var lname = $('#lname').val();

        var mobile = $('#mobile').val();
        var isnumbermobile = $.isNumeric(mobile);

        // national_code
        var nationalcode = $('#nationalcode').val();
        var nationalcodeReg = checkCodeMeli(nationalcode);

        var email = $('#email').val();

        var prepass = $("#prepass").val();

        var newpass = $("#newpass").val();

        var newpassrep = $("#newpassrep").val();


        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        $(".error").remove();


        var state = 1;

        if (fname.length < 1) {
            $('#fname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#fname').prev('span').html('');
        }

        if (lname.length < 1) {
            $('#lname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#lname').prev('span').html('');
        }


        if (nationalcode.length < 1) {
            state = 0;
            $('#nationalcode').prev('span').html('لطفا این فیلد را پر کنید!');
        } else if (!nationalcodeReg) {
            state = 0;
            $('#nationalcode').prev('span').html('کدملی نامعتبر است!');
        } else {
            $('#nationalcode').prev('span').html('');
        }


        if (mobile.length < 1) {
            $('#mobile').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumbermobile == false) {
            $('#mobile').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9") {
            $('#mobile').prev('span').html('شماره تلفن نامعتبر است!');
            state = 0;
        } else {
            $('#mobile').prev('span').html('');
        }


        if (email.length < 1) {
            $('#email').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (!emailReg.test(email)) {
            $('#email').prev('span').html('ایمیل نامعتبر می باشد!');
            state = 0;
        } else {
            $('#email').prev('span').html('');
        }

        if (prepass.length < 1) {
            $('#prepass').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (prepass.length < 6) {
            $('#prepass').prev('span').html('رمز عبور نباید کمتر از 6 رقم باشد!');
            state = 0;
        } else {
            $('#prepass').prev('span').html('');
        }


        if (newpass.length < 1) {
            $('#newpass').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (newpass.length < 6) {
            $('#newpass').prev('span').html('رمز عبور نباید کمتر از 6 رقم باشد!');
            state = 0;
        } else {
            $('#newpass').prev('span').html('');
        }


        if (newpassrep.length < 1) {
            $('#newpassrep').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (newpassrep !== newpass) {
            $('#newpassrep').prev('span').html('تکرار رمز عبور جدید نادرست می باشد!');
            state = 0;
        } else {
            $('#newpassrep').prev('span').html('');
        }



        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


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



    $('#address_form').submit(function(e) {

        var address = $('#address').val();

        var postalcode = $('#postalcode').val();

        var usershire = $('#usershire').val();

        var usercity = $('#usercity').val();

        var receiver = $('#receiver').val();

        var mobile = $('#mobile').val();
        var isnumbermobile = $.isNumeric(mobile);


        $(".error").remove();


        var state = 1;

        if (address.length < 1) {
            $('#address').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#address').prev('span').html('');
        }

        if (postalcode.length < 1) {
            $('#postalcode').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (postalcode.length < 10 || postalcode.length > 10) {
            $('#postalcode').prev('span').html('کد پستی نامعتبر است!');
            state = 0;
        } else {
            $('#postalcode').prev('span').html('');
        }


        if (usershire == null) {
            $('#usershire').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#usershire').prev('span').html('');
        }


        if (usercity == null) {
            $('#usercity').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#usercity').prev('span').html('');
        }


        if (receiver.length < 1) {
            $('#receiver').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#receiver').prev('span').html('');
        }


        if (mobile.length < 1) {
            $('#mobile').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else if (isnumbermobile == false) {
            $('#mobile').prev('span').html('فرمت ورودی نادرست می باشد!');
            state = 0;
        } else if (mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9") {
            $('#mobile').prev('span').html('شماره تلفن نامعتبر است!');
            state = 0;
        } else {
            $('#mobile').prev('span').html('');
        }



        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });


    $('#request_form').submit(function(e) {

        var department = $('#department').val();

        var priority = $('#priority').val();

        var subject = $('#subject').val();

        var requestText = $('#requestText').val();

        var customFile = $('#customFile').val();


        $(".error").remove();


        var state = 1;


        if (department == null) {
            $('#department').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#department').prev('span').html('');
        }

        if (priority == null) {
            $('#priority').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#priority').prev('span').html('');
        }

        if (subject.length < 1) {
            $('#subject').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#subject').prev('span').html('');
        }

        if (requestText.length < 1) {
            $('#requestText').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#requestText').prev('span').html('');
        }

        if (customFile.length > 1 && $('#customFile')[0].files[0].size > 300000000) {
            $('#customFile').closest(".custom-file").find('.error_span').html('اندازه فایل بیش از حد مجاز است!');
            state = 0;
        } else {
            $('#customFile').closest(".custom-file").find('.error_span').html('');
        }


        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });


    $('#showrequest_form').submit(function(e) {


        var subject = $('#subject').val();

        var requestText = $('#requestText').val();

        var customFile = $('#customFile').val();


        $(".error").remove();


        var state = 1;


        if (subject.length < 1) {
            $('#subject').next('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#subject').next('span').html('');
        }

        if (requestText.length < 1) {
            $('#requestText').next('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#requestText').next('span').html('');
        }

        if (customFile.length > 1 && $('#customFile')[0].files[0].size > 300000) {
            $('#customFile').closest(".custom-file").find('.error_span').html('اندازه فایل بیش از حد مجاز است!');
            state = 0;
        } else {
            $('#customFile').closest(".custom-file").find('.error_span').html('');
        }


        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });


    // add start

    $('#order_form').submit(function(e) {

        var address_choice = $("input[type='radio']:checked").val();

        var recipientName = $('#recipientName').val();

        var shire = $('#shire').val();

        var city = $('#city').val();

        var postalcode = $('#postalcode').val();

        var address = $('#address').val();

        var sendingMethod = $('#sendingMethod').val();

        var mobile = $('#mobile').val();
        var isnumbermobile = $.isNumeric(mobile);


        var pcal1 = $('#pcal1').val();
        var sendTime = $('#sendTime').val();

        $(".error").remove();


        var state = 1;

        var check_address;

        if (address_choice == undefined || (recipientName.length < 1 || shire == null || city == null ||
                postalcode.length < 1 || address.length < 1 || mobile.length < 1 || isnumbermobile == false ||
                mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9")) {
            $('.address_choice_lable').prev('span').html('آدرس موردنظر خود را انتخاب کنید یا آدرس جدید را درج کنید!');

            state = 0;
            check_address = 0;
            if (recipientName.length < 1) {
                $('#recipientName').prev('span').html('لطفا این فیلد را پر کنید!');
                state = 0;
            } else {
                $('#recipientName').prev('span').html('');
                check_address++;
            }

            if (shire == null) {
                $('#shire').prev('span').html('لطفا یک مورد را انتخاب کنید!');
                state = 0;
            } else {
                $('#shire').prev('span').html('');
                check_address++;
            }

            if (city == null) {
                $('#city').prev('span').html('لطفا یک مورد را انتخاب کنید!');
                state = 0;
            } else {
                $('#city').prev('span').html('');
                check_address++;
            }

            if (postalcode.length < 1) {
                $('#postalcode').prev('span').html('لطفا این فیلد را پر کنید!');
                state = 0;
            } else if (postalcode.length < 10 || postalcode.length > 10) {
                $('#postalcode').prev('span').html('کد پستی نامعتبر است!');
                state = 0;
            } else {
                $('#postalcode').prev('span').html('');
                check_address++;
            }

            if (address.length < 1) {
                $('#address').prev('span').html('لطفا این فیلد را پر کنید!');
                state = 0;
            } else {
                $('#address').prev('span').html('');
                check_address++;
            }



            if (mobile.length < 1) {
                $('#mobile').prev('span').html('لطفا این فیلد را پر کنید!');
                state = 0;
            } else if (isnumbermobile == false) {
                $('#mobile').prev('span').html('فرمت ورودی نادرست می باشد!');
                state = 0;
            } else if (mobile.length < 11 || mobile.length > 11 || mobile[0] != "0" || mobile[1] != "9") {
                $('#mobile').prev('span').html('شماره تلفن نامعتبر است!');
                state = 0;
            } else {
                $('#mobile').prev('span').html('');
                check_address++;
            }



        }
        if (address_choice != undefined || check_address == 6) {

            state = 1;
            $('.address_choice_lable').prev('span').html('');

            $('#recipientName').prev('span').html('');
            $('#shire').prev('span').html('');
            $('#city').prev('span').html('');
            $('#postalcode').prev('span').html('');
            $('#address').prev('span').html('');
            $('#mobile').prev('span').html('');
        }

        if (sendingMethod == null) {
            $('#sendingMethod').prev('span').html('لطفا یک مورد را انتخاب کنید!');
            state = 0;
        } else {
            $('#sendingMethod').prev('span').html('');
        }
        // Date,Time

        if (pcal1.length < 1) {
            $('#pcal1').parent().prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#pcal1').parent().prev('span').html('');
        }

        if (sendTime.length < 1) {
            $('#sendTime').parent().parent().prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#sendTime').parent().parent().prev('span').html('');
        }


        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });

    var add_click = 1;
    $('#add_address').click(function() {
        if (add_click == 1) {
            add_click = 0;
            $('#new_address').removeClass("d-none");
        } else if (add_click == 0) {
            add_click = 1;
            $('#new_address').addClass("d-none");
        }
    });
    // add end


    $('#send-comment-form').submit(function(e) {

        var fname = $('#fname').val();
        var comment = $('#comment').val();

        var state = 1;

        if (fname.length < 1) {
            $('#fname').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#fname').prev('span').html('');
        }

        if (comment.length < 1) {
            $('#comment').prev('span').html('لطفا این فیلد را پر کنید!');
            state = 0;
        } else {
            $('#comment').prev('span').html('');
        }


        if (state == 0) {
            e.preventDefault()
        } else {
            e.stopPropagation();
        }


    });


});