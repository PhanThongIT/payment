function confirmPricing() {
    $('.btn_confirm').click(function () {
        $('.payment_information').addClass('d-none');
        $('.step_form').removeClass('d-none');
        $('.step_login').addClass('active');
        $('.content_login').load('./components/common/loading.html');
        setTimeout(function () {
            $('.step_login').addClass('active');
            $('.content_login').load('./components/login.html');
        }, 5000);
    });
}

// Check Validation in Login Form
function validationLogin() {
    $('.btn_submit_login').click(function () {
        let userName = $('#user_name').val();
        let password = $('#password').val();
        if (!userName) {
            $('#validation_username').text('(*) Username is not null!');
            $('#user_name').focus();
        } else {
            $('#validation_username').empty();
        }

        if (!password) {
            $('#validation_password').text('(*)Password is not null!');
            $('.user_name').focus();
        } else if (password < 16 || password > 6) {
            $('#validation_password').text('(*)Password is belong to range of 6 to 16 characters');
            $('.user_name').focus();
        } else {
            $('#validation_password').empty();
        }
        if (userName === 'phanthong' && password === 'phanthongit112') {
            $('.content_login').empty();
            $('.content_tab_login').removeClass('show');
            $('.content_tab_login').removeClass('active');
            $('.step_login').addClass('disabled');
            $('.step_login').removeClass('active');
            $('.step_input_otp').addClass('active');
            $('.content_tab_otp_code').addClass('show');
            $('.content_tab_otp_code').addClass('active');
            $('.content_input_otp').load('./components/common/loading.html');
            setTimeout(function () {
                $('.content_input_otp').removeClass('show_loading');
                // $('.fa_icon_check_login').removeClass('fa-sign-in-alt').addClass('fa-check-circle');
                // $('#step_login').css({backgroundColor: '#28a745', border: '#28a745'});
                $('.content_warning_input_otp').load('./components/warning/OtpWarning.html');
                $('.content_input_otp').load('./components/transactionOTP.html');
                countDownTime('#timer', true);
            }, 5000);
        } else {
            $('#login_fail').text("Login fail!");
        }
    });
}

// Check validation OTP code
function validationOTP() {
    $('.btn_submit_otp').click(function () {
        let otpCode = $(".otp_code").val();
        if (!otpCode) {
            $('#validation_otp').text('(*) OTP code is not null');
            $(".otp_code").focus();
        } else {
            $('#validation_otp').empty();
        }
        $('.warning_message').empty();
        if (otpCode === '1234') {
            // Check OK OTP
            $('.content_tab_otp_code').removeClass('show');
            $('.content_tab_otp_code').removeClass('active');
            $('.step_input_otp').removeClass('active');

            $('.content_tab_result').addClass('show');
            $('.content_tab_result').addClass('active');

            $('.step_result_payment').addClass('active');
            $('.content_warning_result_payment').load('./components/warning/transactionWarning.html');
            $('.content_result_payment').load('./components/common/loading.html');
            setTimeout(function () {
                $('.content_warning_result_payment').empty();
                $('.content_result_payment').load('./components/result.html');
            }, 8000);
        }
    });
}

$('.slide a[name="login_button"]').click(function () {
    $('.slide.active').removeClass('active');
    $(this).closest('.slide').addClass('active');
    $('.content_login').load('./components/common/loading.html');
    setTimeout(function () {
        $('.content_login').removeClass('show_loading');
        $('.content_login').load('./components/login.html');
        $('.content_warning').load('./components/warning/loginWarning.html');
    }, 5000);
});


// Count down timmer
function countDownTime(nameAttribute) {
    let getTime = 178;
    let downloadTimer = setInterval(function () {
        $(nameAttribute).text(getTime--);
        if (getTime <= 0) {
            clearInterval(downloadTimer);
            alert("End time");
        }
    }, 1000);
}

$('.slide a').click(function () {
    $('.slide.active').removeClass('active');
    $(this).closest('.slide').addClass('active');
    return false;
});


