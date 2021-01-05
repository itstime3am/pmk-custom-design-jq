
function validationFormRegister(_name, _val) {
    switch (_name) {
        case 'username':
            return regexUsername(_val);
            break;
        case 'password':
            return regexPassword(_val);
            break;
        case 'confirm password':
             // check match btw password & confirm_password
            var password = $('.register-form').find('input[name="password"]').val();
            return regexConfirmPassword(password, _val);
            break;
        case 'name':
            return regexName(_val);
            break;
        case 'telephone number':
            return regexTelNumber(_val);
            break;
        case 'email':
            return regexEmail(_val);
            break;    
        case 'line id':
            return '';
            break;
        case 'secure answer':
            return _val != '' ? '' : 'input_required' ;
            break;  
    }
}

function validationFormProfile(_name, _val) {
    switch (_name) {
        case 'old password':
        case 'new password':
            return regexPassword(_val);
            break;
        case 'confirm new password':
             // check match btw password & confirm_password
            var password = $('.display-account').find('input[name="new password"]').val();
            return regexConfirmPassword(password, _val);
            break;
        case 'tax ID':
            return regexTaxID(_val);
            break;
        case 'name':
            return regexName(_val);
            break;
        case 'telephone number':
            return regexTelNumber(_val);
            break;
        case 'email':
            return regexEmail(_val);
            break;    
        case 'post code':
            return regexPostCode(_val);
            break;
        case 'date of birth':
        case 'line id':
            return '';
            break;
        case 'address':
        case 'secure answer':
            return _val != '' ? '' : 'input_required' ;
            break;  
    }
}