(function () {
    
    $(document).ready(function() {
        loadEmployee();

        $('#edit_emp_modal').on('show.bs.modal', function(e) {
            var data = $(e.relatedTarget).attr('data-info');
            
            $("#update-emp_id").val(data);
            $("#update-firstName").val($('#tfname_'+ data).html());
            $("#update-lastName").val($('#tlname_' + data).html());
            $("#update-mobileNumber").val($('#tnumber_'+ data).html());
            $("#update-inputEmail").val($('#temail_'+ data).html());
            $('#UpdateEmployee').html('Update');
            
        });

    });
    
    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms (5 seconds)

    //on keyup, start the countdown
    $(document).on('keyup', '#search_emp',function (){
        $('#search_emp').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_emp').val()) {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            }else{
                loadEmployee();
            }
        });
    });
    

    //user is "finished typing," do something
    function doneTyping () {
        loadEmployee();
    }

    $(document).on('click','#resetEmployee',function (){
        $('#firstName').val("");
        $('#lastName').val("");
        $('#inputEmail').val("");
        $('#mobileNumber').val("");
        $("#emp_id").val(""); 
        $('#AddEmployee').html('Submit');
    });

    $(document).on('click', '#deleteEmployee', function (e) {
        Swal.fire({
            title: 'Are you sure you want to remove this employee ?',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: '#2691d9',
            icon: "question",
        }).then(function (result) {
            if (result.isConfirmed) { 
                // deleteEmployee({
                //     emp_id: $("#update-emp_id").val()
                // });
                $('#edit_emp_modal').modal('hide');
                var empId = $("#update-emp_id").val();
                removeEmployeeCheck(empId);
                // confirmAdmin(empId);
            }
        });
    });
    
    $(document).on('click', '#UpdateEmployee', function () {
            var payload = {
                emp_id: $("#update-emp_id").val(),
                fname: $("#update-firstName").val(),
                lname: $("#update-lastName").val(),
                mobile: $("#update-mobileNumber").val(),
                email: $("#update-inputEmail").val()
            };
            if (payload.fname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'First name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.lname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Last name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.mobile == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Mobile number must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.email == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Email must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            Swal.fire({
                title: 'Are you sure you want to update this employee?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateEmployee(payload);        
                }
            });
    });

    
    $(document).on('click','#AddEmployee',function() {
            const capitalize = function(str) {
                if(typeof str === 'string') {
                    return str.replace(/^\w/, c => c.toUpperCase());
                } else {
                    return '';
                }
            };
        
            var data = {
                fname : capitalize($('#firstName').val()),
                lname: capitalize($('#lastName').val()),
                email : $('#inputEmail').val(),
                mobile : $('#mobileNumber').val()
 
            };
            
            if (data.fname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'First name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.lname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Last name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.mobile == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Mobile number must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.email == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Email must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            // addEmployee(data);  
            ValidateEmail(data);

    });

    function ValidateEmail(data) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.e_email.value))
    {
        addEmployee(data);  
        return;
    }
        Swal.fire({
            title: 'You have entered invalid email!',
            text: '',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2691d9',
        });
        return;
    }

    function loadEmployee()
    {
        generateEmptyTableTemplate('#employee-list-data');
            ajaxRequest(
                {
                    search: $("#search_emp").val()
                },
                {
                url: get_employee_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.count != 0) {
                        
                        $('#employee-paginate').pagination({
                            dataSource: response_data.content.employees,
                            callback: function(data, pagination) {
                                generateTemplateEmployee("#employee-list-data", data);
                            }
                        });
                        
                    }
                }
            });
    }



    function addEmployee(data)
    {
        ajaxRequest(data,
            {
            url: create_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {    
                $('.modal').modal('hide');
                Swal.fire({
                    title: 'Employee successfully added!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    loadEmployee();
                    $('#firstName').val("");
                    $('#lastName').val("");
                    $('#inputEmail').val("");
                    $('#mobileNumber').val("");
                    $("#emp_id").val("");
                });

            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

    function confirmAdmin(empId)
    {
        $(document).on("click","#confirm-pass-submit", function(e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var emp_payload = {
                emp_id: empId
            };

            if (checkAdmin.check_pass == '') {
                Swal.fire({
                    title: 'Admin password is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                $('#confirm-pass-admin').val("");
                return;
            }
            ajaxRequest(checkAdmin,
                {
                    url: check_admin,
                    type: "POST",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
                        $('.modal').modal('hide');
                        $('#confirm-pass-admin').val("");
                        deleteEmployee(emp_payload);
                    }else {
                        Swal.fire({
                            title: 'Oh no!',
                            text: response_data.error,
                            icon: 'error',
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#2691d9',
                        });
                        $('#confirm-pass-admin').val("");
                    }
                }
            );
        });
    }
    function removeEmployeeCheck(empId)
    {
        var empayload = {
            emp_id: empId
        };
        ajaxRequest(empayload, 
            {
            url: delete_employee_check,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                $('#confirm-pass-admin').val("");
                $('#confirm-admin-modal').modal('show');
                confirmAdmin(empId);
                return;
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }
    function deleteEmployee(emp_payload)
    {
           ajaxRequest(emp_payload,
            {
            url: delete_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                // loadEmployee();
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Removed!',
                    text: 'Employee has been removed!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    if (result.isConfirmed) {
                        $('#update-firstName').val("");
                        $('#update-lastName').val("");
                        $('#update-inputEmail').val("");
                        $('#update-mobileNumber').val("");
                        $("#update-emp_id").val(""); 
                        window.location.reload(true);     
                    }
                }); 
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Cannot find the employee. Unable to complete process.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });

    }

    function updateEmployee (data)
    {
        ajaxRequest(data,
            {
                url: update_employee_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                // loadEmployee();
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Employee successfully updated!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    if (result.isConfirmed) {
                        $('#update-firstName').val("");
                        $('#update-lastName').val("");
                        $('#update-inputEmail').val("");
                        $('#update-mobileNumber').val("");
                        $("#update-emp_id").val("");
                        window.location.reload(true);     
                    }
                });   
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

})()