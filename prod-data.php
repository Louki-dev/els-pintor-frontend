<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="prod_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<div class="container-design">
<div class="container-md">
<div class="row row-cols-1 row-cols-sm-1 row-cols-xl-2 g-3">

    <div class="col">
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


    <div class="col mb-4">
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