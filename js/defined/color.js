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
                    document.getElementById("color_1").style.background = "white";
                    document.getElementById("color_2").style.background = "white";
                    document.getElementById("color_3").style.background = "white";
                    document.getElementById("color_4").style.background = "white";
                }
            });
        });
        $(document).on("click", "#1", function (e) {
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
                    document.getElementById("color_1").style.background = "yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "red";
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
                    document.getElementById("color_1").style.background = "yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "red";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "ghostwhite";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Red";
            document.getElementById("c3").value = "White";
        });
        $(document).on("click", "#3", function (e) {
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
                    document.getElementById("color_2").style.background = "blue";
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
                    document.getElementById("color_1").style.background = "red";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "green";
                }
            });
            document.getElementById("c1").value = "Red";
            document.getElementById("c2").value = "Magenta";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#5", function (e) {
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
                    document.getElementById("color_1").style.background = "yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "magenta";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "green";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Magenta";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#6", function (e) {
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
                    document.getElementById("color_1").style.background = "red";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "ghostwhite";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "black";
                }
            });
            document.getElementById("c1").value = "Red";
            document.getElementById("c2").value = "White";
            document.getElementById("c3").value = "Black";
        });
        $(document).on("click", "#7", function (e) {
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
                    document.getElementById("color_4").style.background = "ghostwhite";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Cyan";
            document.getElementById("c3").value = "White";
        });
        $(document).on("click", "#8", function (e) {
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
                    document.getElementById("color_1").style.background = "yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "cyan";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "green";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Cyan";
            document.getElementById("c3").value = "Green";
        });
        $(document).on("click", "#9", function (e) {
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
                    document.getElementById("color_1").style.background = "yellow";
                }
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "red";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "ghostwhite";
                }
            });
            document.getElementById("c1").value = "Yellow";
            document.getElementById("c2").value = "Red";
            document.getElementById("c3").value = "White";
        });

        $(document).on("click", "#10", function (e) {
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
                    document.getElementById("color_2").style.background = "blue";
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "ghostwhite";
                }
            });
            document.getElementById("c1").value = "Magenta";
            document.getElementById("c2").value = "Blue";
            document.getElementById("c3").value = "White";
        });

        $(document).on("click", "#11", function (e) {
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
                    document.getElementById("color_2").style.background = "blue";
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
                    document.getElementById("color_2").style.background = "green";          
                }
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "ghostwhite";            
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
            'Color Mix Base: ' + c1 + ', ' + c2 + ', ' + c3 + '\r\n';
        // 'Price: ' + color_price + '\r\n';
    
        // console.log(colorName);
        
        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Added to Inquiry!',
                text: '',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            let textarea = document.getElementById("cinq");
            textarea.value += text;
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

    
    function add_color() {

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
        if (first_number == "blue" && second_number == "blue" && third_number == "blue" ||
            first_number == "blue" && second_number == "blue" ||
            first_number == "blue" && third_number == "blue" ||
            second_number == "blue" && third_number == "blue")
        {
            var result = "BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#0000ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "blue";
                }
            });
        }
        if (first_number == "blue" && second_number == "red" ||
            first_number == "blue" && third_number == "red" ||
            second_number == "blue" && third_number == "red" ||
            second_number == "red" && third_number == "blue" ||
            first_number == "red" && second_number == "blue" ||
            first_number == "red" && third_number == "blue")
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
        }
        if (first_number == "blue" && second_number == "yellow" ||
            first_number == "blue" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "blue" ||
            second_number == "blue" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "blue" ||
            first_number == "yellow" && third_number == "blue")
        {
            var result = "GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#008000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "green";
                }
            });
        }
        if (first_number == "blue" && second_number == "ghostwhite" ||
            first_number == "blue" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "blue" ||
            second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "blue" ||
            first_number == "ghostwhite" && third_number == "blue")
        {
            var result = "LIGHT BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#add8e6";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "lightblue";
                }
            });
        }
        if (first_number == "blue" && second_number == "black" ||
            first_number == "blue" && third_number == "black" ||
            second_number == "black" && third_number == "blue" ||
            second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "blue" ||
            first_number == "black" && third_number == "blue")
        {
            var result = "YVES KLEIN BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#00008b";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkblue";
                }
            });
        }

        
        if (first_number == "green" && second_number == "green" && third_number == "green" ||
            first_number == "green" && second_number == "green" ||
            first_number == "green" && third_number == "green" ||
            second_number == "green" && third_number == "green")
        {
            var result = "GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#008000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "green";
                }
            });
        }

        if (first_number == "green" && second_number == "red" ||
            first_number == "green" && third_number == "red" ||
            second_number == "red" && third_number == "green" ||
            second_number == "green" && third_number == "red" ||
            first_number == "red" && second_number == "green" ||
            first_number == "red" && third_number == "green")
        {
            var result = "YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffff00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "yellow";
                }
            });
        }

        if (first_number == "green" && second_number == "blue" ||
            first_number == "green" && third_number == "blue" ||
            second_number == "blue" && third_number == "green" ||
            second_number == "green" && third_number == "blue" ||
            first_number == "blue" && second_number == "green" ||
            first_number == "blue" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "yellow" ||
            first_number == "green" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "green" ||
            second_number == "green" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "green" ||
            first_number == "yellow" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "ghostwhite" ||
            first_number == "green" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "green" ||
            second_number == "green" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "green" ||
            first_number == "ghostwhite" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "black" ||
            first_number == "green" && third_number == "black" ||
            second_number == "black" && third_number == "green" ||
            second_number == "green" && third_number == "black" ||
            first_number == "black" && second_number == "green" ||
            first_number == "black" && third_number == "green")
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
        }

        if (first_number == "yellow" && second_number == "yellow" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "yellow" ||
            first_number == "yellow" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "yellow")
        {
            var result = "YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffff00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "yellow";
                }
            });
        }
        if (first_number == "yellow" && second_number == "red" ||
            first_number == "yellow" && third_number == "red" ||
            second_number == "red" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "red" ||
            first_number == "red" && second_number == "yellow" ||
            first_number == "red" && third_number == "yellow")
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
        }
        if (first_number == "yellow" && second_number == "ghostwhite" ||
            first_number == "yellow" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "yellow" ||
            first_number == "ghostwhite" && third_number == "yellow")
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
        }
        if (first_number == "yellow" && second_number == "black" ||
            first_number == "yellow" && third_number == "black" ||
            second_number == "black" && third_number == "yellow" ||
            second_number == "yellow" && third_number == "black" ||
            first_number == "black" && second_number == "yellow" ||
            first_number == "black" && third_number == "yellow")
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
        }

        if (first_number == "red" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "red" ||
            first_number == "red" && third_number == "red" ||
            second_number == "red" && third_number == "red")
        {
            var result = "RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "red";
                }
            });
        }

        if (first_number == "red" && second_number == "ghostwhite" ||
            first_number == "red" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "red" ||
            second_number == "red" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "red" ||
            first_number == "ghostwhite" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "black" ||
            first_number == "red" && third_number == "black" ||
            second_number == "black" && third_number == "red" ||
            second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "red" ||
            first_number == "black" && third_number == "red")
        {
            var result = "SCAB RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#8b0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkred";
                }
            });
        }

        if (first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" ||
            first_number == "ghostwhite" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "ghostwhite")
        {
            var result = "GHOST WHITE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#f8f8ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "ghostwhite";
                }
            });
        }
        if (first_number == "ghostwhite" && second_number == "black" ||
            first_number == "ghostwhite" && third_number == "black" ||
            second_number == "black" && third_number == "ghostwhite" ||
            second_number == "ghostwhite" && third_number == "black" ||
            first_number == "black" && second_number == "ghostwhite" ||
            first_number == "black" && third_number == "ghostwhite")
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
        }

        if (first_number == "black" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "black" ||
            first_number == "black" && third_number == "black" ||
            second_number == "black" && third_number == "black")
        {
            var result = "BLACK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#000000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "black";
                }
            });
        }
        


        // three colors 
        if (first_number == "blue" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "blue" && third_number == "red" ||
            first_number == "red" && second_number == "red" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "red" && third_number == "blue" ||
            first_number == "blue" && second_number == "blue" && third_number == "red" ||
            first_number == "red" && second_number == "blue" && third_number == "blue")
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
        }

        
        if (first_number == "red" && second_number == "yellow" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "red" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "yellow" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "red" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "yellow" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "green" && third_number == "green" ||
            first_number == "green" && second_number == "red" && third_number == "green" ||
            first_number == "green" && second_number == "green" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "red" && third_number == "green" ||
            first_number == "green" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "green" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "ghostwhite" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "black" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "red" && third_number == "red" ||
            first_number == "red" && second_number == "black" && third_number == "red")
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
        }

        if (first_number == "blue" && second_number == "yellow" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "yellow" && third_number == "blue" ||
            first_number == "yellow" && second_number == "blue" && third_number == "yellow")
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
        }

        if (first_number == "blue" && second_number == "blue" && third_number == "yellow" ||
            first_number == "blue" && second_number == "yellow" && third_number == "blue" ||
            first_number == "yellow" && second_number == "blue" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "green" && third_number == "green" ||
            first_number == "green" && second_number == "green" && third_number == "blue" ||
            first_number == "green" && second_number == "blue" && third_number == "green")
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
        }

        if (first_number == "blue" && second_number == "blue" && third_number == "green" ||
            first_number == "blue" && second_number == "green" && third_number == "blue" ||
            first_number == "green" && second_number == "blue" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "blue" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "ghostwhite")
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
        }

        if (first_number == "blue" && second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "blue" && second_number == "ghostwhite" && third_number == "blue" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "black" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "blue" && third_number == "black" ||
            first_number == "blue" && second_number == "black" && third_number == "blue" ||
            first_number == "black" && second_number == "blue" && third_number == "blue")
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
        }

        if (first_number == "yellow" && second_number == "yellow" && third_number == "green" ||
            first_number == "yellow" && second_number == "green" && third_number == "yellow" ||
            first_number == "green" && second_number == "yellow" && third_number == "yellow")
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
        }

        if (first_number == "yellow" && second_number == "green" && third_number == "green" ||
            first_number == "green" && second_number == "green" && third_number == "yellow" ||
            first_number == "green" && second_number == "yellow" && third_number == "green")
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
        }

        if (first_number == "yellow" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "ghostwhite")
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
        }

        if (first_number == "yellow" && second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "yellow" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "yellow")
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
        }

        if (first_number == "yellow" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "yellow" && third_number == "black" ||
            first_number == "black" && second_number == "black" && third_number == "yellow")
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
        }

        if (first_number == "yellow" && second_number == "yellow" && third_number == "black" ||
            first_number == "yellow" && second_number == "black" && third_number == "yellow" ||
            first_number == "black" && second_number == "yellow" && third_number == "yellow")
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
        }

        if (first_number == "green" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "green" && second_number == "ghostwhite" && third_number == "green" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "green" && third_number == "black" ||
            first_number == "black" && second_number == "black" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "green" && third_number == "black" ||
            first_number == "green" && second_number == "black" && third_number == "green" ||
            first_number == "black" && second_number == "green" && third_number == "green")
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
        }

        if (first_number == "ghostwhite" && second_number == "black" && third_number == "black" ||
            first_number == "black" && second_number == "ghostwhite" && third_number == "black" ||
            first_number == "black" && second_number == "black" && third_number == "ghostwhite")
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
        }

        if (first_number == "black" && second_number == "ghostwhite" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "black" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "ghostwhite" && third_number == "black")
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
        }


        // 3 combi colors
        if (first_number == "blue" && second_number == "red" && third_number == "green" ||
            first_number == "blue" && second_number == "green" && third_number == "red" ||
            first_number == "green" && second_number == "blue" && third_number == "red" ||
            first_number == "green" && second_number == "red" && third_number == "blue" ||
            first_number == "red" && second_number == "blue" && third_number == "green" ||
            first_number == "red" && second_number == "green" && third_number == "blue")
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
        }

        

        if (first_number == "blue" && second_number == "red" && third_number == "yellow" ||
            first_number == "blue" && second_number == "yellow" && third_number == "red" ||
            first_number == "red" && second_number == "yellow" && third_number == "blue" ||
            first_number == "red" && second_number == "blue" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "blue" && third_number == "red" ||
            first_number == "yellow" && second_number == "red" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "blue" && second_number == "ghostwhite" && third_number == "red" ||
            first_number == "red" && second_number == "ghostwhite" && third_number == "blue" ||
            first_number == "red" && second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "red" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "red" && third_number == "black" ||
            first_number == "blue" && second_number == "black" && third_number == "red" ||
            first_number == "red" && second_number == "black" && third_number == "blue" ||
            first_number == "red" && second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "blue" && third_number == "red" ||
            first_number == "black" && second_number == "red" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "green" && third_number == "yellow" ||
            first_number == "blue" && second_number == "yellow" && third_number == "green" ||
            first_number == "green" && second_number == "yellow" && third_number == "blue" ||
            first_number == "green" && second_number == "blue" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "blue" && third_number == "green" ||
            first_number == "yellow" && second_number == "green" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "blue" && second_number == "ghostwhite" && third_number == "green" ||
            first_number == "green" && second_number == "ghostwhite" && third_number == "blue" ||
            first_number == "green" && second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "green" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "green" && third_number == "black" ||
            first_number == "blue" && second_number == "black" && third_number == "green" ||
            first_number == "green" && second_number == "black" && third_number == "blue" ||
            first_number == "green" && second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "blue" && third_number == "green" ||
            first_number == "black" && second_number == "green" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "blue" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "ghostwhite" && third_number == "blue" ||
            first_number == "yellow" && second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "yellow" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "yellow" && third_number == "black" ||
            first_number == "blue" && second_number == "black" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "black" && third_number == "blue" ||
            first_number == "yellow" && second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "blue" && third_number == "yellow" ||
            first_number == "black" && second_number == "yellow" && third_number == "blue")
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
        }

        if (first_number == "blue" && second_number == "ghostwhite" && third_number == "black" ||
            first_number == "blue" && second_number == "black" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "black" && third_number == "blue" ||
            first_number == "ghostwhite" && second_number == "blue" && third_number == "black" ||
            first_number == "black" && second_number == "blue" && third_number == "ghostwhite" ||
            first_number == "black" && second_number == "ghostwhite" && third_number == "blue")
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
        }

        if (first_number == "red" && second_number == "green" && third_number == "yellow" ||
            first_number == "red" && second_number == "yellow" && third_number == "green" ||
            first_number == "green" && second_number == "yellow" && third_number == "red" ||
            first_number == "green" && second_number == "red" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "red" && third_number == "green" ||
            first_number == "yellow" && second_number == "green" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "red" && second_number == "ghostwhite" && third_number == "green" ||
            first_number == "green" && second_number == "ghostwhite" && third_number == "red" ||
            first_number == "green" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "green" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "green" && third_number == "black" ||
            first_number == "red" && second_number == "black" && third_number == "green" ||
            first_number == "green" && second_number == "black" && third_number == "red" ||
            first_number == "green" && second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "red" && third_number == "green" ||
            first_number == "black" && second_number == "green" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "red" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "ghostwhite" && third_number == "red" ||
            first_number == "yellow" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "yellow" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "yellow" && third_number == "black" ||
            first_number == "red" && second_number == "black" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "black" && third_number == "red" ||
            first_number == "yellow" && second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "red" && third_number == "yellow" ||
            first_number == "black" && second_number == "yellow" && third_number == "red")
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
        }

        if (first_number == "red" && second_number == "ghostwhite" && third_number == "black" ||
            first_number == "red" && second_number == "black" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "black" && third_number == "red" ||
            first_number == "ghostwhite" && second_number == "red" && third_number == "black" ||
            first_number == "black" && second_number == "red" && third_number == "ghostwhite" ||
            first_number == "black" && second_number == "ghostwhite" && third_number == "red")
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
        }

        if (first_number == "green" && second_number == "ghostwhite" && third_number == "black" ||
            first_number == "green" && second_number == "black" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "black" && third_number == "green" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "black" ||
            first_number == "black" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "black" && second_number == "ghostwhite" && third_number == "green")
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
        }

        if (first_number == "green" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "green" && second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "green" ||
            first_number == "ghostwhite" && second_number == "green" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "green" && third_number == "ghostwhite" ||
            first_number == "yellow" && second_number == "ghostwhite" && third_number == "green")
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
        }

        if (first_number == "black" && second_number == "ghostwhite" && third_number == "yellow" ||
            first_number == "black" && second_number == "yellow" && third_number == "ghostwhite" ||
            first_number == "ghostwhite" && second_number == "yellow" && third_number == "black" ||
            first_number == "ghostwhite" && second_number == "black" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "black" && third_number == "ghostwhite" ||
            first_number == "yellow" && second_number == "ghostwhite" && third_number == "black")
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
        }

        if (first_number == "black" && second_number == "green" && third_number == "yellow" ||
            first_number == "black" && second_number == "yellow" && third_number == "green" ||
            first_number == "green" && second_number == "yellow" && third_number == "black" ||
            first_number == "green" && second_number == "black" && third_number == "yellow" ||
            first_number == "yellow" && second_number == "black" && third_number == "green" ||
            first_number == "yellow" && second_number == "green" && third_number == "black")
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
        }

    }
})();