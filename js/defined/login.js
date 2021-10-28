(function () {
    $(document).ready(function(e){

        $(document).on("click", "#login", function(e) { 

            var data = {
                username: $('#username').val(),
                password: $('#password').val()
            };


            if (data.username == '') {
                Swal.fire('Something went wrong!', 'Username must not be empty!', 'error');
                return;
            }

            if (data.password == '') {
                Swal.fire('Something went wrong!', 'Password must not be empty!', 'error');
                return;
            }
            login(data);
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
                    setToLocalStorage(response_data.content, function () {
                        window.location.replace(redirect_dashboard);
                    });
                } else {
                    Swal.fire('Something went wrong', 'Invalid username/password!', 'error');
                }
            }
        );
    }

    $(document).on("click", '#logout', function() {
        unsetLocalStorage(["user_id", "token"], function() {
            window.location.replace(redirect_dashboard);
        });
    });
})();