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

            $('.left-menu').removeClass('-active')
        }
    }); 

    // HANDLE SUBMIT PROFILE INFORMATION 
    $('.btn-inform-submit').on('click',function(){
        var informationBody = {};
        var validationForm = true;
        var inputs = $('.display-profile-information').find('.user-input');

        $.each(inputs, function (index, ele) { 
            if(!validationFormProfile(ele)){
                validationForm = false;
                $(this).css('border', '1px solid red')
            }else{
                $(this).css('border', '1px solid #000')
            }
        });

        if(validationForm){
            formSubmitInput('display-profile-information', informationBody);
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

        $.each(inputs, function (index, ele) { 
            if(!validationFormProfile(ele)){
                validationForm = false;
                $(this).css('border', '1px solid red')
            }else{
                $(this).css('border', '1px solid #000')
            }
        });

        if(validationForm){
            formSubmitInput('display-account', newPasswordBody);
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

    // HANDLE CANDLE NEW ADDRESS ON CLICK
    $('.btn-cancel-new-address').on('click', function(){
        $('.display-address').css('display', 'block');
        $('.display-new-address').css('display', 'none');
        $('.display-new-address').find('.user-input').val('');
    });

    // HANDLE SUBMIT ADD NEW ADDRESS FORM
    $('.btn-submit-new-address').on('click', function(){
        var newAddressBody = {};
        var validationForm = true;
        var inputs = $('.display-new-address').find('.user-input');

        $.each(inputs, function (index, ele) { 
            if(!validationFormProfile(ele)){
                validationForm = false;
                $(this).css('border', '1px solid red')
            }else{
                $(this).css('border', '1px solid #000')
            }
        });

        if(validationForm){
            formSubmitInput('display-new-address', newAddressBody);
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
