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
    
        $(document).on("click","#edit_pass", function(e) { 
            var curt_pass = document.querySelector(".curt_pass");
            var nw_pass = document.querySelector(".nw_pass"); 
            var val_button = document.querySelector(".val-button");

            if (curt_pass != null && curt_pass != undefined && nw_pass != null && nw_pass != undefined && val_button != null && val_button != undefined)  {
                curt_pass.disabled = false;
                nw_pass.disabled = false;
                val_button.disabled = false;
            }

            document.getElementById("user").focus();
        });

        $(document).on("click", "#edit-user-submit", function (e) {
            var user_payload = {
                user_ID: $('#id_user').val(),
                user_username: $('#user').val(),
                check_pass: $('#c-pass').val()
            };

            if (user_payload.user_username == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Username must not be empty. Reload the page',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (user_payload.check_pass == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Password is required! Please try again',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            updateUser(user_payload);
   
        });

        $(document).on("click", "#edit-pass-submit", function (e) {
            var pass_payload = {
                pass_id: $('#id_pass').val(),
                pass_word: $('#ch-pass').val(),
                old_pass: $('#old_pass').val(),
                new_pass: $('#new_pass').val()
                
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
            
            updatePass(pass_payload);
    
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
                        generateUserPass('#id-pass', response_data.content);
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
                    title: 'Username updated!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#c-pass').val("");
                });
                

            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Invalid password. Please try again',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

    function updatePass(pass_payload)
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
                    title: 'Your new-password is successfully updated!',
                    text: '',
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