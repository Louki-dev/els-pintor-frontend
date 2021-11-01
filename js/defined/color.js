(function () {
    $(document).ready(function(e){
        $(document).on("click", "#1stpick", function (e) {
            add_color();
        });
        $(document).on("click", "#2ndpick", function (e) {
            add_color();
        });
        $(document).on('click','#color_reset',function (){
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "white";
                    document.getElementById("color_2").style.background = "white";
                    document.getElementById("color_3").style.background = "white";
                }
            });
        });
    });



    function add_color() {

        var first_number = String(document.getElementById("1stpick").value);
        var second_number = String(document.getElementById("2ndpick").value);

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
        if (first_number == "" || second_number == "") {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "white";
                }
            });
  
        }

        if (first_number == "blue" && second_number == "blue")
        {
            var result = "Blue";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "blue" && second_number == "red" || first_number == "red" && second_number == "blue")
        {
            var result = "Purple";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "blue" && second_number == "yellow" || first_number == "yellow" && second_number == "blue")
        {
            var result = "Green";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "blue" && second_number == "GhostWhite" || first_number == "GhostWhite" && second_number == "blue")
        {
            var result = "SkyBlue";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "blue" && second_number == "black" || first_number == "black" && second_number == "blue")
        {
            var result = "Darkblue";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "yellow" && second_number == "yellow")
        {
            var result = "Yellow";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "yellow" && second_number == "red" || first_number == "red" && second_number == "yellow")
        {
            var result = "Orange";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "yellow" && second_number == "GhostWhite" || first_number == "GhostWhite" && second_number == "yellow")
        {
            var result = "LemonChiffon";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "yellow" && second_number == "black" || first_number == "black" && second_number == "yellow")
        {
            var result = "DarkGoldenRod";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "red" && second_number == "red")
        {
            var result = "Red";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "red" && second_number == "GhostWhite" || first_number == "GhostWhite" && second_number == "red")
        {
            var result = "Pink";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "red" && second_number == "black" || first_number == "black" && second_number == "red")
        {
            var result = "DarkRed";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "GhostWhite" && second_number == "GhostWhite")
        {
            var result = "GhostWhite";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        if (first_number == "GhostWhite" && second_number == "black" || first_number == "black" && second_number == "GhostWhite")
        {
            var result = "SlateGray";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }

        if (first_number == "black" && second_number == "black")
        {
            var result = "Black";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = result;
                }
            });
        }
        



        
    }
})();