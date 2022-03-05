(function () {

    $(document).ready(function () {
        loadService();
        loadProduct();

        //use to hide & unhide content
        document.getElementById("serv-trig2").style.display = "none";
        document.getElementById("services_section").style.display = "none";

        function handleImage1(e) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var img = new Image();
                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        }

        function handleImage2(e) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var img = new Image();
                img.onload = function () {
                    canvas2.width = img.width;
                    canvas2.height = img.height;
                    ctx2.drawImage(img, 0, 0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        }

        var imageLoader = document.getElementById('serv_image');
        imageLoader.addEventListener('change', handleImage1, false);
        var canvas = document.getElementById('serv_image_canvas');
        var ctx = canvas.getContext('2d');

        $(document).on('click', '#symbol-m2', function () {
            $('#serv_symbol').val("Square Meter (m2)");
            stat = $("#serv_symbol").val();

            if (stat == "Square Meter (m2)") {
                var set = "m2";
                $('#add-symbol-service').val(set);
            }
        });

        $(document).on('click', '#symbol-pu', function () {
            $('#serv_symbol').val("Unit (pu)");
            stat = $("#serv_symbol").val();

            if (stat == "Unit (pu)") {
                var set = "pu";
                $('#add-symbol-service').val(set);
            }
        });

        $(document).on('click', '#AddService', function (e) {

            var data = {
                serv_name: $('#serv_name').val(),
                serv_price: $('#serv_price').val(),
                serv_description: $('#serv_description').val(),
                serv_image: document.getElementById('serv_image_canvas').toDataURL(),
                serv_symbol: $('#add-symbol-service').val()
            };

            if (data.serv_name == '') {
                // Swal.fire('Something went wrong', 'Service name must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Service name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.serv_price == '') {
                // Swal.fire('Something went wrong', 'Price rate must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Price rate must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.serv_image == '') {
                // Swal.fire('Something went wrong', 'Upload image must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Upload image must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.serv_description == '') {
                // Swal.fire('Something went wrong', 'Description must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Description must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.serv_symbol == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Please select at least 1 symbol.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            // validateImageServices();
            addService(data);

        });

        var imageLoader2 = document.getElementById('prod_image');
        imageLoader2.addEventListener('change', handleImage2, false);
        var canvas2 = document.getElementById('prod_image_canvas');
        var ctx2 = canvas2.getContext('2d');


        $(document).on('click', '#AddProduct', function () {
            var data = {
                prod_name: $('#prod_name').val(),
                prod_price: $('#prod_price').val(),
                prod_quantity: $('#prod_quantity').val(),
                prod_image: document.getElementById('prod_image_canvas').toDataURL()
            };
            if (data.prod_name == '') {
                // Swal.fire('Something went wrong', 'Product name must not be empty', 'error');
                Swal.fire({
                    title: 'Product name is required!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.prod_price == '') {
                Swal.fire({
                    title: 'Product price is required!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.prod_quantity == '') {
                Swal.fire({
                    title: 'Quantity is required!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.prod_image == '') {
                Swal.fire({
                    title: 'Upload image is required!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            addProduct(data);
        });


        $('#editService').on('show.bs.modal', function (e) {
            getServiceDetail({
                service_id: $(e.relatedTarget).attr("data-info")
            });

            var data = $(e.relatedTarget).attr('data-info');
            $("#eserv_status").val($('#sstatus' + data).html());
            $("#eserv_symbol").val($('#ssymbol' + data).html());
            $('#upd-symbol-service').val($('#ssymbol' + data).html());
            if ($('#sstatus' + data).html() == "Not Available") {
                $('#upd-stat-service').val("1");
            }
            if ($('#sstatus' + data).html() == "Available") {
                $('#upd-stat-service').val("0");
            }

        });

        function getServiceDetail(data) {

            ajaxRequest(data,
                {
                    url: service_detail,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
                        if (response_data.content.length > 0) {
                            generateModalService("#view-service-detail", response_data.content);
                        }
                    }
                });
        }


        $(document).ready(function () {
            loadProduct();
            $('#editProduct').on('show.bs.modal', function (e) {
                var data = $(e.relatedTarget).attr('data-info');

                $("#eprod_id").val(data);
                $("#eprod_name").val($('#ptitle' + data).html());
                $("#eprod_price").val($('#pprice' + data).html());
                $("#eprod_quantity").val($('#pquant' + data).html());
                $("#eprod_status").val($('#pstatus' + data).html());
                $('#UpdateProduct').html('Update');
            });
        });


        // UPDATE SECTION
        $(document).on('click', '#upd-symbol-m2', function () {
            $('#eserv_symbol').val("m2");
            var symbol = $("#eserv_symbol").val();

            if (symbol == "m2") {
                var set = "m2";
                $('#upd-symbol-service').val(set);
            }
        });

        $(document).on('click', '#upd-symbol-pu', function () {
            $('#eserv_symbol').val("pu");
            var symbol = $("#eserv_symbol").val();

            if (symbol == "pu") {
                var set = "pu";
                $('#upd-symbol-service').val(set);
            }
        });

        $(document).on('click', '#available', function () {
            // $('#eprod_status').val("Available");
            $('#eserv_status').val("Available");
            // stat = $("#eprod_status").val();
            stat = $("#eserv_status").val();

            if (stat == "Available") {
                var set = 0;
                // $('#upd-stat').val(set);
                $('#upd-stat-service').val(set);
            }
        });

        $(document).on('click', '#not-available', function () {
            // $('#eprod_status').val("Not Available");
            $('#eserv_status').val("Not Available");
            // stat = $("#eprod_status").val();
            stat = $("#eserv_status").val();

            if (stat == "Not Available") {
                var set = 1;
                // $('#upd-stat').val(set);
                $('#upd-stat-service').val(set);
            }
        });

        $(document).on('click', '#UpdateService', function () {
            var payload = {
                serviceId: $('#eserv_id').val(),
                serviceName: $('#eserv_name').val(),
                servicePrice: $('#eserv_price').val(),
                serviceStatus: $('#upd-stat-service').val(),
                serviceDescription: $('#eserv_description').val(),
                serviceSymbol: $('#upd-symbol-service').val()
            };

            if (payload.serviceName == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Service name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.servicePrice == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Price rate must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.serviceDescription == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Description must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
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
                pQuant: $('#eprod_quantity').val(),
            };
            if (payload.pName == '') {
                Swal.fire({
                    title: 'Product name must not be empty!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.pPrice == '') {
                Swal.fire({
                    title: 'Product price must not be empty!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (payload.pQuant == '') {
                Swal.fire({
                    title: 'Quantity must not be empty!',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
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

    });

    $(document).on('click', '#DeleteService', function (e) {
        Swal.fire({
            title: 'Are you sure you want to remove this service?',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: '#2691d9',
            icon: "question",
        }).then(function (result) {
            if (result.isConfirmed) {
                // deleteService({
                //     serviceId: $("#eserv_id").val()
                // });
                $('#editService').modal('hide');
                $('#confirm-pass-admin').val("");
                $('#confirm-admin-modal').modal('show');
                var servId = $("#eserv_id").val();
                confirmAdmin(servId);
            }
        });
    });

    $(document).on('click', '#DeleteProduct', function (e) {
        Swal.fire({
            title: 'Are you sure you want to remove this product?',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: '#2691d9',
            icon: "question",
        }).then(function (result) {
            if (result.isConfirmed) {
                // deleteProduct({
                //     pId: $("#eprod_id").val()
                // });
                $('#editProduct').modal('hide');
                $('#confirm-pass-admin').val("");
                $('#confirm-admin-modal').modal('show');
                var prodId = $("#eprod_id").val();
                confirmAdmin2(prodId);
            }
        });
    });


    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms (5 seconds)

    //on keyup, start the countdown
    $(document).on('keyup', '#search_s', function () {
        $('#search_s').keyup(function () {
            clearTimeout(typingTimer);
            if ($('#search_s').val()) {
                typingTimer = setTimeout(doneTyping1, doneTypingInterval);
            } else {
                loadService();
            }
        });
    });


    $(document).on('keyup', '#search_p', function () {
        $('#search_p').keyup(function () {
            clearTimeout(typingTimer);
            if ($('#search_p').val()) {
                typingTimer = setTimeout(doneTyping2, doneTypingInterval);
            } else {
                loadProduct();
            }
        });
    });


    //user is "finished typing," do something
    function doneTyping1() {
        loadService();
    }
    function doneTyping2() {
        loadProduct();
    }

    function loadService() {
        generateEmptyTableTemplate('#service-list-data');
        ajaxRequest(null,
            {
                url: get_service_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
                data: {
                    search: $("#search_s").val()
                }
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content != null) {
                        if (response_data.content.services.length > 0) {

                            // generateTemplateService('#service-list-data', response_data.content.services);
                            $('#service-list-data-paginate').pagination({
                                dataSource: response_data.content.services,
                                callback: function (data, pagination) {
                                    // generateTemplateEmployee("#employee-list-data", data);
                                    generateTemplateService('#service-list-data', data);
                                }
                            });

                        }
                    }
                }
            });
    }

    function loadProduct() {
        generateEmptyTableTemplate('#product-list-data');
        ajaxRequest(null,
            {
                url: get_product_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
                data: {
                    search: $("#search_p").val()
                }
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content != null) {
                        if (response_data.content.products.length > 0) {
                            // generateTemplateProduct('#product-list-data', response_data.content.products);

                            // generateTemplateService('#service-list-data', response_data.content.services);
                            $('#product-list-data-paginate').pagination({
                                dataSource: response_data.content.products,
                                callback: function (data, pagination) {
                                    // generateTemplateEmployee("#employee-list-data", data);
                                    generateTemplateProduct('#product-list-data', data);
                                }
                            });

                        }
                    }
                }
            });
    }


    function addService(data) {
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
                    Swal.fire({
                        title: 'Service successfully added!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                        .then(function (result) {
                            $('#serv_name').val("");
                            $('#serv_price').val("");
                            $('#serv_description').val("");
                            $('#serv_image').val("");
                        });

                } else {
                    // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Please try again',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
    }

    function addProduct(data) {
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
                    // Swal.fire('Product successfully added!', '', 'success')
                    Swal.fire({
                        title: 'Product successfully added!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                        .then(function (result) {
                            $('#prod_name').val("");
                            $('#prod_price').val("");
                            $('#prod_image').val("");
                            $('#prod_quantity').val("");
                        });

                } else {
                    // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Please try again',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
    }

    function updateService(data) {
        ajaxRequest(data,
            {
                url: update_service_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadService();
                    $(".modal").modal('hide');
                    // Swal.fire('Service successfully updated!', '', 'success');
                    Swal.fire({
                        title: 'Service successfully updated!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('#eserv_id').val();
                            $('#eserv_name').val();
                            $('#eserv_price').val();
                            // $('#eserv_image').val();
                            $('#eserv_description').val();
                            window.location.reload(true);
                        }
                    });
                } else {
                    // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Please try again',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
    }

    function confirmAdmin(servId) {
        $(document).on("click", "#confirm-pass-submit", function (e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var serv_payload = {
                serviceId: servId
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
                        deleteService(serv_payload)
                    } else {
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

    function deleteService(serv_payload) {

        ajaxRequest(serv_payload,
            {
                url: delete_service,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadService();
                    $(".modal").modal('hide');
                    Swal.fire({
                        title: 'Removed!',
                        text: 'Service has been removed.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('#eserv_id').val();
                            $('#eserv_name').val();
                            $('#eserv_price').val();
                            // $('#eserv_image').val();
                            $('#eserv_description').val();
                            window.location.reload(true);
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Cannot remove the service. Unable to complete process.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });

    }

    function updateProduct(data) {
        ajaxRequest(data,
            {
                url: update_product_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadProduct();
                    $(".modal").modal('hide');
                    Swal.fire({
                        title: 'Product successfully updated!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $(".modal").modal('hide');
                            $('#eprod_id').val();
                            $('#eprod_name').val();
                            $('#eprod_quantity').val();
                            $('#eprod_price').val();
                            window.location.reload(true);
                        }
                    });
                } else {
                    // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Please try again',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
    }

    function confirmAdmin2(prodId) {
        $(document).on("click", "#confirm-pass-submit", function (e) {
            var checkAdmin = {
                check_pass: $('#confirm-pass-admin').val()
            };
            var prod_payload = {
                pId: prodId
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
                        deleteProduct(prod_payload)
                    } else {
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

    function deleteProduct(prod_payload) {

        ajaxRequest(prod_payload,
            {
                url: delete_product,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    // loadProduct();
                    $(".modal").modal('hide');
                    Swal.fire({
                        title: 'Removed!',
                        text: 'Product has been removed.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            $('#eprod_id').val();
                            $('#eprod_name').val();
                            // $('#eprod_image').val();
                            $('#eprod_price').val();
                            window.location.reload(true);
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Cannot remove the product. Unable to complete process.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });


    }

    $(document).on('click', '#resetService', function () {
        $('#serv_name').val("");
        $('#serv_price').val("");
        $('#serv_image').val("");
        $('#serv_description').val("");
    });

    $(document).on('click', '#resetProduct', function () {
        $('#prod_name').val("");
        $('#prod_price').val("");
        $('#prod_image').val("");
        $('#prod_quantity').val("");
    });

    $(document).on('click', '#serv-trig', function () {
        document.getElementById("serv-trig2").style.display = "block";
        document.getElementById("services_section").style.display = "block";

        document.getElementById("prod-trig2").style.display = "none";
        document.getElementById("products_section").style.display = "none";

        document.getElementById("prod-trig").classList.remove("btn-primary");
        document.getElementById("prod-trig").classList.add("btn-outline-primary");
        document.getElementById("serv-trig").classList.remove("btn-outline-primary");
        document.getElementById("serv-trig").classList.add("btn-primary");
    });

    $(document).on('click', '#prod-trig', function () {
        document.getElementById("prod-trig2").style.display = "block";
        document.getElementById("products_section").style.display = "block";

        document.getElementById("serv-trig2").style.display = "none";
        document.getElementById("services_section").style.display = "none";

        document.getElementById("serv-trig").classList.remove("btn-primary");
        document.getElementById("serv-trig").classList.add("btn-outline-primary");
        document.getElementById("prod-trig").classList.remove("btn-outline-primary");
        document.getElementById("prod-trig").classList.add("btn-primary");
    });


})();