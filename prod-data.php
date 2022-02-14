<?php require_once __DIR__ ."/include/header.inc.php";?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
    <body id="prod_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<div class="container-design-2 mt-0">
<div class="container-md">
<div class="row row-cols-1 row-cols-sm-1 row-cols-lg-1 g-3">

        <!-- first column -->
<div class="col mb-5 mt-4">
    <p class="mt-5 fs-3 animate__animated animate__fadeIn">
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary" id="prod-trig"><i class="bi bi-bucket-fill"></i> Products</button>
    <button type="button" class="btn btn-outline-primary" id="serv-trig"><i class="bi bi-paint-bucket"></i> Services</button>
    </div>
    <button type="add" class="btn btn-primary float-end animate__animated animate__fadeInRight" id="prod-trig2" data-bs-toggle="modal" data-bs-target="#newProduct"> Add Product</button>
    <button type="add" class="btn btn-primary float-end animate__animated animate__fadeInRight" id="serv-trig2" data-bs-toggle="modal" data-bs-target="#newService"> Add Service</button>
    </p>

    <hr class="mb-4">

    <div id="products_section">
        <form class="g-3 mb-4">
        <div class="input-group rounded-pill flex-nowrap">
        <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
        <input type="text" class="form-control" id="search_p" placeholder="Search by product name">
        </div>
        </form>

        <table class="table-7">
            <thead>
                <tr class="pending_header text-light ">
                    <th scope="col"></th>
                    <th scope="col">PRODUCTS</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody id="product-list-data" class="animate__animated animate__fadeIn"></tbody>
        </table>
        <div id="product-list-data-paginate" class="mb-0 mt-3 animate__animated animate__fadeInDown"></div>
    </div>

        

    <!-- 2nd column -->
    <div id="services_section">
        <form class="g-3 mb-4">
        <div class="input-group rounded-pillflex-nowrap">
        <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
        <input type="text" class="form-control" id="search_s" placeholder="Search by service name">
        </div>
        </form>
        <table class="table-7">
            <thead>
                <tr class="pending_header text-light">
                    <th scope="col"></th>
                    <th scope="col">SERVICES</th>
                    <!-- <th scope="col">SERVICE DESCRIPTION</th> -->
                    <th scope="col">PRICE RATE</th>
                    <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody id="service-list-data" class="animate__animated animate__fadeIn"></tbody>
        </table>
        <div id="service-list-data-paginate" class="mb-0 mt-3 animate__animated animate__fadeInDown"></div>
    </div>   
</div>

</div>
</div>
</div>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ ."/include/create-service.modal.inc.php";
require_once __DIR__ ."/include/create-product.modal.inc.php";
require_once __DIR__ ."/include/update-service.modal.inc.php";
require_once __DIR__ ."/include/update-product.modal.inc.php";
require_once __DIR__ . "/include/confirm-admin.modal.inc.php";
?>
</body>
</html>