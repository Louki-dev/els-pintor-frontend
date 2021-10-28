<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="prod_page">
    <div class="navigation">
        <nav class="navbar navbar-light navbar-expand-lg pending_header">
            <div class="container-fluid">
                <a class="navbar-brand" class="text-white" href="#">DASHBOARD</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button class="nav-link btn btn-sm text-white" id="logout">
                            <span class="material-icons material-icons-outlined">
                                logout
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>


<div class="container-design">
<div class="container-md">
<div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-3">

    <div class="col">
    <div class="mt-5 pb-3 float-end">
    <button type="add" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newService"> New Services +</button>
    </div>
        <table class="table-7">
            <thead>
                <tr class="pending_header text-light">
                    <th scope="col">SERVICE NAME</th>
                    <th scope="col">SERVICE DESCRIPTION</th>
                    <th scope="col">SERVICE PRICE</th>
                </tr>
            </thead>
            <tbody id="service-list-data"></tbody>
        </table>
    </div>


    <div class="col mb-4">
    <div class="mt-5 pb-3 float-end">
    <button type="add" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProduct"> New Products +</button>
    </div>
        <table class="table-7">
            <thead>
                <tr class="pending_header text-light">
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">PRODUCT PRICE</th>
                </tr>
            </thead>
            <tbody id="product-list-data"></tbody>
        </table>
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
?>
</body>
</html>