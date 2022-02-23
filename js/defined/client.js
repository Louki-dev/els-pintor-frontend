(function () {
    function ajaxRequest (payload = null, options = null, callback, errocallback = null)
    {
        try {
            var defaults = {
                type: "POST",
                cache: false,
                async: true,
                processData: true,
            }

            var object = {
                data: payload,
                dataType:"json",
                success: function (response) {
                    if (response.error != null) {
                        if (response.error.error == "401! Unauthorized Access.") {
                            window.location.replace("/");//("/")
                        }
                    }

                    callback(response);
                },

                error: function (response) { 
                    if (errocallback) {
                        errocallback(response);
                    }
                }
            };

            var ajaxRequest = Object.assign({}, object, defaults, options);
            
            return $.ajax(ajaxRequest);

        } catch (e) {
            alert(e);
        }

        return true;
    }
    $(document).ready(function (e) {
        loadServices();
        loadProducts();
    });

    $(document).ready(function (e) {
        // $('#flexCheckDefault').click(function () {
        //     //check if checkbox is checked
        //     if ($(this).is(':checked')) {
    
        //         $('#csubmit').removeAttr('disabled'); //enable input
    
        //     } else {
        //         $('#csubmit').attr('disabled', true); //disable input
        //     }
        // });
        $(document).on("click", "#csubmit", function (e) { 
            const ul = document.getElementById('todo_list');
            const listItems = ul.getElementsByClassName('final-list');
            const subtotal = document.getElementById('subtotals');
                
            // Loop through the NodeList object.
            for (let i = 0; i <= listItems.length - 1; i++) {
                console.log(listItems[i]);
                let textarea = document.getElementById("cinq");
                textarea.value += listItems[i].value;
            }
            let textarea2 = document.getElementById("cinq");
            textarea2.value += 'Subtotal:  '+ subtotal.textContent;
            
            var data = {
                customer_first_name : $('#cfname').val(),
                customer_last_name : $('#clname').val(),
                customer_mobile_number : $('#cnumber').val(),
                customer_email : $('#cemail').val(),
                customer_address : $('#caddress').val(),
                customer_inquiry_details : $('#cinq').val()
            };
            var int_number = data.customer_mobile_number;
            var int_length = ('' + int_number).length;

            if (data.customer_first_name == '') {
                Swal.fire({
                    title: 'First name is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }
            if (data.customer_last_name == '') {
                Swal.fire({
                    title: 'Last name is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }
            
            if (data.customer_mobile_number == '') {
                Swal.fire({
                    title: 'Mobile number is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }

            if (int_length != 11) {
                Swal.fire({
                    title: 'Mobile number must have 11 digits!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }

            if (data.customer_email == '') {
                Swal.fire({
                    title: 'Email is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }

            if (data.customer_address == '') {
                Swal.fire({
                    title: 'Address is required!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }

            if (data.customer_inquiry_details == '') {
                Swal.fire({
                    title: 'Warning!',
                    text: 'Please select at least 1 item.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                $('#cinq').val("");
                return;
            }
            ValidateEmail(data);
        });
    });

        function createInquiry(data)
        {
            ajaxRequest(data,
                {
                    url: create_inquiry_api,
                    type: "POST",
                    dataType: "json",
                },
            function (response_data) {
                if (response_data.status == true) {
                    $('.modal').modal('hide');
                    Swal.fire({
                        title: 'Inquiry sent!',
                        text: 'We will contact you as soon as possible. Thank you',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                    
                    // $('#cfname').val(''),
                    // $('#clname').val(''),
                    // $('#cemail').val(''),
                    // $('#caddress').val(''),
                    // $('#cnumber').val(''),
                    $('#cinq').val('')
                    // let inputs = document.getElementById('flexCheckDefault');
                    // inputs.checked = false;
                    // $('#csubmit').attr('disabled', true);
                } else {
                    Swal.fire({
                        title: response_data.error,
                        text: '',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    // let inputs = document.getElementById('flexCheckDefault');
                    // inputs.checked = false;
                    // $('#csubmit').attr('disabled', true);
                }
            });
        }

        function ValidateEmail(data) 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cemail.value))
            {
                Swal.fire({
                    title: 'Are you sure you want to submit inquiry?',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, submit',
                    confirmButtonColor: '#2691d9',
                    cancelButtonText: 'Add another Item',
                    icon: 'question',
                }).then(function (result) {
                    if (result.isConfirmed) {  
                        createInquiry(data);    
                    }
                    else {
                        $('#inq-modal').modal('hide');
                        // let inputs = document.getElementById('flexCheckDefault');
                        // inputs.checked = false;
                        $('#cinq').val("");
                    }
                });
                
                return;
            }
                Swal.fire({
                    title: 'You have entered invalid email!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                // let inputs = document.getElementById('flexCheckDefault');
                // inputs.checked = false;
                // $('#csubmit').attr('disabled', true);
                return;
        }

    $(document).ready(function(){
        var menuBtn = document.querySelector('#menu-btn');


        var navbar = document.querySelector('.navbar');

        // var colorsPalette = document.querySelector('.colors-palette');
    
        menuBtn.onclick = function () {
        navbar.classList.toggle('active');
        }
        
        window.onscroll = function (){
        navbar.classList.remove('active');

        }

        NumberComms = new Intl.NumberFormat('en-US')

    })

    function loadServices()
    {
        ajaxRequest(null,
            {
            url: get_services,
            type: "GET",
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        // generateServices('#services-list', response_data.content);
                        $('#serv_paginate').pagination({
                            dataSource: response_data.content,
                            callback: function(data, pagination) {
                                generateServices('#services-list', data);
                            }
                        })
                    }
                }
            }
        });
    }

    function loadProducts()
    {
        ajaxRequest(null,
            {
            url: get_products,
            type: "GET",
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.length > 0) {
                        // generateProducts('#products-list', response_data.content);
                        $('#prod_paginate').pagination({
                            dataSource: response_data.content,
                            callback: function(data, pagination) {
                                generateProducts('#products-list', data);
                            }
                        })               
                    }
                }
            }
        });
    }


    function generateServices($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<form><input type="hidden" id="services-name' + $content[el].service_id + '" value="' + $content[el].service_title + '">',
                '<input type="hidden" id="services-price' + $content[el].service_id + '" value="' + $content[el].service_price + '">',
                '<div class="box">',
                    '<i class="fas fa-brush"></i>',
                    '<img id="simage'+$content[el].service_id+'" src="'+display_image+$content[el].service_image +'" alt="">',
                    '<h3 id="stitle'+$content[el].service_id+'" class="fw-bold fcapital">'+$content[el].service_title +'</h3>',
                    '<p id="sdesc'+$content[el].service_id+'" class="fw-light">'+ $content[el].service_description+'</p>',
                '<br>',
                '<h2 id="sprice' + $content[el].service_id + '" class="fs-4">Price rate: &#8369;' + NumberComms.format($content[el].service_price) + '.00</h2>',
                '<p id="sstatus'+$content[el].service_id+'" class="' + ($content[el].service_status == 1 ? "text-muted": "pending") + '">' + ($content[el].service_status == 1 ? "Unvailable": "Available") + '</p>',
                // '<button type="button" id="copyService' + $content[el].service_id + '"class="btn1 text-white mt-3 fs-4 p-2"><small class="ms-2">Add to Inquiry</small><div class="fas fa-paint-roller fs-5 ms-2 me-2"></div></button>',
                '<button type="button" id="copyService'+$content[el].service_id+'" class="btn1 text-white trans pt-1 fs-4 p-2 mt-3 ' + ($content[el].service_status == 1 ? "btn1-disabled": "") + '" ' + ($content[el].service_status == 1 ? "disabled": "") + '><small class="ms-2 me-2">Add</small></button>',
                '</div></form>'   
            ];
            $($elem).append($html.join(""));

            var servNo = $content[el].service_id;
            var servSymbol = $content[el].service_symbol;
            getservcopy(servNo, servSymbol);
            
        } 
    }

    function generateProducts($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<form><input type="hidden" id="products-copy' + $content[el].product_id + '" value="' + $content[el].product_name + '">',
                '<input type="hidden" id="products-price' + $content[el].product_id + '" value="' + $content[el].product_price +'">',
                '<div class="box shadow">',
                '<img id="pimage'+$content[el].product_id+'" src="'+display_image+$content[el].product_image +'" alt="">',
                '<div class="content container">',
                    '<h5 id="ptitle'+$content[el].product_id+'" class="fcapital w-75 text-center">'+$content[el].product_name +'</h5>',
                '<p id="'+$content[el].product_id+'" class="' + ($content[el].product_status == 1 ? "turndown": "pending") + '">' + ($content[el].product_status == 1 ? "Out of Stock": "Available") + '</p>',
                '<span id="pprice' + $content[el].product_id + '">&#8369;' + NumberComms.format($content[el].product_price) + '.00</span>',
                '<p class="opacity-75 mt-3 ' + ($content[el].product_status == 1 ? "hid": "") + '"><input type="number" class="form-control" id="productPieces' + $content[el].product_id + '" placeholder="Quantity" value=""></p>',
                '<button type="button" id="copyProduct' + $content[el].product_id + '" class="btn1 pending_header btn_product text-white pt-1 mt-3 fs-5 ' + ($content[el].product_status == 1 ? "hid": "") + '" style="padding-bottom: 7px;" ' + ($content[el].product_status == 1 ? "disabled": "") + '>Add</button>',
                '</div>',
                '</div></form>'  
            ];
            $($elem).append($html.join(""));

            var prodNo = $content[el].product_id;
            getprodcopy(prodNo);

        } 
    }

    function generateCalM2Service($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<div class="mb-3">',
                    '<div class="row">',
                        '<div class="col">',
                        '<label for="exampleFormControlInput1" class="form-label fw-bold opacity-75">Width</label>',
                        '<input type="text" class="form-control form-control-lg" id="w-width'+$content+'">',
                        '</div>',

                        '<div class="col">',
                        '<label for="exampleFormControlInput1" class="form-label fw-bold opacity-75">Height</label>',
                        '<input type="text" class="form-control form-control-lg" id="h-height'+$content+'">',
                        '</div>',
                    '</div>',
                    '<button type="button" class="btn btn-outline-primary mt-3 mb-3 form-control btn-lg" id="cal-sqrMeter' + $content + '">Calculate</button>',
                '</div>',

                    '<span class="fw-bold opacity-75 mt-1">Total Cost:</span><br>',
                    '<input type="text" id="total-squareMeter'+$content+'" value="0" hidden>',
                    '<span class="text-muted float-end fs-3">&#8369;<span id="squareMeter'+$content+'">0.00</span></span>',

                '<hr class="mt-5 mb-4"></hr>',
                // '<div class="d-flex flex-nowrap mb-3 mt-4 gap-2 container pe-3">',
                // '<input type="button" value="Cancel" data-bs-dismiss="modal" id="cancel_sqrMeter' + $content + '" class="btn btn-outline-secondary col-6 btn-lg">',
                '<button type="button" class="btn btn-outline-primary col-6 btn-lg form-control mb-3" id="add_sqrMeter'+$content+'">Add to Cart</button>',
                // '</div>',
            ];
            $($elem).append($html.join(""));

        } 
    }

    function generateCalPuService($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<div class="mb-3">',
                    '<div class="row">',
                        '<div class="col">',
                        '<label for="exampleFormControlInput1" class="form-label fw-bold opacity-75">Units</label>',
                        '<input type="text" class="form-control form-control-lg" id="unit-'+$content+'">',
                        '</div>',
                    '</div>',
                    '<button type="button" class="btn btn-outline-primary mt-3 mb-3 form-control btn-lg" id="cal-unit' + $content + '">Calculate</button>',
                '</div>',

                    '<span class="fw-bold opacity-75 mt-1">Total Cost:</span><br>',
                    '<input type="text" id="total-unit'+$content+'" value="0" hidden>',
                    '<span class="text-muted float-end fs-3">&#8369;<span id="unit'+$content+'">0.00</span></span>',

                '<hr class="mt-5 mb-4"></hr>',
                // '<div class="d-flex flex-nowrap mb-3 mt-4 gap-2 container pe-3">',
                // '<input type="button" value="Cancel" data-bs-dismiss="modal" id="cancel_unit' + $content + '" class="btn btn-outline-secondary col-6 btn-lg">',
                '<button type="button" class="btn btn-outline-primary col-6 btn-lg form-control mb-3" id="add_unit'+$content+'">Add to Cart</button>',
                // '</div>',
            ];
            $($elem).append($html.join(""));

        } 
    }

    $(document).ready(function () {
        // const tx = document.getElementsByTagName("textarea");
        const tx = document.getElementsByClassName("_txtarea");
        for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
        }
    
        function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        }
    });


    function getprodcopy(prodNo)
    {
        $(document).on('click', '#copyProduct' + prodNo, function (e) {
            const check_product_item = document.getElementById('product-list-main' + prodNo);
            const pieces = document.getElementById('productPieces' + prodNo).value;
            const price = document.getElementById('products-price' + prodNo).value;
            var product_item_calculate = pieces * price;

            if (check_product_item == undefined) {

                if (pieces == false) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'You have to add at least 1 item.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    $('#productPieces' + prodNo).val("");
                    return;
                }
                if (pieces < 0) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'You have to add at least 1 item.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    $('#productPieces' + prodNo).val("");
                    return;
                }

                copyProduct(prodNo, product_item_calculate, pieces);
                $('#productPieces' + prodNo).val("");
                calculate2(product_item_calculate);
                return;
            } else {
                if (pieces == false) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'You have to add at least 1 item.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    $('#productPieces' + prodNo).val("");
                    return;
                }
                if (pieces < 0) {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'You have to enter at least 1 item.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    $('#productPieces' + prodNo).val("");
                    return;
                }
                Swal.fire({
                    title: 'Error!',
                    text: 'This item is already added!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    Swal.fire({
                        title: 'Would you like to replace the existing item? ',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, replace it',
                        confirmButtonColor: '#2691d9',
                        cancelButtonText: 'No, thanks',
                        icon: 'question',
                    }).then(function (result) {
                        if (result.isConfirmed) {  
                            calculateRemove2(prodNo);
                            const item = document.getElementById('product-list-main'+prodNo);
                            item.remove();
                            copyProduct(prodNo, product_item_calculate, pieces);
                            calculate2(product_item_calculate);
                            $('#productPieces' + prodNo).val("");
                        } else {
                            $('#productPieces' + prodNo).val("");
                        }
                    });
                });
            }
            
        });

        $(document).on('click', '#product-remove-list' + prodNo + '', function (e) {   
            calculateRemove2(prodNo);

            const item = document.getElementById('product-list-main'+prodNo);
            item.remove();
        });
        
    }
    
    function getservcopy(servNo,servSymbol)
    {

        $(document).on('click', '#copyService' + servNo + '', function (e) {
            const check_service_item = document.getElementById('service-list-main' + servNo);
            const serviceprice = parseInt(document.getElementById('services-price' + servNo).value); 

            if (check_service_item == undefined) {
                    $('#inq-'+servSymbol+'').modal('show');
                    generateCalM2Service('#cal-sqrMeter-buttons', servNo);
                    
                    $(document).on('click', '#cal-sqrMeter'+servNo, function (e) {      
                        const width = document.getElementById('w-width'+servNo).value;
                        const height = document.getElementById('h-height'+servNo).value;
                        var calculate = serviceprice * (width * height);
                        document.getElementById("squareMeter"+servNo).innerHTML = NumberComms.format(calculate) + ".00";
                        document.getElementById("total-squareMeter"+servNo).value = calculate;
                        return;
                    });
            
                    
                    generateCalPuService('#cal-unit-buttons', servNo);

                    $(document).on('click', '#cal-unit'+servNo, function (e) {      
                        const unit = document.getElementById('unit-'+servNo).value;
                        var calculate = serviceprice * unit;
                        document.getElementById("unit"+servNo).innerHTML = NumberComms.format(calculate) + ".00";
                        document.getElementById("total-unit"+servNo).value = calculate;
                        return;
                    });

            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'This service is already added!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                }).then(function (result) {
                    Swal.fire({
                        title: 'Would you like to replace the same item?',
                        text: 'This will remove the existing item.',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, I insist',
                        confirmButtonColor: '#2691d9',
                        cancelButtonText: 'No, thanks',
                        icon: 'question',
                    }).then(function (result) {
                        if (result.isConfirmed) {  
                            calculateRemove(servNo);
                            const item = document.getElementById('service-list-main'+servNo);
                            item.remove();
                            
                        } else {
                            $('#w-width'+servNo).val("");
                            $('#h-height' + servNo).val("");  
                            $('#unit-' + servNo).val("");    
                            $('#total-squareMeter'+servNo).val("");    
                            $('#total-unit'+servNo).val("");    
                            document.getElementById("squareMeter" + servNo).innerHTML = "0.00";
                            document.getElementById("unit" + servNo).innerHTML = "0.00";
                            $('#inq-'+servSymbol+'').modal('hide');
                        }
                    });
                });
            }
             
        });

        $(document).on('click', '#add_sqrMeter' + servNo, function (e) { 
            const price = parseInt(document.getElementById('total-squareMeter' + servNo).value);
            const width = document.getElementById('w-width' + servNo).value;
            const height = document.getElementById('h-height' + servNo).value;
            const unit = document.getElementById('unit-' + servNo).value;

            if (price == 0) {
                Swal.fire({
                    title: 'Warning!',
                    text: 'You have to make a calculation first before adding.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            copyService(servNo, price, width, height, unit);
            calculate(price);
            $('#inq-' + servSymbol + '').modal('hide');
            $('#w-width'+servNo).val("");
            $('#h-height' + servNo).val("");  
            $('#total-squareMeter'+servNo).val("");    
            document.getElementById("squareMeter" + servNo).innerHTML = "0.00";
            return;
        }); 

        $(document).on('click', '#add_unit' + servNo, function (e) { 
            const price = parseInt(document.getElementById('total-unit' + servNo).value);
            const width = document.getElementById('w-width' + servNo).value;
            const height = document.getElementById('h-height' + servNo).value;
            const unit = document.getElementById('unit-' + servNo).value;

            if (price == 0) {
                Swal.fire({
                    title: 'Warning!',
                    text: 'You have to make a calculation first before adding.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            copyService(servNo, price, width, height, unit);
            calculate(price);
            $('#inq-' + servSymbol + '').modal('hide');
            $('#unit-' + servNo).val("");
            $('#total-unit'+servNo).val("");    
            document.getElementById("unit" + servNo).innerHTML = "0.00";
            return;
        }); 
        

        $(document).on('click', '#service-remove-list' + servNo + '', function (e) {      
            calculateRemove(servNo);
            
            const item = document.getElementById('service-list-main'+servNo);
            item.remove();
            
        });
        
    }

    function copyProduct(prodNo, product_item_calculate, pieces)
    {
        
        const productname = String(document.getElementById('products-copy' + prodNo).value);
        const productprice = product_item_calculate;
        var text = '--- PRODUCT ---' + '\r\n' +
            'Name: ' + productname + '\r\n' +
            'Quantity: ' + pieces + '\r\n' +
            'Value: ' + NumberComms.format(product_item_calculate) + '.00'+'\n\n';

        const product_ul = document.querySelector(".list-group"); //ul 

        const product_main = document.createElement("div"); //a
        product_main.classList.add("list-group-item");
        product_main.classList.add("list-group-item-action");
        product_main.id = "product-list-main"+prodNo;
        product_ul.appendChild(product_main);

        const product_header = document.createElement("div");
        product_header.classList.add("d-flex");
        product_header.classList.add("w-100");
        product_header.classList.add("justify-content-between");
        product_main.appendChild(product_header);

        const product_h6 = document.createElement("h6");
        product_h6.innerText = productname;
        product_h6.classList.add("mb-1");
        product_header.appendChild(product_h6);

        const product_span = document.createElement("span");
        product_span.innerHTML = '<i class="bi bi-x-circle"></i>';
        product_span.id = "product-remove-list"+prodNo;
        product_span.classList.add("cursor-pointer");
        product_span.classList.add("turndown");
        product_header.appendChild(product_span);

        const product_p = document.createElement("p");
        product_p.innerHTML = pieces+" pcs";
        product_p.classList.add("mb-1");
        product_main.appendChild(product_p);

        const product_header2 = document.createElement("div");
        product_header2.classList.add("d-flex");
        product_header2.classList.add("w-100");
        product_header2.classList.add("justify-content-between");
        product_main.appendChild(product_header2);

        const product_small = document.createElement("small");
        product_small.innerText = "Category: Products";
        product_small.classList.add("text-muted");
        product_header2.appendChild(product_small);

        const product_p2 = document.createElement("p");
        product_p2.innerHTML = "&#8369;" + NumberComms.format(productprice) + ".00";
        product_p2.value = productprice;
        product_p2.id = "productPrice" + prodNo;
        product_p2.classList.add("mb-1");
        product_header2.appendChild(product_p2);

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.classList.add("final-list");
        textarea.classList.add("hid");
        product_main.appendChild(textarea);


        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to Cart!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Go to Cart',
                confirmButtonColor: '#2691d9',
                cancelButtonText: 'Add another Item',
                showCancelButton: true,
            }).then(function (result) {
                // let textarea = document.getElementById("cinq");
                // textarea.value += text;
                if (result.isConfirmed) {  
                    $('#inq-modal').modal('show');
                }
            });
        })
        .catch(function () {
            Swal.fire({
                title: 'Oh no!',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        });
    }

    function copyService(servNo, price, width, height, unit)
    {
        const servicename = String(document.getElementById('services-name' + servNo).value);
        const serviceprice = price;
       

        const service_ul = document.querySelector(".list-group"); //ul 

        const service_main = document.createElement("div"); //a
        service_main.classList.add("list-group-item");
        service_main.classList.add("list-group-item-action");
        service_main.id = "service-list-main"+servNo;
        service_ul.appendChild(service_main);

        const service_header = document.createElement("div");
        service_header.classList.add("d-flex");
        service_header.classList.add("w-100");
        service_header.classList.add("justify-content-between");
        service_main.appendChild(service_header);

        const service_h6 = document.createElement("h6");
        service_h6.innerText = servicename;
        service_h6.classList.add("mb-1");
        service_header.appendChild(service_h6);

        const service_span = document.createElement("span");
        service_span.innerHTML = '<i class="bi bi-x-circle"></i>';
        service_span.id = "service-remove-list"+servNo;
        service_span.classList.add("cursor-pointer");
        service_span.classList.add("turndown");
        service_header.appendChild(service_span);

        if (width == "" && height == "") {
            const service_p3 = document.createElement("p");
            service_p3.innerHTML = "Units: "+unit;
            service_p3.classList.add("mb-1");
            service_main.appendChild(service_p3);

            var text = '--- SERVICE ---' + '\r\n' +
            'Name: ' + servicename + '\r\n' +
            'Units: ' + unit + '\r\n' +
            'Value: ' + NumberComms.format(price) + '.00'+'\n\n';
        }
        if (unit == "") {
            const service_p = document.createElement("p");
            service_p.innerHTML = "Width: "+width+"m , Height: "+height+"m";
            service_p.classList.add("mb-1");
            service_main.appendChild(service_p);

            var text = '--- SERVICE ---' + '\r\n' +
            'Name: ' + servicename + '\r\n' +
            'Width: ' + width + 'm , Height: '+height+'m' + '\r\n' +
            'Value: ' + NumberComms.format(price) + '.00'+'\n\n';
        }

        const service_header2 = document.createElement("div");
        service_header2.classList.add("d-flex");
        service_header2.classList.add("w-100");
        service_header2.classList.add("justify-content-between");
        service_main.appendChild(service_header2);

        const service_small = document.createElement("small");
        service_small.innerText = "Category: Services";
        service_small.classList.add("text-muted");
        service_header2.appendChild(service_small);

        const service_p2 = document.createElement("p");
        service_p2.innerHTML = "&#8369;" + NumberComms.format(serviceprice) + ".00";
        service_p2.value = serviceprice;
        service_p2.id = "servicePrice"+servNo;
        service_p2.classList.add("mb-1");
        service_header2.appendChild(service_p2);

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.classList.add("final-list");
        textarea.classList.add("hid");
        service_main.appendChild(textarea);

        
        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to Cart!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Go to Cart',
                confirmButtonColor: '#2691d9',
                cancelButtonText: 'Add another Item',
                showCancelButton: true,
            }).then(function (result) {
                if (result.isConfirmed) {  
                    $('#inq-modal').modal('show');
                    $('#w-width'+servNo).val("");
                    $('#h-height' + servNo).val("");   
                    $('#unit-' + servNo).val("");   
                    $('#total-squareMeter'+servNo).val("");    
                    $('#total-unit'+servNo).val("");    
                    document.getElementById("squareMeter" + servNo).innerHTML = "0.00";
                    document.getElementById("unit"+servNo).innerHTML = "0.00";
                    
                }
            });

        })
        .catch(function () {
            Swal.fire({
                title: 'Oh no!',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        });
    }
   
    function calculate(servPrice) {
        const substotal = parseInt($('#items-subtotal').val());
        const sprice = parseInt(servPrice);
        var total = 0;
        total = sprice + substotal;
        document.getElementById("items-subtotal").value = total;
        document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";

    }

    function calculate2(prodPrice) {
        const substotal = parseInt($('#items-subtotal').val());
        const pprice = parseInt(prodPrice);
        var total = 0;
        total = pprice + substotal;
        document.getElementById("items-subtotal").value = total;
        document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";

    }

    function calculateRemove(servNo) {
        const servPrice = parseInt(document.getElementById('servicePrice'+servNo).value);
        const substotal = parseInt($('#items-subtotal').val());
        var total = 0;
        total = substotal - servPrice;
        document.getElementById("items-subtotal").value = total;
        document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";

    }

    function calculateRemove2(prodNo) {
        const servPrice = parseInt(document.getElementById('productPrice'+prodNo).value);
        const substotal = parseInt($('#items-subtotal').val());
        var total = 0;
        total = substotal - servPrice;
        document.getElementById("items-subtotal").value = total;
        document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";

    }

})();