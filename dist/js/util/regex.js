function regexUsername(_str){
    // allow only character(a-z A-Z) , number (0-9) , under score (_), @ , dot (.)
    // min length 6
    if(_str){
        if(_str.length < 6 || _str.length > 12){
            return 'Username must have 6-12 characters';
        }else if(!_str.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'Username allow only [a-z][A-Z][0-9][@._]';
        }else{
            return '';
        }
    }else{
        return 'Please enter your username';
    }
}

function regexPassword(_str){
    // allow only character(a-z A-Z) , number (0-9) , under score (_) , @ , dot (.)
    // min length 6
    if(_str){
        if(_str.length < 6 || _str.length > 12){
            return 'Password must have 6-12 characters';
        }else if(!_str.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'Password allow only [a-z][A-Z][0-9][@._]';
        }else{
            return '';
        }
    }else{
        return 'Please enter your password';
    }
}

function regexConfirmPassword(_password, _confirmPassword) {
    // allow only character(a-z A-Z) , number (0-9) , under score (_) , @ , dot (.)
    // min length 6
    if(_confirmPassword){
        if(_confirmPassword.length < 6 || _confirmPassword.length > 12){
            return 'Confirm password must have 6-12 characters';
        }else if(!_confirmPassword.match(/^[A-Za-z0-9][A-Za-z0-9@._]*(?:_+[A-Za-z0-9]+)*$/)){
            return 'Confirm password allow only [a-z][A-Z][0-9][@._]';
        }else if(_password != _confirmPassword){
            return 'Password and confirm password does not match';
        }else{
            return '';
        }
    }else{
        return 'Please enter your confirm password';
    }
}

function regexName(_str) {
    //allow only letter
    if(_str){
        if(_str.match(/[0-9$&+,:;=?@#|'<>.^*()%!-_]/)){
            return 'Name is allow only letter'
        }else{
            return '';
        }
    }else{
        return 'Please enter your name';
    }
}

function regexTelNumber(_str) {
    // allow only number ( 0-9 ) and dash ( - );
    if(_str){
        if(_str.length < 10){
            return 'Tel must have at least 10 digit number'; 
        }else if(!_str.match(/^[0-9- ]*$/)){
            return 'Password allow only number';
        }else{
            return '';
        }
    }else{
        return 'Please enter your telephone number';
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
            return "Ex. polomaker@gmail.com"
        }else{
            return '';
        }
    }else{
        return '';
    }
}