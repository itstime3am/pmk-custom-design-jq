var _DLG_READ_TERM = $('.dialog-term-detail').dialog({
    height: 'auto'
    , width: 'auto'
    ,dialogClass: 'no-close'
    , show: { effect: "puff", duration: 300 }
    , hide: { effect: "fade", duration: 300 }
    , modal: true
    , resizable: false
    , closeOnEscape: true
    , autoOpen: false
    , draggable: false
    , buttons: {
        'ยอมรับ': function () {
            $('.input-terms').prop('checked') ? '' : $('.input-terms').attr('checked', true);
            $(this).dialog('close');
        },
        'ปฏิเสธ': function () {
            $(this).dialog('close');
        }
    }
});