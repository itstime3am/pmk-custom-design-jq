$(document).ready(function () {
    // HANDLE MENU RESPONSIVE
    $('.left-menu-resp').on('click',function(){
        var leftMenuClass = $('.left-menu').attr('class');
        if(leftMenuClass.indexOf('-active') > 0){
            $('.left-menu').removeClass('-active');
        }else{
            $('.left-menu').addClass('-active')
        }
    });

    // HANDLE ON CLICK LEFT MENU 
    $('.member-menu-item').on('click', function(){
        if($(this).attr('class').indexOf('-active') < 0){
            var ele =  $(this) || -1 ;
            var eleDisplay = $('.display-menu') || -1;
            var display = 'display-'+$(this).attr('display') || -1;
            ele.addClass('-active');
            ele.siblings('div').removeClass('-active')

            eleDisplay.find('.'+display).css('display', 'block');
            eleDisplay.find('.'+display).siblings().css('display', 'none');

            $('.display-menu .user-input').css('border', '1px solid gray');
            $('.display-menu').find('.err').remove();

            $('.left-menu').removeClass('-active')
        }
    }); 

    // HANDLE SUBMIT PROFILE INFORMATION 
    $('.btn-inform-submit').on('click',function(){
        var informationBody = {};
        var validationForm = false;
        var inputs = $('.display-profile-information').find('.user-input');
        var sel_gender = $('.display-profile-information .user-input-sel select');

        $('.display-menu .user-input').css('border', '1px solid gray');
        $('.display-menu').find('.err').remove();

        informationBody['gender'] = (sel_gender.children('option:selected').attr('value'));
        
        $.each(inputs, function (index, ele) { 
           // validate input regex
           var data = $(this).attr('data');
           var name = $(this).attr('name');
           var value = $(this).val();
           var strError = validationFormProfile(name, value);
            if(strError == ''){
                informationBody[data] = value;
                validationForm = true;
                $(this).css('border', '1px solid gray');
            }else{
                strError = i18nError[strError];
                validationForm = false;
                $(this).css('border', '1px solid red');
                $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this));
            }
        });

        if(validationForm){
            var _json = JSON.stringify(informationBody); 
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

    // HANDLE SUBMIT PROFILE NEW PASSWORD 
    $('.btn-submit-new-password').on('click', function(){
        var newPasswordBody = {};
        var validationForm = true;
        var inputs = $('.display-account').find('.user-input');

        $('.display-menu .user-input').css('border', '1px solid gray');
        $('.display-menu').find('.err').remove();

        $.each(inputs, function (index, ele) { 
            // validate input regex
            var data = $(this).attr('data');
            var name = $(this).attr('name');
            var value = $(this).val();

            var strError = validationFormProfile(name, value);

            if(strError == ''){
                newPasswordBody[data] = value;
                validationForm = true;
                $(this).css('border', '1px solid gray');
             }else{
                strError = i18nError[strError];
                validationForm = false;
                $(this).css('border', '1px solid red');
                $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this));
             }
        });

        if(validationForm){
            var _json = JSON.stringify(newPasswordBody); 
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
  
    // HANDLE ADD NEW ADDRESS ON CLICK
    $('.btn-new-address').on('click', function(){
        $('.display-address').css('display', 'none');
        $('.display-new-address').css('display', 'block');
    });

    // HANDLE CANDLE NEW ADDRESS ON CLICK
    $('.btn-cancel-new-address').on('click', function(){
        $('.display-address').css('display', 'block');
        $('.display-new-address').css('display', 'none');
        $('.display-new-address').find('.user-input').val('');
    });

    // HANDLE SET DEFAULT SHIPPING ADDRESS
    $('.btn-shipping-address').on('click', function(){
        
        if($(this).attr('class').indexOf('-active') < 0 ){
            var setDefaultAddressBody = {};
            // var userId = parseInt($(this).parents('tr').attr('id')) || -1 ;
            var addressId = parseInt($(this).parents('td').siblings('.address').attr('id')) || -1;
            
            if( addressId > 0){
                // setDefaultAddressBody['user_id'] = userId;
                setDefaultAddressBody['address_id'] = addressId;
                var _json = JSON.stringify(setDefaultAddressBody); 
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
            }else{
                alert('Not Found User ID Or Address ID')
            }
        } 
    });

    // HANDLE SET DEFAULT TAX ADDRESS
    $('.btn-tax-address').on('click', function(){
        
        if($(this).attr('class').indexOf('-active') < 0 ){
            var setDefaultAddressBody = {};
            // var userId = $(this).parents('tr').attr('id');
            var addressId = parseInt($(this).parents('td').siblings('.address').attr('id'));
            
            if( addressId > 0){
                // setDefaultAddressBody['user_id'] = userId;
                setDefaultAddressBody['address_id'] = addressId;
                var _json = JSON.stringify(setDefaultAddressBody); 
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
        } 
    });

    // HANDLE SUBMIT ADD NEW ADDRESS FORM
    $('.btn-submit-new-address').on('click', function(){
        var newAddressBody = {};
        var validationForm = false;
        var inputs = $('.display-new-address').find('.user-input');
        var sel_district = $('.display-new-address .user-input-sel select[name="district"]');
        var sel_province = $('.display-new-address .user-input-sel select[name="province"]');
        var rdo_address_type = $('.display-new-address .user-input-radio.address-type').find('input[type=radio]:checked');

        $('.display-menu .user-input').css('border', '1px solid gray');
        $('.display-menu').find('.err').remove();

        newAddressBody['district'] = (sel_district.children('option:selected').attr('value'));
        newAddressBody['province'] = (sel_province.children('option:selected').attr('value'));
        newAddressBody['addressType'] = (rdo_address_type.val());

        $.each(inputs, function (index, ele) { 
              // validate input regex
              var data = $(this).attr('data');
              var name = $(this).attr('name');
              var value = $(this).val();
  
              var strError = validationFormProfile(name, value);
  
              if(strError == ''){
                newAddressBody[data] = value;
                  validationForm = true;
                  $(this).css('border', '1px solid gray');
               }else{
                  strError = i18nError[strError];
                  validationForm = false;
                  $(this).css('border', '1px solid red');
                  $('<div class="err"><span></span><div class="err-text">'+strError+'</div></div>').insertAfter($(this));
               }
        });

        if(validationForm){
            var _json = JSON.stringify(newAddressBody); 
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
