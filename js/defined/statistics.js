(function () {

    $(document).ready(function() {
        loadActiveContacts();
        loadDashboard();
        requestApiList();
        
        var typingTimer;              
        var doneTypingInterval = 1000; 

        $(document).on('keyup', '#search_d',function (){
            $('#search_d').keyup(function(){
                clearTimeout(typingTimer);
                if ($('#search_d').val()) {
                    typingTimer = setTimeout(doneTyping, doneTypingInterval);
                }else{
                    requestApiList();
                }
            });
        });
    
        function doneTyping () {
            requestApiList();
        }

       

        function loadDashboard() {

            generateEmptyTemplate('#type-request-0');
            generateEmptyTemplate('#type-request-1');
            generateEmptyTemplate('#type-request-2');
            
                ajaxRequest(null,
                    {
                    url: statistics_api,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
        
                        // Employee status
                        if (typeof response_data.content.employee.length == "undefined") {
                            for (key in response_data.content.employee) {
                                genCountTemplate("#"+ key, response_data.content.employee[key]);
                            }
                        }
        
                        // todo
                        if (typeof response_data.content.todo.length == "undefined") {
                            for (key in response_data.content.todo) {
                                genCountTemplate("#"+ key, response_data.content.todo[key]);
                            }
                        }
        
                        // Request
                        if (typeof response_data.content.customer.length == "undefined") {
                            for (key in response_data.content.customer) {
                                genCountTemplate("#"+ key, response_data.content.customer[key]);
                            }
                        }
        
                    }
                }   
                );
            
    }

    function requestApiList()
    {

        generateEmptyTemplate('#type-request-0');
        generateEmptyTemplate('#type-request-1');
        generateEmptyTemplate('#type-request-2');
        
            ajaxRequest(null,
                {
                    url: dashboard_api,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                    data: {
                        search: $("#search_d").val()
                    }
                },
                function (response_data) {
                    if (response_data.status == true) {
                        if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {
            
                            if ( response_data.content[0])  {
                                $('#type-request-paginate-0').pagination({
                                    dataSource: response_data.content[0],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-0", data, 0);
                                    }
                                });
                            }
                            if (response_data.content[1])  {
                                $('#type-request-paginate-1').pagination({
                                    dataSource: response_data.content[1],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-1", data, 1);
                                    }
                                });
                            }
                            if (response_data.content[2])  {
                                $('#type-request-paginate-2').pagination({
                                    dataSource: response_data.content[2],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-2", data, 2);
                                    }
                                });
                            }

                        }
                    }
                }
            );
    }

    function loadActiveContacts()
    {
        generateEmptyTemplate('#choose-active-contacts');
        ajaxRequest(null,
            {
                url: get_active_employee_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {

                    if (response_data.content.employees != null) {
                        if (response_data.content.employees.length > 0) {
                            generateActiveContacts('#choose-active-contacts', response_data.content.employees);
                        }
                    }
                }
            });
    }
        
    $('#request_modal-0').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-0",response_data.content);
                }
            }
        );
    });

    $('#request_modal-1').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-1",response_data.content);
                }
            }
        );
    });


    $('#request_modal-2').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-2", response_data.content);
                }
            }
        );
    });


    $(document).on("click","#deleteRequest", function(e) {
        Swal.fire({
            title: 'Are you sure you want to delete this item?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) {
                $('.modal').modal('hide');
                $('#confirm-pass-admin').val("");
                $('#confirm-admin-modal').modal('show');
                var customerId = $(e.currentTarget).attr('data-id');
                confirmAdmin(customerId);
            }
        });
    });
        
    function confirmAdmin(customerId)
    {
        $(document).on("click","#confirm-pass-submit", function(e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var customer_payload = {
                customer_id: customerId
            };

            if (checkAdmin.check_pass == '') {
                Swal.fire({
                    title: 'Admin password is empty!',
                    text: 'To confirm changes, please ask the admin.',
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
                        deleteCustomer(customer_payload)
                    }else {
                        Swal.fire({
                            title: 'Oh no!',
                            text: response_data.error + ' Unable to complete process.',
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
        
    function deleteCustomer(customer_payload)
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#2691d9',
            icon: 'question'
        }).then(function (result) {
            if (result.isConfirmed) {
                ajaxRequest(customer_payload,
                    {
                        url: dashboad_customer_del_api,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            loadDashboard();
                            requestApiList();
                            $('.modal').modal('hide');
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'The request has been deleted. ',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                            $('#confirm-pass-admin').val("");
                        }else {
                            Swal.fire({
                                title: 'Oh no!',
                                text: response_data.error + ' Unable to complete process.',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                            $('#confirm-pass-admin').val("");
                        }
                    }
                );
            } else {
                $('.modal').modal('hide');
                $('#request_modal-2').modal('show');
                $('#confirm-pass-admin').val("");
            }
        });
    }

    $(document).on("click", "#approved", function(e) {
       
        Swal.fire({
            title: 'Are you sure you want to approved this item?',
            showCancelButton: true,
            confirmButtonText: 'Approve',
            confirmButtonColor: '#2691d9',
            icon: 'question'
        }).then(function (result) {
            if (result.isConfirmed) {
                $('.modal').modal('hide');
                $('#choose_contacts_modal').modal('show');
            }
        });

    });

    $(document).on("click", "#turndown", function(e) {
        e.preventDefault();
        var $status = 2;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomerTurdown($status, $id, "Turndown");
    });


       
        
   function updateCustomerTurdown($status, $id, $desc) {
        Swal.fire({
            title: 'Are you sure you want to turndown this item?',
            showCancelButton: true,
            confirmButtonText: $desc,
            confirmButtonColor: '#2691d9',
            icon: 'question'
        }).then(function (result) {
            if (result.isConfirmed) {
                ajaxRequest(
                    {
                        status: $status,
                        customer_id: $id
                    },
                    {
                        url: dashboad_customer_update_api,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            loadDashboard();
                            requestApiList();
                            $('.modal').modal('hide');
                            Swal.fire({
                                title: $desc + '!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                );     
            }
        }); 
    }
    
    $(document).on("click", "#sendSMS", function(e) { 
        
        var $selected = [];
   
        $('#choose-active-contacts input:checked').each(function() {
            $selected.push($(this).val());
        });

        if ($selected.length == 0) {
            Swal.fire({
                title: 'Oops...',
                text: 'You cannot send without a contact number. Please select atleast 1 number.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }

        if ($("#send_message").val() == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Message must not be empty and is required.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure you want to send this message?',
            text: '',
            showCancelButton: true,
            cancelButtonText: 'No, cancel',
            confirmButtonText: 'Yes, send this message',
            confirmButtonColor: '#2691d9',
            icon: 'question',
            showLoaderOnConfirm: true,
        }).then(function (result) {
            if (result.isConfirmed) {
                $("#sendSMS").prop("disabled", true);
                sendMessage({
                    message_content: $("#send_message").val(),
                    message_numbers: $selected
                });
                approvedRequest({
                    status: $("#custStat").val(),
                    customer_id: $("#custID").val(),
                })
                $("#sendSMS").prop("disabled", false);
            } else {
                
            }
        }); 

    });
        
    function approvedRequest(data)
    {
        ajaxRequest(data,
            {
                url: dashboad_customer_update_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // Swal.fire({
                    //     title: $desc + '!',
                    //     text: '',
                    //     icon: 'success',
                    //     confirmButtonText: 'OK',
                    //     confirmButtonColor: '#2691d9',
                    // });
                }
            }
        ); 
    }
        
    function sendMessage(data)
    {
        ajaxRequest(data,
            {
                url: create_message_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                $('.modal').modal('hide');
                loadDashboard();
                loadActiveContacts();
                requestApiList();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#send_message').val("");
                });
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Something went wrong. ' + response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }
});

})();