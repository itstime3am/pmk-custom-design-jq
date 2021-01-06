function regexUsername(_str){
    // allow only character(a-z A-Z) , number (0-9) , under score (_), @ , dot (.)
    // min length 6
    if(_str){
        if(_str.length < 6 || _str.length > 12){
            return 'input_username_min_max';
        }else if(!_str.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'input_username_contain';
        }else{
            return '';
        }
    }else{
        return 'input_username_required';
    }
}

function regexPassword(_str){
    // allow only character(a-z A-Z) , number (0-9) , under score (_) , @ , dot (.)
    // min length 6
    if(_str){
        if(_str.length < 6 || _str.length > 12){
            return 'input_password_min_max';
        }else if(!_str.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'input_password_contain';
        }else{
            return '';
        }
    }else{
        return 'input_password_required';
    }
}

function regexConfirmPassword(_password, _confirmPassword) {
    // allow only character(a-z A-Z) , number (0-9) , under score (_) , @ , dot (.)
    // min length 6
    if(_confirmPassword){
        if(_confirmPassword.length < 6 || _confirmPassword.length > 12){
            return 'input_confirm_password_min_max';
        }else if(!_confirmPassword.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'input_confirm_password_contain';
        }else if(_password != _confirmPassword){
            return 'password_!=_confirm_password';
        }else{
            return '';
        }
    }else{
        return 'input_confirm_password_required';
    }
}

function regexName(_str) {
    //allow only letter
    _str = _str.toLowerCase();
    if(_str){
        if(_str.match(/[0-9$&+,:;=?@#|'<>.^*()%!-_]/)){
            return 'input_name_contain'
        }else{
            return '';
        }
    }else{
        return 'input_name_required';
    }
}

function regexTelNumber(_str) {
    // allow only number ( 0-9 ) and dash ( - );
    if(_str){
        if(_str.length < 10){
            return 'input_tel_min_max'; 
        }else if(!_str.match(/^[0-9- ]*$/)){
            return 'input_tel_contain';
        }else{
            return '';
        }
    }else{
        return 'input_tel_required';
    }
}

function regexTaxID(_str) {
    // allow only number ( 0-9 ) and dash ( - );
    if(_str){
        if(!_str.match(/^[0-9- ]*$/)){
            return 'input_tax_id_contain';
        }else{
            return '';
        }
    }else{
        return '';
    }
}
function regexPostCode(_str) {
    // allow only number ( 0-9 ) and dash ( - );
    if(_str){
        if(_str.length < 5){
            return 'input_postcode_min_max'; 
        }else if(!_str.match(/^[0-9]*$/)){
            return 'input_postcode_contain';
        }else{
            return '';
        }
    }else{
        return 'input_postcode_required';
    }
}

function regexNoSpecialChar(_str) {
    //not allow special character ( &+,:;=?@#|'<>.^*()%!- );
    return _str.match(/[$&+,:;=?@#|'<>.^*()%!-_]/) ? '' : _str ;
}

function regexLetterOnly(_str) {
    //allow only letter
    _str = _str.toLowerCase();
    return _str.match(/[0-9$&+,:;=?@#|'<>.^*()%!-_]/) ? '' : _str;
}

function regexEmail(_str) {
    // match email pattern 
    if(_str){
        if(!_str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return "email_invalid"
        }else{
            return '';
        }
    }else{
        return '';
    }
}