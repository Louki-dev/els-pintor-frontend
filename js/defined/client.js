(function () {
    $(document).ready(function(e){

        $(document).on("click", "#csubmit", function(e) { 
            var data = {
                customer_first_name : $('#cfname').val(),
                customer_last_name : $('#clname').val(),
                customer_mobile_number : $('#cemail').val(),
                customer_email : $('#cnumber').val(),
                customer_inquiry_details : $('#cinq').val()
            };

            createInquiry(data);
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
                    Swal.fire('Inquiry sent!', '', 'success');
                    $('#cfname').val(''),
                    $('#clname').val(''),
                    $('#cemail').val(''),
                    $('#cnumber').val(''),
                    $('#cinq').val('')
                } else {
                    Swal.fire('Something went wrong!', 'Required input must not be empty', 'error');   
                }
            });
        }

    });


    $(document).ready(function(){
        var menuBtn = document.querySelector('#menu-btn');
        var searchBtn = document.querySelector('#search-btn');
        var themeBtn = document.querySelector('#theme-btn');
    
        var navbar = document.querySelector('.navbar');
        var searchForm = document.querySelector('.search-form');
        var colorsPalette = document.querySelector('.colors-palette');
    
        menuBtn.onclick = function (){
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        colorsPalette.classList.remove('active');
        }
    
        searchBtn.onclick = function (){
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        colorsPalette.classList.remove('active');
        }
    
        window.onscroll = function (){
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        colorsPalette.classList.remove('active');
        }
    
        document.querySelectorAll('.colors-palette .color').forEach(function (btn){
        btn.onclick = function (){
            let color = btn.style.background;
            document.querySelector(':root').style.setProperty('--main-color',color);
        }
        });
    
        
    })
})();