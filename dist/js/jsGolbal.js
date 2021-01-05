var i18nError = {};
i18nError['input_required'] = 'is required';
i18nError['email_invalid'] = ' address is invalid';
i18nError['password_!=_confirm_password'] = 'and password does not match';
i18nError['input_6_12_characters'] = 'must have 6 -12 characters';
i18nError['input_10_digit'] = 'must have at least 10 digit number';
i18nError['input_contain_letter'] = 'must contain only letter';
i18nError['input_contain_number'] = 'must contain only number';
i18nError['input_contain_a-z0-9@_.'] = 'must contain only letter, number, dot, underscore and @';

function formSubmitInput(_formClass, _varObject){
    var object = _varObject;
    var inputs = $('.'+_formClass).find('.user-input');
    var inputsSel = $('.'+_formClass).find('.user-input-sel');
    var inputRadio = $('.'+_formClass).find('.user-input-radio');
    if($('body').find('.'+_formClass).length  > 0){
        $.each(inputs, function (index, ele) { 
            var name = $(this).attr('name');
            var value = $(this).val();
            object[name] = value;
        });
    
        $.each(inputsSel, function (index, ele) { 
            var name = $(this).children('select').attr('name');
            var value = $(this).children('select').find('option:selected').val();
            object[name] = value;
        });

        $.each(inputRadio, function (index, ele) { 
            var input = $(this).find('input[type=radio]:checked');
            var name = input.attr('name')
            var value = input.val();
            object[name] = value;
        });
    }else{
        alert('Not Found Form Class Input')
    }
    return object;
}