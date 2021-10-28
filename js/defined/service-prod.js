(function () {

  
    $(document).ready(function () { loadService(); loadProduct();});
    
    $(document).on('click', '#AddService', function () {
        var data = {
            serv_name : $('#serv_name').val(),
            serv_price: $('#serv_price').val(),
            // serv_image : $('#serv_image').val(),
            serv_description: $('#serv_description').val(),
            
        };

        if (data.serv_name == '') {
            Swal.fire('Something went wrong', 'Service name must not be empty', 'error');
            return;
        }
        if (data.serv_price == '') {
            Swal.fire('Something went wrong', 'Price rate must not be empty', 'error');
            return;
        }
        if (data.serv_description == '') {
            Swal.fire('Something went wrong', 'Description must not be empty', 'error');
            return;
        }
    

        addService(data);  
    });

    $(document).on('click', '#AddProduct', function () {
        var data = {
            prod_name : $('#prod_name').val(),
            prod_price: $('#prod_price').val(),
            // serv_image : $('#serv_image').val(),         
        };
        if (data.prod_name == '') {
            Swal.fire('Something went wrong', 'Product name must not be empty', 'error');
            return;
        }
        if (data.prod_price == '') {
            Swal.fire('Something went wrong', 'Product price must not be empty', 'error');
            return;
        }
        
        addProduct(data);  
    });

    $(document).ready(function() {
        loadService();
        $('#editService').on('show.bs.modal', function (e) {
            var data = $(e.relatedTarget).attr('data-info');

            $("#eserv_id").val(data);
            $("#eserv_name").val($('#stitle' + data).html());
            $("#eserv_description").val($('#sdesc'+ data).html());
            $("#eserv_price").val($('#sprice' + data).html());
            // $("#eserv_image").val($('#tnumber_' + data).html());
            $('#UpdateService').html('Update');
        });
    });

    $(document).ready(function() {
        loadProduct();
        $('#editProduct').on('show.bs.modal', function (e) {
            var data = $(e.relatedTarget).attr('data-info');

            $("#eprod_id").val(data);
            $("#eprod_name").val($('#ptitle' + data).html());
            $("#eprod_price").val($('#pprice' + data).html());
            // $("#eprod_image").val($('#tnumber_' + data).html());
            $('#UpdateProduct').html('Update');
        });
    });

    $(document).on('click', '#UpdateService', function () {
        var payload = {
            serviceId: $('#eserv_id').val(),
            serviceName: $('#eserv_name').val(),
            servicePrice: $('#eserv_price').val(),
            // serviceImage : $('#eserv_image').val(),
            serviceDescription: $('#eserv_description').val(),
        };
        if (payload.serviceName == '') {
            Swal.fire('Something went wrong', 'Service name must not be empty', 'error');
            return;
        }
        if (payload.servicePrice == '') {
            Swal.fire('Something went wrong', 'Price rate must not be empty', 'error');
            return;
        }
        if (payload.serviceDescription == '') {
            Swal.fire('Something went wrong', 'Description must not be empty', 'error');
            return;
        }
            Swal.fire({
                title: 'Are you sure you want to update this service?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateService(payload);        
                }
            });
     
    });

    $(document).on('click', '#UpdateProduct', function () {
        var payload = {
            pId: $('#eprod_id').val(),
            pName: $('#eprod_name').val(),
            pPrice: $('#eprod_price').val(),
            // pImage : $('#eprod_image').val(),
        };
        if (payload.pName == '') {
            Swal.fire('Something went wrong', 'Product name must not be empty', 'error');
            return;
        }
        if (payload.pPrice == '') {
            Swal.fire('Something went wrong', 'Product price must not be empty', 'error');
            return;
        }
    
            Swal.fire({
                title: 'Are you sure you want to update this product?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateProduct(payload);        
                }
            });
     
    });

    $(document).on('click','#DeleteService',function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this service?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteService({
                    serviceId: $("#eserv_id").val()
                });
            }
        });
    });

    $(document).on('click','#DeleteProduct',function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this product?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteProduct({
                    pId: $("#eprod_id").val()
                });
            }
        });
    });
    

    function loadService()
    {
        ajaxRequest(null,
            {
            url: get_service_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.count != 0) {
                    generateTemplateService("#service-list-data", response_data.content);
                }
            }
        });
    }

    function loadProduct()
    {
        ajaxRequest(null,
            {
            url: get_product_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content.count != 0) {
                    generateTemplateProduct("#product-list-data", response_data.content);
                }
            }
        });
    }


    function addService(data)
    {
        ajaxRequest(data,
            {
            url: create_service_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                loadService();
                $('.modal').modal('hide');
                Swal.fire('Service successfully added!', '', 'success')
                .then(function (result) {
                    $('#serv_name').val("");
                    $('#serv_price').val("");
                    $('#serv_description').val("");
                    // $('#serv_image').val("");     
                });

            } else {
                Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
            }
        });
    }

    function addProduct(data)
    {
        ajaxRequest(data,
            {
            url: create_product_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                loadProduct();
                $('.modal').modal('hide');
                Swal.fire('Product successfully added!', '', 'success')
                .then(function (result) {  
                    $('#prod_name').val("");
                    $('#prod_price').val("");
                    // $('#serv_image').val("");      
                });

            } else {
                Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
            }
        });
    }

    function updateService(data)
    {
        ajaxRequest(data,
            {
                url: update_service_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                loadService();
                $(".modal").modal('hide'),
                Swal.fire('Service successfully updated!', '', 'success');
                $('#eserv_id').val(),
                $('#eserv_name').val(),
                $('#eserv_price').val(),
                // $('#eserv_image').val(),
                $('#eserv_description').val();
            } else {
                Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
            }
        });
    }

    function deleteService(data)
    {
        ajaxRequest(data,
            {
            url: delete_service,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                loadService();
                $(".modal").modal('hide'),
                Swal.fire('Service successfully deleted!', '', 'success')
                .then(function (result) {
                    $('#eserv_id').val(),
                    $('#eserv_name').val(),
                    $('#eserv_price').val(),
                    // $('#eserv_image').val(),
                    $('#eserv_description').val();
                });
            } else {
                Swal.fire('Cannot delete the item.','Please check the data!', 'error');
            }
        });
    }

    function updateProduct(data)
    {
        ajaxRequest(data,
            {
                url: update_product_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                loadProduct();
                $(".modal").modal('hide'),
                Swal.fire('Product successfully updated!', '', 'success');
                $('#eprod_id').val(),
                $('#eprod_name').val(),
                // $('#eprod_image').val(),
                $('#eprod_price').val();
                
            } else {
                Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
            }
        });
    }

    function deleteProduct(data)
    {
        ajaxRequest(data,
            {
            url: delete_product,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                loadProduct();
                $(".modal").modal('hide'),
                Swal.fire('Product successfully deleted!', '', 'success')
                .then(function (result) {
                    $('#eprod_id').val(),
                    $('#eprod_name').val(),
                    // $('#eprod_image').val(),
                    $('#eprod_price').val();
                });
            } else {
                Swal.fire('Cannot delete the item.','Please check the data!', 'error');
            }
        });
    }

    $(document).on('click','#resetService',function (){
        $('#serv_name').val("");
        $('#serv_price').val("");
        $('#serv_image').val("");
        $('#serv_description').val("");
    });

    $(document).on('click','#resetProduct',function (){
        $('#prod_name').val("");
        $('#prod_price').val("");
        $('#prod_image').val("");
    });

})();