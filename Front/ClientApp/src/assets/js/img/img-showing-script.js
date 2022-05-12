
var _validFileExtensions = [".jp",".jpg", ".jpeg", ".gif", ".png"];
function readImg1(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            var blnValid1 = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];

                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                   // alert("blnValid"+blnValid);
                    break;
                }
                else if(oInput.files[0].size <= 6000000){
                  //  alert(oInput.files[0].size);
                    blnValid1 = true;
                   // alert("blnValid1"+blnValid1);
                    // break;
                }

            }

            if (!blnValid) {
                alert("خطا ، " + sFileName + "پسوند فایل انتخاب شده نامعتبر می باشد ، پسوند های مجاز عبارت اند از :" + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
            else if (!blnValid1) {
                // alert("خطا ، اندازه فایل بیش از حد مجاز (6MB) می باشد !");

                var x="اندازه فایل بیش از حد مجاز(6MB) می باشد!";
                document.getElementById("img-error1").innerHTML = x;

                oInput.value = "";


                var edit_save = document.getElementById("img-area1");

                edit_save.src = "#";


                // return false;
            }
            else if (oInput.files && oInput.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#img-area1').attr('src', e.target.result);
                };

                var x="";
                document.getElementById("img-error1").innerHTML = x;

                reader.readAsDataURL(oInput.files[0]);

            }

        }
    }
    return true;
}

function readImg2(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            var blnValid1 = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];

                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    //alert("blnValid"+blnValid);
                    break;
                }
                else if(oInput.files[0].size <= 6000000){
                    //alert(oInput.files[0].size);
                    blnValid1 = true;
                    //alert("blnValid1"+blnValid1);
                    // break;
                }

            }

            if (!blnValid) {
                alert("خطا ، " + sFileName + "پسوند فایل انتخاب شده نامعتبر می باشد ، پسوند های مجاز عبارت اند از :" + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
            else if (!blnValid1) {
                // alert("خطا ، اندازه فایل بیش از حد مجاز (6MB) می باشد !");

                var x="اندازه فایل بیش از حد مجاز(6MB) می باشد!";
                document.getElementById("img-error2").innerHTML = x;

                oInput.value = "";


                var edit_save = document.getElementById("img-area2");

                edit_save.src = "#";


                // return false;
            }
            else if (oInput.files && oInput.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#img-area2').attr('src', e.target.result);
                };

                var x="";
                document.getElementById("img-error2").innerHTML = x;

                reader.readAsDataURL(oInput.files[0]);

            }

        }
    }
    return true;
}

function readImg3(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            var blnValid1 = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];

                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    //alert("blnValid"+blnValid);
                    break;
                }
                else if(oInput.files[0].size <= 6000000){
                    //alert(oInput.files[0].size);
                    blnValid1 = true;
                    //alert("blnValid1"+blnValid1);
                    // break;
                }

            }

            if (!blnValid) {
                alert("خطا ، " + sFileName + "پسوند فایل انتخاب شده نامعتبر می باشد ، پسوند های مجاز عبارت اند از :" + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
            else if (!blnValid1) {
                // alert("خطا ، اندازه فایل بیش از حد مجاز (6MB) می باشد !");

                var x="اندازه فایل بیش از حد مجاز(6MB) می باشد!";
                document.getElementById("img-error3").innerHTML = x;

                oInput.value = "";


                var edit_save = document.getElementById("img-area3");

                edit_save.src = "#";


                // return false;
            }
            else if (oInput.files && oInput.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#img-area3').attr('src', e.target.result);
                };

                var x="";
                document.getElementById("img-error3").innerHTML = x;

                reader.readAsDataURL(oInput.files[0]);

            }

        }
    }
    return true;
}