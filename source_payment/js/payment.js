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
            // remove icon and background login/ choose account
            $('.fa_icon_check_login').removeClass('fa-sign-in-alt').addClass('fa-check-circle');
            $('.fa_icon_check_choose_account').removeClass('fa-user').addClass('fa-check-circle');
            $('.step_login, .step_choose_account').css({background: '#28a745', border: '#28a745'});

            $('.content_warning_input_otp').load('./components/warning/OtpWarning.html');
            $('.content_input_otp').load('./components/transactionOTP.html');
            countDownTime('#timer', true);
        }, 5000);
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

                // remove icon choose otp code
                $('.fa_icon_check_otp_code').removeClass('fa-code').addClass('fa-check-circle');
                $('.fa_icon_check_result').removeClass('fa-tasks').addClass('fa-check-circle');
                $('.step_input_otp, .step_result_payment').css({background: '#28a745', border: '#28a745'});

                $('.content_result_payment').load('./components/result.html');
            }, 8000);
        }
    });
}

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


