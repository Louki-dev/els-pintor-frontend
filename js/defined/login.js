(function () {
    $(document).ready(function(e){
        document.getElementById("login_v2").style.display = "none";

        $(document).on("click", "#login", function(e) { 

            var data = {
                username: $('#username').val(),
                password: $('#password').val()
            };


            if (data.username == '') {
                Swal.fire({
                    title: 'Username is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.password == '') {
                Swal.fire({
                    title: 'Password is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            login(data);

            $(document).on("click", "#resend", function(e) { 
                login(data);
                var resend = document.getElementById("resend");
                resend.style.color = "#aaa"
                resend.style.textDecoration = "none";
                resend.disabled = true;
                resend.classList.remove('txt_decor');
            });
        });

        $(document).on("click", "#verify", function(e) { 

            var vcode_data = {
                vcode: $('#vcode').val(),
            };
            
            if (vcode_data.vcode == '') {
                Swal.fire({
                    title: 'Verification code is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            checkVcode(vcode_data);
        });


    });

    function login(data)
    {
        ajaxRequest(data,
            {
                url: login_api,
                type: "GET",
                dataType: "json",
            },
            function (response_data) {
                // setToLocalStorage('content', response_data.content);
                if (response_data.status) {
                    document.getElementById("login_v1").style.display = "none";
                    document.getElementById("login_v2").style.display = "block";
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Invalid username or password.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    function checkVcode(vcode_data)
    {
        ajaxRequest(vcode_data,
            {
                url: check_vcode,
                type: "GET",
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status) {
                    setToLocalStorage(response_data.content, function () {
                        window.location.replace(redirect_dashboard);
                    });
                } else {
                    Swal.fire({
                        title: 'Invalid verification code',
                        text: 'Please enter the valid verification code.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on("click", '#logout', function() {
        unsetLocalStorage(["user_id", "token"], function() {
            window.location.replace(redirect_login);
        });
    });
})();