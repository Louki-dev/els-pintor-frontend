<?php require_once __DIR__ . "/include/index-header.inc.php";?>

</head>
    <body class="bg-white">

<div id="loader"></div>
<div id="content">

<!-- header section starts  -->

<header class="header">
    <a href="" class="logo text-decoration-none"><i class="fas fa-paint-roller"></i> ELS PINTOR</a>
    
    <div class="icons"><!-- 
    <span class="" data-bs-toggle="modal" data-bs-target="#inq-modal" style="border-radius:0px; margin-bottom: 1px; padding-top: 15px; "><i style="margin-bottom: 1px;" class="fas fa-brush"></i></span> -->
    <div class="material-icons" data-bs-toggle="modal" data-bs-target="#inq-modal">maps_ugc</div>
        <!-- <div class="fas fa-paint-roller" data-bs-toggle="modal" data-bs-target="#inq-modal"></div> -->
        <div class="fas fa-bars" id="menu-btn"></div>

    </div>
    <nav class="navbar">
        <a href="#home" class="text-decoration-none">Home</a>
        <a href="#services"  class="text-decoration-none">Services</a>
        <a href="#gallery"  class="text-decoration-none">Products</a>
        <a href="#paint"  class="text-decoration-none">Paint Color</a>
        <a href="#about"  class="text-decoration-none">About</a>
        <a href="#footer"  class="text-decoration-none">Contact</a>
    </nav>
</header>
<!-- header section ends  -->

<!-- home section start  -->
<section class="home mt-5 pt-5" id="home">

   <div class="content">
        <h3>welcome to <span>els pintor</span></h3>
        <p>Els Pintor is a company where they offer house painting, car painting, varnish paint and services. They also sell paints which are located at Livingstone Village, San Isidro, Tagbilaran City. Els Pintor is a company where they meet the requirements of their clients to the highest expectations.</p>
        <!-- <a href="#footer" class="btn text-whtie">Contact Us</a> -->
    </div>

    <div class="image">
        <img src="img/home-img.png" alt="">
    </div>
</section>

<!-- home section ends -->






<!-- services section starts  -->
<hr class="container">
<section class="services" id="services">

<h1 class="heading mt-5 pt-5"> our <span>services</span> </h1>

<div class="box-container" id="services-list"></div>
<div id="serv_paginate" class="mb-5 mt-5 float-end"></div>
</section>

<hr class="container">
<!-- services section ends -->







<!-- gallery section starts  -->

<section class="gallery" id="gallery">

    <h1 class="heading"> our <span>products</span> </h1>

    <div class="box-container" id="products-list"></div>
    <div id="prod_paginate" class="mb-5 mt-5 float-end"></div>
</section>
<!-- gallery section ends -->

<hr class="container">


<!-- paint section starts -->
<section class="paint" id="paint">
     <h1 class="heading"> our <span>paint colors</span> </h1>
<form>
<div class="box-container">
    <div class="box">
             <h3>Available Colors</h3>
<br>
        <div class="colors-palette">
            <div class="colors">
                <div class="color" id="1" style="background: #FF7715;"><label>1</label></div>
                <div class="color" id="2" style="background: #FF7F50;"><label>2</label></div>
                <div class="color" id="3" style="background: #6495ED;"><label>3</label></div>
                <div class="color" id="4" style="background: #DC143C;"><label>4</label></div>
                <div class="color" id="5" style="background: #FFD700;"><label>5</label></div>
                <div class="color" id="6" style="background: #CD5C5C;"><label>6</label></div>
                <div class="color" id="7" style="background: #87CEFA;"><label>7</label></div>
                <div class="color" id="8" style="background: #00FA9A;"><label>8</label></div>
                <div class="color" id="9" style="background: #FFDAB9;"><label>9</label></div>
                <div class="color" id="10" style="background: #DDA0DD;"><label>10</label></div>
                <div class="color" id="11" style="background: #6A5ACD;"><label>11</label></div>
                <div class="color" id="12" style="background: #FFE4E1;"><label>12</label></div>
            </div>
        </div>
    </div>
    <div class="box">
           <h3>Color Mixer<button type="reset" id="color_reset"class="btn1 float-end" style=" border-radius: 20px;height: 30px; width: 100px;" >Reset</button></h3>

        <br>
        <div class="row">
            <div class="col">
                    <div class="mixer">     
                        <div class="colors">
                            <div class="color-mix mb-3 mt-3"data-color="1p" id="color_1"><label>Color 1</label>
                            </div>
                        </div>
                    </div>
                     <select id="1stpick" style=" border-radius: 6px; width:100%; margin-top: 5px; height: 30px; display: flex; border: solid 2px #dddddd;">
                        <option value="none">Choose Color 1</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="ghostwhite">White</option>
                        <option value="black">Black</option>
                    </select>
            </div>
            
            <div class="col">
                 <div class="mixer">     
                    <div class="colors">
                        <div class="color-mix mb-3 mt-3" data-color="2p" id="color_2"><label>Color 2</label>
                        </div>
                    </div>
                </div>

                <select id="2ndpick" style=" border-radius: 6px; width:100%; margin-top: 5px; height: 30px; display: flex;border: solid 2px #dddddd;">
                    <option value="">Choose Color 2</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="ghostwhite">White</option>
                    <option value="black">Black</option>
                </select>

            </div>

            <div class="col">
                 <div class="mixer">     
                    <div class="colors">
                        <div class="color-mix mb-3 mt-3" data-color="4p" id="color_4"><label>Color 3</label>
                        </div>
                    </div>
                </div>

                <select id="3rdpick" style=" border-radius: 6px; width:100%; margin-top: 5px; height: 30px; display: flex;border: solid 2px #dddddd;">
                    <option value="">Choose Color 3</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="ghostwhite">White</option>
                    <option value="black">Black</option>
                </select>

            </div>

        </div>


