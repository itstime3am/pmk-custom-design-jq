$(document).ready(function () {

    $('.btn-login').on('click', function(){
        var authBody = {};
        authBody['username'] = regexUsername($('#input-username').val());
        authBody['password'] = regexPassword($('#input-password').val());
        var _json = JSON.stringify(authBody); 
        console.log(_json)
        $('.error-validation[name="error-auth"]').text('Invalid Username / Password, Please Try Again');
        $.ajax({
            type: "POST",
            url: "/url",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: _json,
            success: function (data, textStatus, jqXHR) {
                
            }
            , error: function (jqXHR, textStatus, errorThrown) {
               
            }
        });
    });

    $('.btn-register').on('click', function(){
        var registerBody = {};
        var validationForm = false;        
        var inputs = $('.register-form').find('.user-input');
        var sel_secure_question = $('.secure-question');
        var terms_accept = $('.input-terms').prop('checked');

        $('.register-form').find('.err').remove();

        registerBody['secureQuestion'] = (sel_secure_question.children('option:selected').attr('value'));
        $.each(inputs, function( index, value ) {
            // validate input regex
            var data = $(this).attr('data');
            var name = $(this).attr('name');
            var value = $(this).val();
            var strError = validationFormRegister(name, value);
            
            if(strError == ''){
                registerBody[data] = value;
                validationForm = true;
                $(this).css('border', '1px solid green');
            }else{
                strError = name+' '+i18nError[strError];
                strError = strError.charAt(0).toUpperCase() + strError.slice(1);
                validationForm = false;
                $(this).css('border', '1px solid red');
                $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this).parent('.div-row'));
            }
        });

        if(validationForm && terms_accept){
            registerBody['termsAccept'] = true;
            console.log(registerBody)
            var _json = JSON.stringify(registerBody); 
            console.log(_json)
            $.ajax({
                type: "POST",
                url: "http://localhost:9090/register",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: _json,
                success: function (data, textStatus, jqXHR) {
                    
                }
                , error: function (jqXHR, textStatus, errorThrown) {
                
                }
            });
        }
    });

    $('.read-terms').on('click', function(){
        _DLG_READ_TERM.dialog('option', 'title', 'ข้อกำหนดและเงื่อนไข').dialog("open");
    });

    $('.btn-reset-password').on('click', function(){
        var resetPasswordBody = {};
        var validationForm = false;        
        var inputs = $('.register-form').find('.user-input');

        $('.register-form').find('.err').remove();

        $.each(inputs, function( index, value ) {
            // validate input regex
            var data = $(this).attr('data');
            var name = $(this).attr('name');
            var value = $(this).val();
            var strError = validationFormRegister(name, value);
            
            if(strError == ''){
                resetPasswordBody[data] = value;
                validationForm = true;
                $(this).css('border', '1px solid green');
            }else{
                strError = name+' '+i18nError[strError];
                strError = strError.charAt(0).toUpperCase() + strError.slice(1);
                validationForm = false;
                $(this).css('border', '1px solid red');
                $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this).parent('.div-row'));
            }
        });

        if(validationForm){
            var _json = JSON.stringify(resetPasswordBody); 
            console.log(_json)
            $.ajax({
                type: "POST",
                url: "/url",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: _json,
                success: function (data, textStatus, jqXHR) {
                    
                }
                , error: function (jqXHR, textStatus, errorThrown) {
                
                }
            });
        }
    });

    $('.btn-reset-password-question').on('click', function(){
        var resetPasswordQuestionBody = {};
        var validationForm = false;        
        var inputs = $('.register-form').find('.user-input');
        var sel_secure_question = $('.secure-question');

        $('.register-form').find('.err').remove();

        resetPasswordQuestionBody['secure_question'] = sel_secure_question.children('option').attr('selected','selected').attr('value');

        $.each(inputs, function( index, value ) {
            // validate input regex
            var data = $(this).attr('data');
            var name = $(this).attr('name');
            var value = $(this).val();
            var strError = validationFormRegister(name, value);
            
            if(strError == ''){
                resetPasswordQuestionBody[data] = value;
                validationForm = true;
                $(this).css('border', 'none');
            }else{
                strError = name+' '+i18nError[strError];
                strError = strError.charAt(0).toUpperCase() + strError.slice(1);
                validationForm = false;
                $(this).css('border', '1px solid red');
                $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this).parent('.div-row'));
            }
        });

        if(validationForm){
            var _json = JSON.stringify(resetPasswordQuestionBody); 
            console.log(_json)
            $.ajax({
                type: "POST",
                url: "/url",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: _json,
                success: function (data, textStatus, jqXHR) {
                    
                }
                , error: function (jqXHR, textStatus, errorThrown) {
                
                }
            });
        }
    });
});

