

function displayValidation(_eleName, _text){
    $('.error-validation[name="'+_eleName+'"]').text(_text);
}

function validationFormRegister(_name, _val) {
    switch (_name) {
        case 'username':
            return regexUsername(_val);
            break;
        case 'password':
            return regexPassword(_val);
            break;
        case 'confirmPassword':
             // check match btw password & confirm_password
            var password = $('.register-form').find('input[name="password"]').val();
            return regexConfirmPassword(password, _val);
            break;
        case 'name':
            return regexName(_val);
            break;
        case 'tel':
            return regexTelNumber(_val);
            break;
        case 'email':
            return regexEmail(_val);
            break;    
        case 'lineId':
            return '';
            break;
        case 'secureAns':
            return _val != '' ? '' : '*' ;
            break;  
    }
}

function validationFormProfile(_input) {
    var _inputName = $(_input).attr('name');
    var _inputVal = $(_input).val();
    
    switch (_inputName) {
        case 'old_password':
            return regexPassword(_inputVal) != '' ? true : false;
            break;
        case 'new_password':
        case 'confirm_new_password':
            if(regexPassword(_inputVal) != '' ){
                // check match btw password & confirm_password
                var password = $('.display-account').find('input[name="new_password"]').val();
                var confirm_password = $('.display-account').find('input[name="confirm_new_password"]').val();
                if(password != confirm_password){
                    return false;
                }else{
                    return true;
                }
            }else{
                return false;
            }
            break;
        case 'address':
        case 'post_code':
            return _inputVal != '' ? true : false ;
            break;
        case 'name':
            return regexLetterOnly(_inputVal) != '' ? true : false;
            break;
        case 'tel':
            return regexTelNumber(_inputVal) != '' ? true : false;
            break;
        case 'email':
            if(_inputVal){
                return regexEmail(_inputVal) != '' ? true : false;
            }else{
                return true;
            }
            break;  
        case 'tax_iden_no':
            if(_inputVal){
                return regexTelNumber(_inputVal) != '' ? true : false;
            }else{
                return true;
            }
            break;  
        default:
            return true;
    }
}