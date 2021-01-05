$(document).ready(function () {
    $.datepicker.setDefaults({
        showAnim: 'fadeIn',
        // closeText: "ปิด",
        // prevText: "&#x3C;上月",
        // nextText: "下月&#x3E;",
        // currentText: "今天",
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+2",
        monthNames: [ "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
        "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม" ],
        monthNamesShort: [ "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
        "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม" ],
        dayNames: [ "อาทิตย์","จันทร","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์" ],
        dayNamesMin: [ "อา","จ","อ","พ","พฤ","ศ","ส" ],
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        yearSuffix: ""
    });

    $( ".date-picker input" ).datepicker({});
});