(function () {
    $(document).ready(function(e){
        $(document).on("click", "#1stpick", function (e) {
            add_color();
        });
        $(document).on("click", "#2ndpick", function (e) {
            add_color();
        });
        $(document).on("click", "#3rdpick", function (e) {
            add_color();
        });
   
        
        $(document).on('click','#color_reset',function (){
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "#eee";
                    document.getElementById("color_2").style.background = "#eee";
                    document.getElementById("color_3").style.background = "#eee";
                    document.getElementById("color_4").style.background = "#eee";
                }
            });
            var button = document.querySelector(".ddd");
            if (button != null && button != undefined) {
                button.disabled = true;
            }
        });
        $(document).on("click", "#1", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "PUMPKIN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FF7715";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FF7715";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Red";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "magenta";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Red";
            document.getElementById("c3").value = "Magenta";
        });
        $(document).on("click", "#2", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "CORAL";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FF7F50";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FF7F50";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Red";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "White";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Red";
            document.getElementById("c3").value = "White";
        });
        $(document).on("click", "#3", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "GUILLIMAN BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#6495ED";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#6495ED";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Blue";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "cyan";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Blue";
            document.getElementById("c3").value = "Cyan";
        });
        $(document).on("click", "#4", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "CRIMSON";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#DC143C";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#DC143C";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Red";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "Green";
                }
            });
            document.getElementById("c1").value = "Red";
            document.getElementById("c2").value = "Magenta";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#5", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "GOLD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FFD700";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FFD700";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "Green";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Magenta";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#6", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "INDIAN RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#CD5C5C";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#CD5C5C";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Red";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "White";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "Black";
                }
            });
            document.getElementById("c1").value = "Red";
            document.getElementById("c2").value = "White";
            document.getElementById("c3").value = "Black";
        });
        $(document).on("click", "#7", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "LIGHT SKY BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#87CEFA";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#87CEFA";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "cyan";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "White";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Cyan";
            document.getElementById("c3").value = "White";
        });
        $(document).on("click", "#8", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "MEDIUM SPRING GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#00FA9A";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#00FA9A";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "cyan";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "Green";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Cyan";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#9", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "PEACH PUFF";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FFDAB9";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FFDAB9";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "Yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Red";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "White";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Red";
            document.getElementById("c3").value = "White";
        });

        $(document).on("click", "#10", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "PLUM";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#DDA0DD";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#DDA0DD";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Blue";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "White";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Blue";
            document.getElementById("c3").value = "White";
        });

        $(document).on("click", "#11", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "AMEIXA";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#6A5ACD";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#6A5ACD";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Blue";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "cyan";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Blue";
            document.getElementById("c3").value = "Cyan";
        });

        $(document).on("click", "#12", function (e) {
            $("#copyColor").prop("disabled", false);
            var result = "MISTY ROSE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FFE4E1";

            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FFE4E1";
                }
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "magenta";         
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "Green";          
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "White";            
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Green";
            document.getElementById("c3").value = "White";
        });
    });



    $(document).on('click', "#copyColor", function (e) {
        copyColor();
    });


    function copyColor()
    {
        // var colorHex = String(document.getElementById("color_hexcode").value);
        var c1 =  String(document.getElementById("c1").value);
        var c2 =  String(document.getElementById("c2").value);
        var c3 =  String(document.getElementById("c3").value);
        var colorName = String(document.getElementById("color_result").value);
        // var color_price = String(document.getElementById("color_price").value);

        var text = 'Color Name: ' + colorName + '\r\n' +
            'Color Mix: ' + c1 + ', ' + c2 + ', ' + c3 + '\r\n';
        // 'Price: ' + color_price + '\r\n';
    
        // console.log(colorName);
        
        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to Inquiry!',
                text: 'Please check your inquiries!',
                icon: 'success',
                confirmButtonText: 'View my Inquiries',
                confirmButtonColor: '#2691d9',
                cancelButtonText: 'Add another Inquiry',
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
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        });
    }

    
    function add_color() {

        var button = document.querySelector(".ddd");
        if (button != null && button != undefined) {
            button.disabled = false;
        }

        var first_number = String(document.getElementById("1stpick").value);
        var second_number = String(document.getElementById("2ndpick").value);
        var third_number = String(document.getElementById("3rdpick").value);

        if (first_number == first_number) {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = first_number;
                }
            });
       
        }
        if (second_number == second_number) {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = second_number;
                }
            });
  
        }
        if (third_number == third_number) {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = third_number;
                }
            });
  
        }

        // color mixer 
        if (first_number == "Blue" && second_number == "Blue" && third_number == "Blue" ||
            first_number == "Blue" && second_number == "Blue" ||
            first_number == "Blue" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "Blue")
        {
            var result = "BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#0000ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Blue";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Blue" && second_number == "Red" ||
            first_number == "Blue" && third_number == "Red" ||
            second_number == "Blue" && third_number == "Red" ||
            second_number == "Red" && third_number == "Blue" ||
            first_number == "Red" && second_number == "Blue" ||
            first_number == "Red" && third_number == "Blue")
        {
            var result = "PURPLE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#800080";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "purple";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Blue" && second_number == "Yellow" ||
            first_number == "Blue" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Blue" ||
            first_number == "Yellow" && third_number == "Blue")
        {
            var result = "GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#008000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Green";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Blue" && second_number == "White" ||
            first_number == "Blue" && third_number == "White" ||
            second_number == "White" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "White" ||
            first_number == "White" && second_number == "Blue" ||
            first_number == "White" && third_number == "Blue")
        {
            var result = "LIGHT BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#add8e6";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "lightBlue";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Blue" && second_number == "Black" ||
            first_number == "Blue" && third_number == "Black" ||
            second_number == "Black" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" ||
            first_number == "Black" && third_number == "Blue")
        {
            var result = "YVES KLEIN BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#00008b";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkBlue";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        
        if (first_number == "Green" && second_number == "Green" && third_number == "Green" ||
            first_number == "Green" && second_number == "Green" ||
            first_number == "Green" && third_number == "Green" ||
            second_number == "Green" && third_number == "Green")
        {
            var result = "GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#008000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Green";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Red" ||
            first_number == "Green" && third_number == "Red" ||
            second_number == "Red" && third_number == "Green" ||
            second_number == "Green" && third_number == "Red" ||
            first_number == "Red" && second_number == "Green" ||
            first_number == "Red" && third_number == "Green")
        {
            var result = "YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffff00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Yellow";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Blue" ||
            first_number == "Green" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "Green" ||
            second_number == "Green" && third_number == "Blue" ||
            first_number == "Blue" && second_number == "Green" ||
            first_number == "Blue" && third_number == "Green")
        {
            var result = "AQUA";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#00ffff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#00ffff";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Yellow" ||
            first_number == "Green" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "Green" ||
            second_number == "Green" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Green" ||
            first_number == "Yellow" && third_number == "Green")
        {
            var result = "LUCKY LIME";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#9acd32";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#9acd32";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "White" ||
            first_number == "Green" && third_number == "White" ||
            second_number == "White" && third_number == "Green" ||
            second_number == "Green" && third_number == "White" ||
            first_number == "White" && second_number == "Green" ||
            first_number == "White" && third_number == "Green")
        {
            var result = "ULVA LACTUCA GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#90ee90";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#90ee90";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Black" ||
            first_number == "Green" && third_number == "Black" ||
            second_number == "Black" && third_number == "Green" ||
            second_number == "Green" && third_number == "Black" ||
            first_number == "Black" && second_number == "Green" ||
            first_number == "Black" && third_number == "Green")
        {
            var result = "HUNTER GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#355749";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#355749";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Yellow" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Yellow" ||
            first_number == "Yellow" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "Yellow")
        {
            var result = "YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffff00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Yellow";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Yellow" && second_number == "Red" ||
            first_number == "Yellow" && third_number == "Red" ||
            second_number == "Red" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "Red" ||
            first_number == "Red" && second_number == "Yellow" ||
            first_number == "Red" && third_number == "Yellow")
        {
            var result = "ORANGE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffa500";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "orange";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Yellow" && second_number == "White" ||
            first_number == "Yellow" && third_number == "White" ||
            second_number == "White" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "White" ||
            first_number == "White" && second_number == "Yellow" ||
            first_number == "White" && third_number == "Yellow")
        {
            var result = "WINTER DUVET";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffffe0";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ffffe0";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "Yellow" && second_number == "Black" ||
            first_number == "Yellow" && third_number == "Black" ||
            second_number == "Black" && third_number == "Yellow" ||
            second_number == "Yellow" && third_number == "Black" ||
            first_number == "Black" && second_number == "Yellow" ||
            first_number == "Black" && third_number == "Yellow")
        {
            var result = "HEART GOLD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#808000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#808000";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "Red" ||
            first_number == "Red" && third_number == "Red" ||
            second_number == "Red" && third_number == "Red")
        {
            var result = "RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Red";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "White" ||
            first_number == "Red" && third_number == "White" ||
            second_number == "White" && third_number == "Red" ||
            second_number == "Red" && third_number == "White" ||
            first_number == "White" && second_number == "Red" ||
            first_number == "White" && third_number == "Red")
        {
            var result = "PINK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffc0cb";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "pink";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Black" ||
            first_number == "Red" && third_number == "Black" ||
            second_number == "Black" && third_number == "Red" ||
            second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" ||
            first_number == "Black" && third_number == "Red")
        {
            var result = "SCAB RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#8b0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkRed";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "White" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "White" ||
            first_number == "White" && third_number == "White" ||
            second_number == "White" && third_number == "White")
        {
            var result = "WHITE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#f8f8ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "White";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        if (first_number == "White" && second_number == "Black" ||
            first_number == "White" && third_number == "Black" ||
            second_number == "Black" && third_number == "White" ||
            second_number == "White" && third_number == "Black" ||
            first_number == "Black" && second_number == "White" ||
            first_number == "Black" && third_number == "White")
        {
            var result = "GREY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#808080";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "grey";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Black" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" ||
            first_number == "Black" && third_number == "Black" ||
            second_number == "Black" && third_number == "Black")
        {
            var result = "BLACK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#000000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "Black";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }
        


        // three colors 
        if (first_number == "Blue" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "Blue" && third_number == "Red" ||
            first_number == "Red" && second_number == "Red" && third_number == "Blue")
        {
            var result = "ROUGE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa1839";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa1839";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Red" && third_number == "Blue" ||
            first_number == "Blue" && second_number == "Blue" && third_number == "Red" ||
            first_number == "Red" && second_number == "Blue" && third_number == "Blue")
        {
            var result = "TILLANDSIA PURPLE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#552f72";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#552f72";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        
        if (first_number == "Red" && second_number == "Yellow" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Yellow" && third_number == "Red")
        {
            var result = "MANDARIN PEEL";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff9e00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ff9e00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "Yellow" && third_number == "Red")
        {
            var result = "AEROSPACE ORANGE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff4f00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ff4f00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Green" && third_number == "Green" ||
            first_number == "Green" && second_number == "Red" && third_number == "Green" ||
            first_number == "Green" && second_number == "Green" && third_number == "Red")
        {
            var result = "AVOCADO";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#557900";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#557900";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Red" && third_number == "Green" ||
            first_number == "Green" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "Green" && third_number == "Red")
        {
            var result = "PEPPERONI";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa3c00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa3c00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "Red" && third_number == "White" ||
            first_number == "White" && second_number == "White" && third_number == "Red")
        {
            var result = "FOND DE TEINT";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffaaaa";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ffaaaa";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Red" && third_number == "White" ||
            first_number == "White" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "White" && third_number == "Red")
        {
            var result = "FLUORESCENT RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff5555";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ff5555";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" && third_number == "Red")
        {
            var result = "SOOOO BLOODY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#550000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#550000";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" && third_number == "Red" ||
            first_number == "Red" && second_number == "Black" && third_number == "Red")
        {
            var result = "HEARTBEAT";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa0000";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Yellow" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Yellow" && third_number == "Blue" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "Yellow")
        {
            var result = "FLUORESCENT LIME";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#bfc42b";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#bfc42b";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Blue" && third_number == "Yellow" ||
            first_number == "Blue" && second_number == "Yellow" && third_number == "Blue" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "Blue")
        {
            var result = "DULL TURQUOISE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#557e72";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#557e72";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Green" && third_number == "Green" ||
            first_number == "Green" && second_number == "Green" && third_number == "Blue" ||
            first_number == "Green" && second_number == "Blue" && third_number == "Green")
        {
            var result = "PIXELATED GRASS";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#009039";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#009039";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Blue" && third_number == "Green" ||
            first_number == "Blue" && second_number == "Green" && third_number == "Blue" ||
            first_number == "Green" && second_number == "Blue" && third_number == "Blue")
        {
            var result = "TEAL MOTIF";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#006c72";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#006c72";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "White" && third_number == "Blue" ||
            first_number == "White" && second_number == "Blue" && third_number == "White")
        {
            var result = "ANGELA BAY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aac2e3";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aac2e3";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Blue" && third_number == "White" ||
            first_number == "Blue" && second_number == "White" && third_number == "Blue" ||
            first_number == "White" && second_number == "Blue" && third_number == "Blue")
        {
            var result = "ASTRO NAUTICO";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#5584c7";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#5584c7";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" && third_number == "Blue")
        {
            var result = "NAVAL NIGHT";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#001839";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#001839";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Blue" && second_number == "Black" && third_number == "Blue" ||
            first_number == "Black" && second_number == "Blue" && third_number == "Blue")
        {
            var result = "KONJŌ BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#002f72";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#002f72";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Yellow" && third_number == "Green" ||
            first_number == "Yellow" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "Yellow")
        {
            var result = "SLIMER GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aada00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aada00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Green" && third_number == "Green" ||
            first_number == "Green" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "Green")
        {
            var result = "SOUR APPLE RINGS";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#40c300";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#40c300";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "White" && third_number == "Yellow" ||
            first_number == "White" && second_number == "Yellow" && third_number == "White")
        {
            var result = "BOLLYWOOD GOLD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#fff9aa";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#fff9aa";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Yellow" && third_number == "White" ||
            first_number == "Yellow" && second_number == "White" && third_number == "Yellow" ||
            first_number == "White" && second_number == "Yellow" && third_number == "Yellow")
        {
            var result = "XANTHE YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#fff355";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#fff355";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" && third_number == "Yellow")
        {
            var result = "SCORZONERA BROWN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#554f00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#554f00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Yellow" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "Yellow" && second_number == "Black" && third_number == "Yellow" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "Yellow")
        {
            var result = "NUCLEAR FALLOUT";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa9e00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa9e00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "Green" && third_number == "White" ||
            first_number == "White" && second_number == "White" && third_number == "Green")
        {
            var result = "LIME DREAM";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#bfedbf";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#bfedbf";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Green" && third_number == "White" ||
            first_number == "Green" && second_number == "White" && third_number == "Green" ||
            first_number == "White" && second_number == "Green" && third_number == "Green")
        {
            var result = "POISONOUS PESTICIDE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#40c840";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#40c840";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "Green" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" && third_number == "Green")
        {
            var result = "DARK GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#003c00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#003c00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "Green" && third_number == "Black" ||
            first_number == "Green" && second_number == "Black" && third_number == "Green" ||
            first_number == "Black" && second_number == "Green" && third_number == "Green")
        {
            var result = "GREEN HILLS";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#007900";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#007900";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "White" && second_number == "Black" && third_number == "Black" ||
            first_number == "Black" && second_number == "White" && third_number == "Black" ||
            first_number == "Black" && second_number == "Black" && third_number == "White")
        {
            var result = "STONE COLD GRAY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#555555";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#555555";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Black" && second_number == "White" && third_number == "White" ||
            first_number == "White" && second_number == "Black" && third_number == "White" ||
            first_number == "White" && second_number == "White" && third_number == "Black")
        {
            var result = "DHŪSAR GREY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aaaaaa";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aaaaaa";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }


        // 3 combi colors
        if (first_number == "Blue" && second_number == "Red" && third_number == "Green" ||
            first_number == "Blue" && second_number == "Green" && third_number == "Red" ||
            first_number == "Green" && second_number == "Blue" && third_number == "Red" ||
            first_number == "Green" && second_number == "Red" && third_number == "Blue" ||
            first_number == "Red" && second_number == "Blue" && third_number == "Green" ||
            first_number == "Red" && second_number == "Green" && third_number == "Blue")
        {
            var result = "AVOCADO PEAR";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#555439";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#555439";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        

        if (first_number == "Blue" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "Blue" && second_number == "Yellow" && third_number == "Red" ||
            first_number == "Red" && second_number == "Yellow" && third_number == "Blue" ||
            first_number == "Red" && second_number == "Blue" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "Red" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "Blue")
        {
            var result = "CAMEL BROWN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa6739";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa6739";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Red" && third_number == "White" ||
            first_number == "Blue" && second_number == "White" && third_number == "Red" ||
            first_number == "Red" && second_number == "White" && third_number == "Blue" ||
            first_number == "Red" && second_number == "Blue" && third_number == "White" ||
            first_number == "White" && second_number == "Blue" && third_number == "Red" ||
            first_number == "White" && second_number == "Red" && third_number == "Blue")
        {
            var result = "LOW SATURATED SCARLET";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa6d8e";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa6d8e";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Red" && third_number == "Black" ||
            first_number == "Blue" && second_number == "Black" && third_number == "Red" ||
            first_number == "Red" && second_number == "Black" && third_number == "Blue" ||
            first_number == "Red" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" && third_number == "Red" ||
            first_number == "Black" && second_number == "Red" && third_number == "Blue")
        {
            var result = "VERY DARK SCARLET";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#551839";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#551839";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Blue" && second_number == "Yellow" && third_number == "Green" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "Blue" ||
            first_number == "Green" && second_number == "Blue" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "Green" ||
            first_number == "Yellow" && second_number == "Green" && third_number == "Blue")
        {
            var result = "BALLYHOO";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#55a339";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#55a339";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Green" && third_number == "White" ||
            first_number == "Blue" && second_number == "White" && third_number == "Green" ||
            first_number == "Green" && second_number == "White" && third_number == "Blue" ||
            first_number == "Green" && second_number == "Blue" && third_number == "White" ||
            first_number == "White" && second_number == "Blue" && third_number == "Green" ||
            first_number == "White" && second_number == "Green" && third_number == "Blue")
        {
            var result = "O'GRADY GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#55a98e";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#55a98e";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Green" && third_number == "Black" ||
            first_number == "Blue" && second_number == "Black" && third_number == "Green" ||
            first_number == "Green" && second_number == "Black" && third_number == "Blue" ||
            first_number == "Green" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" && third_number == "Green" ||
            first_number == "Black" && second_number == "Green" && third_number == "Blue")
        {
            var result = "PERMANENT GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#005439";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#005439";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Yellow" && third_number == "White" ||
            first_number == "Blue" && second_number == "White" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "White" && third_number == "Blue" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "White" ||
            first_number == "White" && second_number == "Blue" && third_number == "Yellow" ||
            first_number == "White" && second_number == "Yellow" && third_number == "Blue")
        {
            var result = "CHERVIL LEAVES";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aabc8e";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aabc8e";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "Blue" && second_number == "Black" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Black" && third_number == "Blue" ||
            first_number == "Yellow" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" && third_number == "Yellow" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "Blue")
        {
            var result = "DAISY LEAF";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#556739";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#556739";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Blue" && second_number == "White" && third_number == "Black" ||
            first_number == "Blue" && second_number == "Black" && third_number == "White" ||
            first_number == "White" && second_number == "Black" && third_number == "Blue" ||
            first_number == "White" && second_number == "Blue" && third_number == "Black" ||
            first_number == "Black" && second_number == "Blue" && third_number == "White" ||
            first_number == "Black" && second_number == "White" && third_number == "Blue")
        {
            var result = "KASHMIR BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#556d8e";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#556d8e";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Red" && second_number == "Yellow" && third_number == "Green" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "Red" ||
            first_number == "Green" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "Green" ||
            first_number == "Yellow" && second_number == "Green" && third_number == "Red")
        {
            var result = "STRONG MUSTARD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa8b00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa8b00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Green" && third_number == "White" ||
            first_number == "Red" && second_number == "White" && third_number == "Green" ||
            first_number == "Green" && second_number == "White" && third_number == "Red" ||
            first_number == "Green" && second_number == "Red" && third_number == "White" ||
            first_number == "White" && second_number == "Red" && third_number == "Green" ||
            first_number == "White" && second_number == "Green" && third_number == "Red")
        {
            var result = "GATHERING FIELD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa9155";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa9155";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Green" && third_number == "Black" ||
            first_number == "Red" && second_number == "Black" && third_number == "Green" ||
            first_number == "Green" && second_number == "Black" && third_number == "Red" ||
            first_number == "Green" && second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" && third_number == "Green" ||
            first_number == "Black" && second_number == "Green" && third_number == "Red")
        {
            var result = "ROMAN BRONZE COIN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#553c00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#553c00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Yellow" && third_number == "White" ||
            first_number == "Red" && second_number == "White" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "White" && third_number == "Red" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "White" ||
            first_number == "White" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "White" && second_number == "Yellow" && third_number == "Red")
        {
            var result = "ECHINOIDEA THORNS";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffa455";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ffa455";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "Red" && second_number == "Black" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Black" && third_number == "Red" ||
            first_number == "Yellow" && second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" && third_number == "Yellow" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "Red")
        {
            var result = "TIJOLO";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa4f00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa4f00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Red" && second_number == "White" && third_number == "Black" ||
            first_number == "Red" && second_number == "Black" && third_number == "White" ||
            first_number == "White" && second_number == "Black" && third_number == "Red" ||
            first_number == "White" && second_number == "Red" && third_number == "Black" ||
            first_number == "Black" && second_number == "Red" && third_number == "White" ||
            first_number == "Black" && second_number == "White" && third_number == "Red")
        {
            var result = "BRETZEL BROWN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aa5555";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aa5555";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "White" && third_number == "Black" ||
            first_number == "Green" && second_number == "Black" && third_number == "White" ||
            first_number == "White" && second_number == "Black" && third_number == "Green" ||
            first_number == "White" && second_number == "Green" && third_number == "Black" ||
            first_number == "Black" && second_number == "Green" && third_number == "White" ||
            first_number == "Black" && second_number == "White" && third_number == "Green")
        {
            var result = "INEFFABLE FOREST";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#559155";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#559155";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Green" && second_number == "White" && third_number == "Yellow" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "White" ||
            first_number == "White" && second_number == "Yellow" && third_number == "Green" ||
            first_number == "White" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Green" && third_number == "White" ||
            first_number == "Yellow" && second_number == "White" && third_number == "Green")
        {
            var result = "CONIFER";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#aae055";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#aae055";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Black" && second_number == "White" && third_number == "Yellow" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "White" ||
            first_number == "White" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "White" && second_number == "Black" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Black" && third_number == "White" ||
            first_number == "Yellow" && second_number == "White" && third_number == "Black")
        {
            var result = "YELLOW SALMONBERRY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#fff680";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#fff680";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (first_number == "Black" && second_number == "Green" && third_number == "Yellow" ||
            first_number == "Black" && second_number == "Yellow" && third_number == "Green" ||
            first_number == "Green" && second_number == "Yellow" && third_number == "Black" ||
            first_number == "Green" && second_number == "Black" && third_number == "Yellow" ||
            first_number == "Yellow" && second_number == "Black" && third_number == "Green" ||
            first_number == "Yellow" && second_number == "Green" && third_number == "Black")
        {
            var result = "TATZELWURM GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#558B00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#558B00";
                }
            });
            document.getElementById("c1").value = first_number;
            document.getElementById("c2").value = second_number;
            document.getElementById("c3").value = third_number;
        }

        if (
            first_number == "none" && second_number == "none" ||
            first_number == "none" && third_number == "none" ||
            second_number == "none" && third_number == "none" )
        {
            $("#copyColor").prop("disabled", true);
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "#eee";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "#eee";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "#eee";
                }
            });
        }

    }
})();