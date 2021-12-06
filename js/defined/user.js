(function () {
    $(document).ready(function () {
        loadUser();


        $(document).on("click","#edit_user", function(e) { 
            var input = document.querySelector(".input_user");
            var button = document.querySelector(".input_button");
            //check whether the element exists
            if (input != null && input != undefined && button != null && button != undefined) {
                input.disabled = false;
                button.disabled = false;
            }

            document.getElementById("user").focus();
    
        });

        $(document).on("click","#edit_email", function(e) { 
            var input = document.querySelector(".input_email");
            var button = document.querySelector(".input_button");
            //check whether the element exists
            if (input != null && input != undefined && button != null && button != undefined) {
                input.disabled = false;
                button.disabled = false;
            }
            document.getElementById("email").focus();
        });
    
        $(document).on("click","#edit_pass", function(e) { 
            var curt_pass = document.querySelector(".curt_pass");
            var nw_pass = document.querySelector(".nw_pass"); 
            var val_button = document.querySelector(".input_button");

            if (curt_pass != null && curt_pass != undefined && nw_pass != null && nw_pass != undefined && val_button != null && val_button != undefined)  {
                curt_pass.disabled = false;
                nw_pass.disabled = false;
                val_button.disabled = false;
            }
            document.getElementById("new_pass").focus();
        });

        $(document).on("click", "#edit-user-submit", function (e) {

            var user_payload = {
                user_ID: $('#id_user').val(),
                user_username: $('#user').val(),
                user_email: $('#email').val(),
                check_pass: $('#c-pass').val(),
                pass_word: $('#retype_pass').val(),
                new_pass: $('#new_pass').val()
            };

            if (user_payload.user_username == '') {
                Swal.fire({
                    title: 'Username must not be empty!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (user_payload.user_email == '') {
                Swal.fire({
                    title: 'Email must not be empty!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (user_payload.check_pass == '') {
                Swal.fire({
                    title: 'Password is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            updateUser(user_payload);
   
        });





        // optional -------------------------------
        $(document).on("click", "#edit-pass-submit", function (e) {
            var pass_payload = {
                pass_id: $('#id_user').val(),
                pass_word: $('#ch-pass').val(),
                old_pass: $('#old_pass').val(),
                new_pass: $('#new_pass').val()
                
            };
            var check_pass_payload = {
                old_pass: $('#old_pass').val(),
                new_pass: $('#new_pass').val(),
                pass_word: $('#ch-pass').val()
                
            };
    
            if (pass_payload.old_pass == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Current password is required.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $(".modal").modal('hide');
                });
                return;
            }
            if (pass_payload.new_pass == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'New password must not be empty.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $(".modal").modal('hide');
                });
                return;
            }
            if (pass_payload.pass_word == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'New password is required.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            
            $(".modal").modal('hide');
            checkPass(check_pass_payload, pass_payload);
            // updatePass(pass_payload);
    
        });

        
    });

    function loadUser()
    {
        ajaxRequest(null,
            {
            url: get_user,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        generateUser('#user_data', response_data.content);
                        // generateUserPass('#id-pass', response_data.content);
                    }
                }
            }
        });
    }

    function updateUser(user_payload)
    {
        ajaxRequest(user_payload,
            {
                url: change_usern,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                loadUser();
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Success',
                    text: 'User profile has been successfully updated!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#c-pass').val("");
                    $('#new_pass').val("");
                    $('#retype_pass').val("");
                });
                

            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('.modal').modal('hide');
                    $('#c-pass').val("");
                    $('#new_pass').val("");
                    $('#retype_pass').val("");
                });
            }
        });
    }

    function checkPass(check_pass_payload, pass_payload)
    {
        ajaxRequest(check_pass_payload,
            {
                url: check_pass,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                updatePass(pass_payload);
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('#edit_pass').val("");
                    $('#new_pass').val("");
                    $('#ch-pass').val("");
                    $('#old_pass').val("");
                });
            }
        });
     
    }
    
    function updatePass(pass_payload)
    {
        $("#sk-modal").modal('show');

        $(document).on("click", "#confirm-sk-submit", function (e) {

            var sk_payload = {
                key: $('#sk-admin').val()
            }

            if (sk_payload.key == '') {
                Swal.fire({
                    title: 'Secret key is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            checkKey(sk_payload, pass_payload);
        });
    }

    function checkKey(sk_payload, pass_payload)
    {
        ajaxRequest(sk_payload,
            {
                url: check_key,
                type: "GET",
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                $('#sk-admin').val("");
                updatePassword(pass_payload)
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $('#sk-admin').val("");
                });
            }
        });
    }

    function updatePassword(pass_payload)
    {
        ajaxRequest(pass_payload,
            {
                url: change_passw,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Success!',
                    text: 'Password has been updated.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    location.reload(true);
                    $('#ch-pass').val("");
                    $('#old_pass').val("");
                    $('#new_pass').val("");
                });
                
                
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    $(".modal").modal('hide');
                    $('#ch-pass').val("");
                    $('#old_pass').val("");
                    $('#new_pass').val("");
                });
            }
        });
    }
})()