(function () {
    $(document).ready(function () {
        loadUser();

        $(document).on("click", "#srch_email_submit", function (e) {
            var email_payload = {
                email: $('#srch_email').val()
                
            };

            if (email_payload.email == '') {
                Swal.fire({
                    title: 'Your email is required for validation.',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                return;
            }
            
            checkEmail(email_payload);
    
        });

        $(document).on("click", "#val_key_submit", function (e) {
            var key_payload = {
                key: $('#val_key').val()
                
            };

            if (key_payload.key == '') {
                Swal.fire({
                    title: 'Secret key is required.',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                return;
            }
            
            checkKey(key_payload);
    
        });

        $(document).on("click", "#rst_pass_submit", function (e) {
            var rst_payload = {
                rst_id: $('#rst_id').val(),
                rst_new_pass: $('#rst_new_pass').val(),
                rst_cnfrm_pass: $('#rst_cnfrm_pass').val()
                
                
            };

            if (rst_payload.rst_new_pass == '') {
                Swal.fire({
                    title: 'New password must not be empty.',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                $('#rst_new_pass').val("");
                $('#rst_cnfrm_pass').val("");
                return;
            }

            if (rst_payload.rst_cnfrm_pass == '') {
                Swal.fire({
                    title: 'Confirm new password must not be empty.',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                $('#rst_new_pass').val("");
                $('#rst_cnfrm_pass').val("");
                return;
            }
            
            resetPass(rst_payload);
    
        });
        
    });

    function loadUser()
    {
        ajaxRequest(null,
            {
            url: get_user2,
            type: "GET",
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        generateResetPass('#rst_pass', response_data.content);
                    }
                }
            }
        });
    }

    function checkEmail(email_payload)
    {
        ajaxRequest(email_payload,
            {
                url: check_email,
                type: "GET",
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                $('#srch_email').val("");
                window.location.replace("skacc.php");
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('#srch_email').val("");
                });
            }
        });
    }

    function checkKey(key_payload)
    {
        ajaxRequest(key_payload,
            {
                url: check_key,
                type: "GET",
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                $('#val_key').val("");
                window.location.replace("rstacc.php");
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('#val_key').val("");
                });
            }
        });
    }

    function resetPass(rst_payload)
    {
        ajaxRequest(rst_payload,
            {
                url: reset_pass,
                type: "POST",
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully change your password.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    if (result.isConfirmed) { 
                        $('#rst_new_pass').val(""); 
                        $('#rst_cnfrm_pass').val("");
                        window.location.replace(redirect_login);
                    } 
                });
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('#rst_new_pass').val("");
                    $('#rst_cnfrm_pass').val("");
                });
            }
        });
    }


    function generateResetPass($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<p class="card-text">Password must be at least eight characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.</p>',
                '<input type="hidden" id="rst_id" value="'+ $content[el].user_id + '">',
                '<input type="password" id="rst_new_pass" class="form-control" placeholder="New Password" autofocus>',
                '<input type="password" id="rst_cnfrm_pass" class="form-control mt-3" placeholder="Re-type new password">',
                '<div class="modal-footer mt-4 pb-0 mb-0 pe-0">',
                    '<a type="button" href="" class="btn btn-secondary">Cancel</a>',
                    '<button type="button" id="rst_pass_submit" class="btn btn-primary">Validate</button>',
                '</div>'
            ];
            $($elem).append($html.join(""));
        } 
    }
})()