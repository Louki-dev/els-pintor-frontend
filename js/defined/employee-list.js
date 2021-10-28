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

    $(document).on('click','#resetEmployee',function (){
        $('#firstName').val("");
        $('#lastName').val("");
        $('#inputEmail').val("");
        $('#mobileNumber').val("");
        $("#emp_id").val(""); 
        $('#AddEmployee').html('Submit');
    });

    $(document).on('click','#deleteEmployee',function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this employee ?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteEmployee({
                    emp_id: $("#update-emp_id").val()
                });
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
        
            var data = {
                fname : $('#firstName').val(),
                lname : $('#lastName').val(),
                email : $('#inputEmail').val(),
                mobile : $('#mobileNumber').val()
            };

            addEmployee(data);   

    });

    function loadEmployee()
    {
        ajaxRequest(null,
            {
            url: get_employee_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.count != 0) {
                    generateTemplateEmployee("#employee-list-data", response_data.content.employees);
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
                loadEmployee();
                $('.modal').modal('hide');
                Swal.fire('Employee is successfully added!', '', 'success')
                .then(function (result) {   
                    $('#firstName').val("");
                    $('#lastName').val("");
                    $('#inputEmail').val("");
                    $('#mobileNumber').val("");
                    $("#emp_id").val("");          
                });

            } else {
                Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
            }
        });
    }


    function deleteEmployee(data)
    {
        ajaxRequest(data,
            {
            url: delete_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                loadEmployee();
                $(".modal").modal('hide');
                Swal.fire('Employee is successfully deleted!', '', 'success')
                .then(function (result) {
                    $('#update-firstName').val("");
                    $('#update-lastName').val("");
                    $('#update-inputEmail').val("");
                    $('#update-mobileNumber').val("");
                    $("#update-emp_id").val("");          
                });
            } else {
                Swal.fire('Cannot delete the employee.','Please check the data!', 'error');
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
                loadEmployee();
                $(".modal").modal('hide');
                Swal.fire('Employee is successfully updated!', '', 'success');
                $('#AddEmployee').html('Submit');
                $('#update-firstName').val("");
                $('#update-lastName').val("");
                $('#update-inputEmail').val("");
                $('#update-mobileNumber').val("");
                $("#update-emp_id").val("");      
            } else {
                Swal.fire('Something went wrong','Required input must not be empty!', 'error');
            }
        });
    }
    
})()