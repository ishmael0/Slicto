/*****************phoneNumber***************/


String.prototype.toPersianDigits = function() {
    var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return this.replace(/[0-9]/g, function(w) {
        return id[+w]
    });
}

var phone = $("#outprint").text().toPersianDigits();


$("#outprint").text(function(_, val) {
    return val.replace(/(\d{4})\d{7}/, "××× ×××× " + "$1");
});
$(".btn-contact").click(function() {
    $("#outprint").text(phone);
});