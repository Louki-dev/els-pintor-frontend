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
                button.disabled = false;
            }
            
        });
        $(document).on("click", "#1", function (e) {
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "PUMPKIN";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "CORAL";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "GUILLIMAN BLUE";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "CRIMSON";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "GOLD";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "INDIAN RED";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "LIGHT SKY BLUE";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "MEDIUM SPRING GREEN";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "PEACH PUFF";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "PLUM";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "AMEIXA";
            var price = total_price;
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
            // $("#copyColor").prop("disabled", false);
            var price1 = 850;
            var price2 = 850;
            var price3 = 850;
            var total_price = price1 + price2 + price3;
            var result = "MISTY ROSE";
            var price = total_price;
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
        var empty_result = document.getElementById("color_result").value.split(" ").join("");
        var empty_price = document.getElementById("color_price").value;
        const colorPrice = parseInt(document.getElementById("color_price").value);
        const check_color_item = document.getElementById('color-list-main' + empty_result);

        if (empty_result == "" && empty_price == "" ) {
            Swal.fire({
                title: 'Please choose atleast 1 color!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (check_color_item == undefined) {
            copyColor(colorPrice);
            calculateColor(colorPrice);
        }else {
            Swal.fire({
                title: 'Error!',
                text: 'This item is already added!',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                Swal.fire({
                    title: 'Would you like to replace the same item?',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, replace it',
                    confirmButtonColor: '#2691d9',
                    cancelButtonText: 'No, thanks',
                    icon: 'question',
                }).then(function (result) {
                    if (result.isConfirmed) {  
                        calculateRemoveColor(empty_result);
                        const item = document.getElementById('color-list-main'+empty_result);
                        item.remove();
                        copyColor(colorPrice);
                        calculateColor(colorPrice);
                    } 
                });
            });
        
        }
        
        $(document).on('click', '#color-remove-list' + empty_result + '', function (e) {   
            calculateRemoveColor(empty_result);
    
            const item = document.getElementById('color-list-main'+empty_result);
            item.remove();
        });

        function calculateColor(colorPrice) {
            const substotal = parseInt($('#items-subtotal').val());
            const cprice = parseInt(colorPrice);
            var total = 0;
            total = cprice + substotal;
            document.getElementById("items-subtotal").value = total;
            document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";
    
        }
    
        function calculateRemoveColor(empty_result) {
            const servPrice = parseInt(document.getElementById('colorPrice'+empty_result).value);
            const substotal = parseInt($('#items-subtotal').val());
            var total = 0;
            total = substotal - servPrice;
            document.getElementById("items-subtotal").value = total;
            document.getElementById("subtotals").innerHTML = NumberComms.format(total)+".00";
    
        }
    });

    

    function copyColor(colorPrice)
    {
        // var colorHex = String(document.getElementById("color_hexcode").value);
        var c1 =  String(document.getElementById("c1").value);
        var c2 =  String(document.getElementById("c2").value);
        var c3 =  String(document.getElementById("c3").value);
        var colorName = String(document.getElementById("color_result").value);
        var cName = document.getElementById("color_result").value.split(" ").join("");

        var text = '--- PAINT COLOR ---' + '\r\n' +
            'Name: ' + colorName + '\r\n' +
            'Mixture: ' + c1 + ' - ' + c2 + ' - ' + c3 + '\r\n' +
            'Value: ' + NumberComms.format(colorPrice) + '.00'+'\n\n';
        
        const color_ul = document.querySelector(".list-group"); //ul 

        const color_main = document.createElement("div"); //a
        color_main.classList.add("list-group-item");
        color_main.classList.add("list-group-item-action");
        color_main.id = "color-list-main"+cName;
        color_ul.appendChild(color_main);

        const color_header = document.createElement("div");
        color_header.classList.add("d-flex");
        color_header.classList.add("w-100");
        color_header.classList.add("justify-content-between");
        color_main.appendChild(color_header);

        const color_h6 = document.createElement("h6");
        color_h6.innerText = colorName;
        color_h6.classList.add("mb-1");
        color_header.appendChild(color_h6);

        const color_span = document.createElement("span");
        color_span.innerHTML = '<i class="bi bi-x-circle"></i>';
        color_span.id = "color-remove-list"+cName;
        color_span.classList.add("cursor-pointer");
        color_span.classList.add("turndown");
        color_header.appendChild(color_span);
     
        const color_p = document.createElement("p");
        color_p.innerHTML = "Mixture: "+c1+" - "+c2+" - "+c3;
        color_p.classList.add("mb-1");
        color_main.appendChild(color_p);
    
        const color_header2 = document.createElement("div");
        color_header2.classList.add("d-flex");
        color_header2.classList.add("w-100");
        color_header2.classList.add("justify-content-between");
        color_main.appendChild(color_header2);

        const color_small = document.createElement("small");
        color_small.innerText = "Category: Paint Colors";
        color_small.classList.add("text-muted");
        color_header2.appendChild(color_small);

        const color_p2 = document.createElement("p");
        color_p2.innerHTML = "&#8369;" + NumberComms.format(colorPrice) + ".00";
        color_p2.value = colorPrice;
        color_p2.id = "colorPrice"+cName;
        color_p2.classList.add("mb-1");
        color_header2.appendChild(color_p2);

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.classList.add("final-list");
        textarea.classList.add("hid");
        color_main.appendChild(textarea);
        
        
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

        // one color 
        if (first_number == "Blue" || second_number == "Blue" || third_number == "Blue")
        {
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue"  ? 850.00 : 0);
            var totalPrice = price1 + price2 + price3;
            var result = "BLUE";
            var price = totalPrice;
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
        if (first_number == "Green" || second_number == "Green" || third_number == "Green")
        {
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var result = "GREEN";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
        if (first_number == "Yellow" || second_number == "Yellow" || third_number == "Yellow")
        {
            var price1 = (first_number == "Yellow"  ? 850.00 : 0);
            var price2= (second_number == "Yellow" ? 850.00 : 0);
            var price3 = (third_number == "Yellow" ? 850.00 : 0);
            var result = "YELLOW";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
        if (first_number == "Red" || second_number == "Red" || third_number == "Red")
        {
            var price1 = (first_number == "Red"  ? 850.00 : 0);
            var price2= (second_number == "Red" ? 850.00 : 0);
            var price3 = (third_number == "Red" ? 850.00 : 0);
            var result = "RED";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
        if (first_number == "White" || second_number == "White" || third_number == "White")
        {
            var price1 = (first_number == "White"  ? 850.00 : 0);
            var price2= (second_number == "White" ? 850.00 : 0);
            var price3 = (third_number == "White" ? 850.00 : 0);
            var result = "WHITE";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
        if (first_number == "Black" || second_number == "Black" || third_number == "Black")
        {
            var price1 = (first_number == "Black"  ? 850.00 : 0);
            var price2= (second_number == "Black" ? 850.00 : 0);
            var price3 = (third_number == "Black" ? 850.00 : 0);
            var result = "BLACK";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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

        // color mixer 
        if (first_number == "Blue" && second_number == "Blue" && third_number == "Blue"||
            first_number == "Blue" && second_number == "Blue" ||
            first_number == "Blue" && third_number == "Blue" ||
            second_number == "Blue" && third_number == "Blue")
        {
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue"  ? 850.00 : 0);
            var totalPrice = price1 + price2 + price3;
            var result = "BLUE";
            var price = totalPrice;
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
            first_number == "Red" && third_number == "Blue" )
        {
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue" ? 850.00 : 0);
            var price4 = (first_number == "Red"  ? 850.00 : 0);
            var price5= (second_number == "Red" ? 850.00 : 0);
            var price6 = (third_number == "Red" ? 850.00 : 0);
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var result = "PURPLE";
            var price = totalPrice;
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
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue" ? 850.00 : 0);
            var price4 = (first_number == "Yellow"  ? 850.00 : 0);
            var price5= (second_number == "Yellow" ? 850.00 : 0);
            var price6 = (third_number == "Yellow" ? 850.00 : 0);
            var result = "GREEN";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue" ? 850.00 : 0);
            var price4 = (first_number == "White"  ? 850.00 : 0);
            var price5= (second_number == "White" ? 850.00 : 0);
            var price6 = (third_number == "White" ? 850.00 : 0);
            var result = "LIGHT BLUE";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Blue"  ? 850.00 : 0);
            var price2= (second_number == "Blue" ? 850.00 : 0);
            var price3 = (third_number == "Blue" ? 850.00 : 0);
            var price4 = (first_number == "Black"  ? 850.00 : 0);
            var price5= (second_number == "Black" ? 850.00 : 0);
            var price6 = (third_number == "Black" ? 850.00 : 0);
            var result = "YVES KLEIN BLUE";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var result = "GREEN";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var price4 = (first_number == "Red"  ? 850.00 : 0);
            var price5= (second_number == "Red" ? 850.00 : 0);
            var price6 = (third_number == "Red" ? 850.00 : 0);
            var result = "YELLOW";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var price4 = (first_number == "Blue"  ? 850.00 : 0);
            var price5= (second_number == "Blue" ? 850.00 : 0);
            var price6 = (third_number == "Blue" ? 850.00 : 0);
            var result = "AQUA";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var price4 = (first_number == "Yellow"  ? 850.00 : 0);
            var price5= (second_number == "Yellow" ? 850.00 : 0);
            var price6 = (third_number == "Yellow" ? 850.00 : 0);
            var result = "LUCKY LIME";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var price4 = (first_number == "White"  ? 850.00 : 0);
            var price5= (second_number == "White" ? 850.00 : 0);
            var price6 = (third_number == "White" ? 850.00 : 0);
            var result = "ULVA LACTUCA GREEN";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Green"  ? 850.00 : 0);
            var price2= (second_number == "Green" ? 850.00 : 0);
            var price3 = (third_number == "Green" ? 850.00 : 0);
            var price4 = (first_number == "Black"  ? 850.00 : 0);
            var price5= (second_number == "Black" ? 850.00 : 0);
            var price6 = (third_number == "Black" ? 850.00 : 0);
            var result = "HUNTER GREEN";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Yellow"  ? 850.00 : 0);
            var price2= (second_number == "Yellow" ? 850.00 : 0);
            var price3 = (third_number == "Yellow" ? 850.00 : 0);
            var result = "YELLOW";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
            var price1 = (first_number == "Yellow"  ? 850.00 : 0);
            var price2= (second_number == "Yellow" ? 850.00 : 0);
            var price3 = (third_number == "Yellow" ? 850.00 : 0);
            var price4 = (first_number == "Red"  ? 850.00 : 0);
            var price5= (second_number == "Red" ? 850.00 : 0);
            var price6 = (third_number == "Red" ? 850.00 : 0);
            var result = "ORANGE";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Yellow"  ? 850.00 : 0);
            var price2= (second_number == "Yellow" ? 850.00 : 0);
            var price3 = (third_number == "Yellow" ? 850.00 : 0);
            var price4 = (first_number == "White"  ? 850.00 : 0);
            var price5= (second_number == "White" ? 850.00 : 0);
            var price6 = (third_number == "White" ? 850.00 : 0);
            var result = "WINTER DUVET";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Yellow"  ? 850.00 : 0);
            var price2= (second_number == "Yellow" ? 850.00 : 0);
            var price3 = (third_number == "Yellow" ? 850.00 : 0);
            var price4 = (first_number == "Black"  ? 850.00 : 0);
            var price5= (second_number == "Black" ? 850.00 : 0);
            var price6 = (third_number == "Black" ? 850.00 : 0);
            var result = "HEART GOLD";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Red"  ? 850.00 : 0);
            var price2= (second_number == "Red" ? 850.00 : 0);
            var price3 = (third_number == "Red" ? 850.00 : 0);
            var result = "RED";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
            var price1 = (first_number == "Red"  ? 850.00 : 0);
            var price2= (second_number == "Red" ? 850.00 : 0);
            var price3 = (third_number == "Red" ? 850.00 : 0);
            var price4 = (first_number == "White"  ? 850.00 : 0);
            var price5= (second_number == "White" ? 850.00 : 0);
            var price6 = (third_number == "White" ? 850.00 : 0);
            var result = "PINK";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Red"  ? 850.00 : 0);
            var price2= (second_number == "Red" ? 850.00 : 0);
            var price3 = (third_number == "Red" ? 850.00 : 0);
            var price4 = (first_number == "Black"  ? 850.00 : 0);
            var price5= (second_number == "Black" ? 850.00 : 0);
            var price6 = (third_number == "Black" ? 850.00 : 0);
            var result = "SCAB RED";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "White"  ? 850.00 : 0);
            var price2= (second_number == "White" ? 850.00 : 0);
            var price3 = (third_number == "White" ? 850.00 : 0);
            var result = "WHITE";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
            var price1 = (first_number == "White"  ? 850.00 : 0);
            var price2= (second_number == "White" ? 850.00 : 0);
            var price3 = (third_number == "White" ? 850.00 : 0);
            var price4 = (first_number == "Black"  ? 850.00 : 0);
            var price5= (second_number == "Black" ? 850.00 : 0);
            var price6 = (third_number == "Black" ? 850.00 : 0);
            var result = "GREY";
            var totalPrice = price1 + price2 + price3 + price4 + price5 + price6;
            var price = totalPrice;
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
            var price1 = (first_number == "Black"  ? 850.00 : 0);
            var price2= (second_number == "Black" ? 850.00 : 0);
            var price3 = (third_number == "Black" ? 850.00 : 0);
            var result = "BLACK";
            var totalPrice = price1 + price2 + price3;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#40c2550";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#40c2550";
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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
            var totalPrice = 2550;
            var price = totalPrice;
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

        if (first_number == "none")
        {
            // $("#copyColor").prop("disabled", true);
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "#eee";
                }
            });
            
        }
        if (second_number == "none")
        {
            // $("#copyColor").prop("disabled", true);
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = "#eee";
                }
            });
            
        }
        if (third_number == "none")
        {
            // $("#copyColor").prop("disabled", true);
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '4p') {
                    document.getElementById("color_4").style.background = "#eee";
                }
            });
            
        }
        if (first_number == "none" && second_number == "none" && third_number == "none")
        {
            // $("#copyColor").prop("disabled", true);
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#eee";
                }
                document.getElementById("color_result").value = "";
                document.getElementById("color_price").value = "";
                document.getElementById("color_hexcode").value = "";
            });
            
        }

        if (empty_result == "" && empty_price == "" ) {
            Swal.fire({
                title: 'Select at least 1 color!',
                text: '',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }

    }
    
    
})();