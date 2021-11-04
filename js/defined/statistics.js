(function () {

    $(document).ready(function() {
        loadDashboard();
        requestApiList();

       

        function loadDashboard () {

            generateEmptyTemplate('#type-request-0');
            generateEmptyTemplate('#type-request-1');
            generateEmptyTemplate('#type-request-2');
            setInterval(function () {
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
            }, 5000);
            
    }

    function requestApiList()
    {
        setInterval(function () {
            ajaxRequest(null,
                {
                    url: dashboard_api,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
                        if (typeof response_data.content.length == "undefined") {
                            for (key in response_data.content) {
                                generateRequestTemplate("#type-request-"+key, response_data.content[key], key);
                            }
                        }
                    }
                }
            );
        }, 5000);
        
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
                ajaxRequest(
                    {
                        customer_id: $(e.currentTarget).attr('data-id')
                    },
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
                            // Swal.fire('Deleted!', '', 'success');
                            Swal.fire({
                                title: 'Deleted!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }else {
                            // Swal.fire('Cannot delete the item.', 'Please check the data!', 'error');
                            Swal.fire({
                                title: 'Oh no!',
                                text: 'Cannot delete the item. Please check the data',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                );
            }
        });
    });

    $(document).on("click", "#approved", function(e) {
        e.preventDefault();
        var $status = 1;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "approve", "Approve");
    });

    $(document).on("click", "#turndown", function(e) {
        e.preventDefault();
        var $status = 2;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "turndown", "Turndown");
    });

   function updateCustomer($status,$id, $description, $desc) {
        Swal.fire({
            title: 'Are you sure you want to '+$description+' this item?',
            showCancelButton: true,
            confirmButtonText: $desc,
            confirmButtonColor: '#2691d9',
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
                            // Swal.fire($desc + '!', '', 'success');
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

});

})();