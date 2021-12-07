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
    $(document).ready(function(e){
        $('#flexCheckDefault').click(function () {
            //check if checkbox is checked
            if ($(this).is(':checked')) {
    
                $('#csubmit').removeAttr('disabled'); //enable input
    
            } else {
                $('#csubmit').attr('disabled', true); //disable input
            }
        });
        $(document).on("click", "#csubmit", function(e) { 
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
                return;
            }

            if (data.customer_inquiry_details == '') {
                Swal.fire({
                    title: 'Inquiry details must not be empty!',
                    text: '',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                    
                    $('#cfname').val(''),
                    $('#clname').val(''),
                    $('#cemail').val(''),
                    $('#caddress').val(''),
                    $('#cnumber').val(''),
                    $('#cinq').val('')
                    
                    let inputs = document.getElementById('flexCheckDefault');
                    inputs.checked = false;
                    $('#csubmit').attr('disabled', true);
                } else {
                    Swal.fire({
                        title: response_data.error,
                        text: '',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                    let inputs = document.getElementById('flexCheckDefault');
                    inputs.checked = false;
                    $('#csubmit').attr('disabled', true);
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
                        let inputs = document.getElementById('flexCheckDefault');
                        inputs.checked = false;
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
                let inputs = document.getElementById('flexCheckDefault');
                inputs.checked = false;
                $('#csubmit').attr('disabled', true);
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
                '<form><input type="hidden" id="services-copy'+$content[el].service_id+'" value="' +$content[el].service_title + '">',
                '<div class="box">',
                    '<i class="fas fa-brush"></i>',
                    '<img id="simage'+$content[el].service_id+'" src="'+display_image+$content[el].service_image +'" alt="">',
                    '<h3 id="stitle'+$content[el].service_id+'" class="fw-bold fcapital">'+$content[el].service_title +'</h3>',
                    '<p id="sdesc'+$content[el].service_id+'" class="fw-light">'+ $content[el].service_description+'</p>',
                    '<br>',
                '<h2 id="sprice' + $content[el].service_id + '" class="fs-4">Price rate: Php ' + NumberComms.format($content[el].service_price) + '.00</h2>',
                // '<button type="button" id="copyService' + $content[el].service_id + '"class="btn1 text-white mt-3 fs-4 p-2"><small class="ms-2">Add to Inquiry</small><div class="fas fa-paint-roller fs-5 ms-2 me-2"></div></button>',
                '<button type="button" id="copyService'+$content[el].service_id+'"class="btn1 text-white trans pt-1 fs-4 p-2 mt-3"><small class="ms-2 me-2">Add to Cart</small></button>',
                '</div></form>'   
            ];
            $($elem).append($html.join(""));

            var servNo = $content[el].service_id;
            getservcopy(servNo);
        } 
    }

    function generateProducts($elem, $content, num)
    {

        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {

            $html = [
                '<form><input type="hidden" id="products-copy' + $content[el].product_id + '" value="' + $content[el].product_name +'">',
                '<div class="box shadow">',
                '<img id="pimage'+$content[el].product_id+'" src="'+display_image+$content[el].product_image +'" alt="">',
                '<div class="content">',
                    '<h5 id="ptitle'+$content[el].product_id+'" class="fcapital">'+$content[el].product_name +'</h5>',
                '<span id="pprice' + $content[el].product_id + '">Php ' + NumberComms.format($content[el].product_price) + '.00</span>',
                // '<button type="button" id="copyProduct' + $content[el].product_id + '" class="btn pending_header btn_product text-white mt-3 fs-5" style="padding-left:15px !important" >Add to Inquiry<i style="margin-right:10px !important; margin-left:10px !important;" class="fas fa-paint-roller fs-5 m-0"></button>',
                '<button type="button" id="copyProduct'+$content[el].product_id+'" class="btn pending_header btn_product text-white pt-1 mt-3 fs-5" style="padding-left:15px !important; padding-right:15px !important;" >Add to Cart</button>',
                '</div>',
                '</div></form>'  
            ];
            $($elem).append($html.join(""));

            var prodNo = $content[el].product_id;
            getprodcopy(prodNo);
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
        $(document).on('click', '#copyProduct'+prodNo+'', function (e) {
            copyProduct(prodNo);
        });
    }
    
    function getservcopy(servNo)
    {
        $(document).on('click', '#copyService'+servNo+'', function (e) {
            copyService(servNo);
        });
    }

    
    function copyProduct(prodNo)
    {

    
        var productname = String(document.getElementById('products-copy'+prodNo).value);

        var text = 'Product: ' + productname + '\r\n';
    
        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to your Cart!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Go to Cart',
                confirmButtonColor: '#2691d9',
                cancelButtonText: 'Add another Item',
                showCancelButton: true,
            }).then(function (result) {
                let textarea = document.getElementById("cinq");
                textarea.value += text;
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

    function copyService(servNo)
    {
        var servicename = String(document.getElementById('services-copy'+servNo).value);

        var text = 'Service: ' + servicename + '\r\n';

        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to your Cart!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Go to Cart',
                confirmButtonColor: '#2691d9',
                cancelButtonText: 'Add another Item',
                showCancelButton: true,
            }).then(function (result) {
                let textarea = document.getElementById("cinq");
                textarea.value += text;
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

})();