<div class="row">
            <div class="col">


    <div class="mixer mt-4">     
            <div class="colors">
                <div class="color-mix" data-color="3p" id="color_3"><label>Result</label></div>
            </div>   
        </div>
<!-- 
                <button type="button" id="copyColor"class="btn1" style="background; margin-left: 10px; border-radius: 20px; margin-top: 5px; height: 30px;" >Reset</button> -->
</div>

<div class="col">
    
      <input type="text" id="color_hexcode" hidden style="background: #eee;"><br>
      <input type="hidden" id="c1">
      <input type="hidden" id="c2">
      <input type="hidden" id="c3">
                <input class="mb-2 bg-white" type="text" disabled id="color_result" placeholder="Paint Color" style="background: #eee; width: 100%; height: 40px; text-align: center; justify-content: center; border-radius: 6px; border: solid 2px #dddddd;">

                <input class="mb-1 bg-white" type="text" disabled id="color_price" placeholder="Price" style="background: #eee; width: 100%; height: 40px; text-align: center; justify-content: center; border-radius: 6px; border: solid 2px #dddddd;">

                <button type="button" id="copyColor"class="btn1" style="  border-radius: 6px; height: 30px; width: 100%;" >Add to Inquiry<div class="material-icons fs-5 ms-2">maps_ugc</div></button>
                  
</div>

</div>
            </div>
        </div>
    </div>
</form>

    </div>



</section>
<!-- paint section ends -->

<hr class="container">

<!-- about section starts -->
<section class="about" id="about">

    <div class="box-container">

        <div class="box">

    <h1 class="heading"> about <span>els pintor</span> </h1>

    <div class="column">

    <div class="image">
        <img src="img/brs.png">
    </div>
        <div class="content">
            <h3>The owner of this business is Mr. Emil Simbajon.</h3>
            <p> Mr. Emil Simbajon shares that he started this business around the year 1999 and has a capital of 30,000 pesos. And his first project was in the Island city mall(ICM) which is one of the known malls in Bohol. This company is already tied up to Alturas group Company.</p>
            <p>Their service is manpower which means it depends on how many workers are available to work on the new project or how big the project is to work with many workers. For the meantime, Mr. Emil Simbajon does not have  stable workers but he has a leadmans where he sends important information and is also in charge of gathering or recruiting workers to work on the said project.</p>
            <!-- <button class="btn pending_header text-white fs-5" data-bs-toggle="modal" data-bs-target="#inq-modal">Make An Inquiry</button> -->
        </div>

    </div>
</div>
</div>

</section>

<!-- about section ends -->

<!-- footer section starts  -->

<section class="footer shadow-lg" id="footer">

    <div class="box-container">

        <div class="box mt-5 pt-5">
            <h3 class="">Contact Info</h3>
             <a href="#" class="text-decoration-none"> <i class="fas fa-phone"></i> +0947-897-0835 </a>
            <a href="#" class="text-decoration-none"> <i class="fas fa-phone"></i> +0906-944-5124 </a>
            <a href="#" class="text-decoration-none"> <i class="fas fa-envelope"></i> pawercapstone@gmail.com </a>
            <a href="#" class="text-decoration-none"> <i class="fas fa-map-marker-alt"></i> San Isidro, Tagbilaran City, bohol - 6300 </a>
            
        </div>

        <div class="box mb-5 pb-5">
            <h3 class="text-white">Our Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.33478911981!2d123.87814656873488!3d9.673889838658607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4c02c7e8bcf7%3A0xcf31ffb8b8911634!2sSan%20Isidro%2C%20Tagbilaran%20City%2C%20Bohol!5e0!3m2!1sen!2sph!4v1628495001520!5m2!1sen!2sph" width="98%" height="398px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </section>
</div>
   
    </div>

    <center><div class="credit p-2" style="background: white;"> &copy; copyright @ 2021 by <span>Pawer Capstone</span> </div></center>

</section>

<!-- footer section ends -->
</div>

<?php
require_once __DIR__ . "/include/create-inquiry.modal.inc.php";
?>
</body>
</html>