(function () {

    $(document).ready(function() {
        loadActiveContacts();
        loadActiveContacts2();
        loadDashboard();
        requestApiList();
        // setInterval(requestApiList, 10000);

        function handleImage3(e){
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                img.onload = function(){
                    canvas3.width = img.width;
                    canvas3.height = img.height;
                    ctx3.drawImage(img,0,0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);     
        }

        function handleImage4(e){
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                img.onload = function(){
                    canvas4.width = img.width;
                    canvas4.height = img.height;
                    ctx4.drawImage(img,0,0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);     
        }

        var imageLoader3 = document.getElementById('pdf-contract');
        imageLoader3.addEventListener('change', handleImage3, false);
        var canvas3 = document.getElementById('pdf_contract_canvas');
        var ctx3 = canvas3.getContext('2d');
        
        var imageLoader4 = document.getElementById('pdf-contract2');
        imageLoader4.addEventListener('change', handleImage4, false);
        var canvas4 = document.getElementById('pdf_contract_canvas2');
        var ctx4 = canvas4.getContext('2d');


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
                                    callback: function (data, pagination) {
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
        // var interval = setInterval(requestApiList, 10000);
        // var interval = setInterval(loadDashboard, 10000);
    // clearInterval(interval);
    function loadActiveContacts()
    {
        generateEmptyTemplate('#choose-active-contacts');
        ajaxRequest(null,
            {
                url: dashboard_active_employees,
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
    
    function loadActiveContacts2()
    {
        generateEmptyTemplate('#choose-active-contacts2');
        ajaxRequest(null,
            {
                url: dashboard_active_employees,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {

                    if (response_data.content.employees != null) {
                        if (response_data.content.employees.length > 0) {
                            generateActiveContacts2('#choose-active-contacts2', response_data.content.employees);
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
    
    $('#request_modal-approve').on('show.bs.modal', function(e) { 
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
                    generateModelTemplateApprove("#request_modal-approve", response_data.content);
                }
            }
        );
    });


    $(document).on("click","#deleteRequest", function(e) {
        Swal.fire({
            title: 'Are you sure you want to remove this item?',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: '#2691d9',
            icon: "question",
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
                        deleteCustomer(customer_payload)
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
        
    function deleteCustomer(customer_payload)
    {
     
        ajaxRequest(customer_payload,
            {
                url: dashboad_customer_del_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadDashboard();
                    // requestApiList();
                    $('.modal').modal('hide');
                    Swal.fire({
                        title: 'Removed!',
                        text: 'The request has been removed. ',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('#confirm-pass-admin').val("");
                            window.location.reload(true);
                        }
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

    }

    $(document).on("click", "#close_modal", function (e) {
        $("#start-date").val("");
        $("#due-date").val("");
    });
    
    $(document).on("click", "#close_modal2", function (e) {
        $("#start-date2").val("");
        $("#due-date2").val("");
        document.getElementById("upload-image-contract2").style.display = "none";
        document.getElementById("updateApprove").style.display = "none";

        document.getElementById("display-contract_date").style.display = "block";
        document.getElementById("approve2").style.display = "block";

    });
        
    $(document).on("click", "#close_modal_choose_contact", function (e) {
        $("#start-date").val("");
        $("#due-date").val("");
    });
        
    $(document).on("click", "#close_modal_choose_contact2", function (e) {
        $("#start-date2").val("");
        $("#due-date2").val("");
    });
    
    $(document).on("click", "#approved", function(e) {
        let cust_start = document.getElementById("custStart");
        cust_start.value = $("#start-date").val();
        let cust_end = document.getElementById("custEnd");
        cust_end.value = $("#due-date").val();
        let cust_contract = document.getElementById("custContract");
        cust_contract.value = $("#pdf-contract").val();
        
        if ($("#start-date").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Start date must not be empty and is required.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if ($("#due-date").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Due date must not be empty and is required.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if ($("#pdf-contract").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Image contract must not be empty and is required.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        checkDate({
            started: $("#start-date").val(),
            deadline: $("#due-date").val()
        })

        

    });
    
    //hide and unhide contract-date
    document.getElementById("upload-image-contract2").style.display = "none";
    document.getElementById("updateApprove").style.display = "none";
    
    // $(document).on("click", "#display-contract_date", function (e) {
    //     document.getElementById("upload-image-contract2").style.display = "block";
    //     document.getElementById("display-contract_date").style.display = "none";
    // });
    
    $(document).on("click", "#approve2", function (e) {
        var date_updated = $("#dateCreated2").attr('data-id');
        checkContract({ updated: date_updated });
    });
        
    $(document).on("click", "#updateApprove", function (e) {
        updateContract();
    });

    $(document).on("click", "#turndown", function(e) {
        e.preventDefault();
        var $status = 2;
        var $id = $(e.currentTarget).attr('data-id');
        var $work_status = $("#turndown-status").attr('data');
        updateCustomerTurdown($status, $id, "Turndown", $work_status);
    });

   
   function updateCustomerTurdown($status, $id, $desc, $work_status) {
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
                        customer_id: $id,
                        assignEmp: $work_status,
                    },
                    {
                        url: dashboard_customer_turndown,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            // loadDashboard();
                            // requestApiList();
                            $('.modal').modal('hide');
                            Swal.fire({
                                title: $desc + '!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    window.location.reload(true);
                                }
                            }); 
                        }
                    }
                );     
            }
        }); 
   }
        
    function checkDate(data) {
        ajaxRequest(data,
            {
                url: check_date,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire({
                        title: 'Are you sure you want to approve this item?',
                        showCancelButton: true,
                        confirmButtonText: 'Approve',
                        confirmButtonColor: '#2691d9',
                        icon: 'question'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('.modal').modal('hide');
                            $('#choose_contacts_modal').modal('show');
                        }else {
                            let cust_start = document.getElementById("custStart");
                            cust_start.value = $("#start-date").val("");
                            let cust_end = document.getElementById("custEnd");
                            cust_end.value = $("#due-date").val("");
                            let cust_contract = document.getElementById("custContract");
                            cust_contract.value = $("#pdf-contract").val("");
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: response_data.error,
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );     
    }
        
    function checkDate2(data) {
        ajaxRequest(data,
            {
                url: check_date,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire({
                        title: 'Are you sure you want to approve this item?',
                        showCancelButton: true,
                        confirmButtonText: 'Approve',
                        confirmButtonColor: '#2691d9',
                        icon: 'question'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('.modal').modal('hide');
                            $('#choose_contacts_modal2').modal('show');
                        }else {
                            let cust_start = document.getElementById("custStart2");
                            cust_start.value = $("#start-date2").val("");
                            let cust_end = document.getElementById("custEnd2");
                            cust_end.value = $("#due-date2").val("");
                            let cust_contract = document.getElementById("custContract2");
                            cust_contract.value = $("#pdf-contract2").val("");
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: response_data.error,
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );     
        }
        
    function checkContract(data) {
        ajaxRequest(data,
            {
                url: check_contract_date,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire({
                        title: 'Are you sure you want to approve this item?',
                        showCancelButton: true,
                        confirmButtonText: 'Approve',
                        confirmButtonColor: '#2691d9',
                        icon: 'question'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('.modal').modal('hide');
                            $('#choose_contacts_modal2').modal('show');
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
                        if (result.isConfirmed) {
                            document.getElementById("upload-image-contract2").style.display = "block";
                            document.getElementById("updateApprove").style.display = "block";
                            document.getElementById("approve2").style.display = "none";
                            document.getElementById("display-contract_date").style.display = "none";
                        }
                    });

                }
            }
        );     
    }
    
    function updateContract() {
        let cust_start = document.getElementById("custStart2");
        cust_start.value = $("#start-date2").val();
        let cust_end = document.getElementById("custEnd2");
        cust_end.value = $("#due-date2").val();
        let cust_contract = document.getElementById("custContract2");
        cust_contract.value = $("#pdf-contract2").val();
        
        if ($("#start-date2").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Start date must not be empty!',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if ($("#due-date2").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Due date must not be empty!',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if ($("#pdf-contract2").val()) {
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Image contract must not be empty and is required.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        checkDate2({
            started: $("#start-date2").val(),
            deadline: $("#due-date2").val()
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

        if ($selected.length != 1) {
            Swal.fire({
                title: 'Oops...',
                text: 'You cannot assign multiple employees for this project. Please select at least 1 employee.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            var items = document.getElementsByName('uncheck');
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == 'checkbox')
                    items[i].checked = false;
            }
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
        }).then(function (result) {
            if (result.isConfirmed) {
                $("#sendSMS").prop("disabled", true);
                sendMessage({
                    message_content: $("#send_message").val(),
                    message_numbers: $selected,
                    customer_id: $("#custID").val(),
                });
                approvedRequest({
                    status: $("#custStat").val(),
                    customer_id: $("#custID").val(),
                });
                $("#sendSMS").prop("disabled", false);
                
                approvedDates({
                    customer_id: $("#custID").val(),
                    started: $("#start-date").val(),
                    duedate: $("#due-date").val(),
                    contract: document.getElementById('pdf_contract_canvas').toDataURL()    
                });
                $("#start-date").val("");
                $("#due-date").val("");
                $("#pdf-contract").val("");


            } else {
                $('.modal').modal('hide');
                // $('#request_modal-0').modal('show');
                var items = document.getElementsByName('uncheck');
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type == 'checkbox')
                        items[i].checked = false;
                }
                $("#start-date").val("");
                $("#due-date").val("");
                $("#pdf-contract").val("");


            }
        }); 

    });
    
    $(document).on("click", "#sendSMS2", function(e) { 
        
        var $selected = [];
   
        $('#choose-active-contacts2 input:checked').each(function() {
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

        if ($selected.length != 1) {
            Swal.fire({
                title: 'Oops...',
                text: 'You cannot assign multiple employees for this project. Please select at least 1 employee.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            var items = document.getElementsByName('uncheck');
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == 'checkbox')
                    items[i].checked = false;
            }
            return;
        }

        if ($("#send_message2").val() == '') {
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
        }).then(function (result) {
            if (result.isConfirmed) {
                $("#sendSMS2").prop("disabled", true);
                sendMessage({
                    message_content: $("#send_message2").val(),
                    message_numbers: $selected,
                    customer_id: $("#custID2").val(),
                });
                approvedRequest({
                    status: $("#custStat2").val(),
                    customer_id: $("#custID2").val(),
                });
                $("#sendSMS2").prop("disabled", false);
                
                approvedDates({
                    customer_id: $("#custID2").val(),
                    started: $("#start-date2").val(),
                    duedate: $("#due-date2").val(),
                    contract: document.getElementById('pdf_contract_canvas2').toDataURL()
                });
                $("#start-date2").val("");
                $("#due-date2").val("");
                $("#pdf-contract2").val("");

            } else {
                $('.modal').modal('hide');
                // $('#request_modal-0').modal('show');
                var items = document.getElementsByName('uncheck2');
                for (var i = 0; i < items.length; i++) {
                    if (items[i].type == 'checkbox')
                        items[i].checked = false;
                }
                $("#start-date2").val("");
                $("#due-date2").val("");
                $("#pdf-contract2").val("");

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
    function approvedDates(data)
    {
        ajaxRequest(data,
            {
                url: dashboad_customer_update_dates,
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
                url: dashboard_message,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
        function (response_data) {
            if (response_data.status == true) {
                $('.modal').modal('hide');
                // loadDashboard();
                // loadActiveContacts();
                // requestApiList();
                $('#send_message').val("");
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    if (result.isConfirmed) {
                        window.location.reload(true);     
                    }
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