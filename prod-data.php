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
     <!-- <div class="container-design-2"> 
        <ul>
      <li>
    <div>
    <table class="table-7">
        <thead>
            <tr>
            <th scope="col">Service Name</th>
            <th scope="col">Service Description</th>
            <th scope="col">Service Price</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
  
        <tbody>
            <tr>
            'checkbox' in the checkbox class is the trigger for checked/unchecked all checkboxes
           
            <td><img src="" class="rounded-circle me-3" alt="..." height="30" width="30"/>Title</td>
            <td>Sample text</td>
            <td>3000 PHP</td>
            <td><a href="" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editservice">Edit</a></td>
             -->

    <!-- UPDATE SERVICE Modal -->
    <!-- <div class="modal fade" id="editservice" tabindex="-1" aria-labelledby="editservicelLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header bg-dark">
            <h5 class="modal-title text-white" id="editserviceLabel">Service No. 1</h5>
            <button type="button" class="btn-close bg-white rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
            <div class="modal-body">
                <div class="container">
                    <input type="text" id="serv_id" hidden>
                    <div class="mb-3">
                        <label for="serv_name" class="form-label">Name of Service:</label>
                        <input type="text" class="form-control"  id="serv_name" required>
                    </div>
                    <div class="mb-3">
                        <label for="serv_description" class="form-label">Description:</label>
                        <textarea class="form-control"  id="serv_description" rows="4" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="serv_price" class="form-label">Price Rate:</label>
                        <input class="form-control" type="number"  id="serv_price" required>
                    </div>
                </div>
            </div><hr>
            <div class="container d-grid gap-2 mb-4">
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </tr>
        </tbody>

</table>
           </div>
               
    <div> -->
    <!-- NEW SERVICE Modal -->
        <!-- <div class="modal fade" id="newservice" tabindex="-1" aria-labelledby="newservicelLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="newserviceLabel">New Service</h5>
                <button type="button" class="btn-close bg-white rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="container">
                        <div class="mb-3">
                            <label for="serv_name" class="form-label">Name of Service:</label>
                            <input type="text" class="form-control" id="serv_name" required>
                        </div>
                        <div class="mb-3">
                            <label for="serv_description" class="form-label">Description:</label> 
                            <textarea class="form-control"  id="serv_description" rows="4" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="serv_price" class="form-label">Price Rate:</label><span> 
                            <input class="form-control" type="number" id="serv_price" required>
                        </div>
                        <div class="mb-3">
                            <label for="serv_image" class="form-label">Upload Image File:</label> 
                            <input class="form-control" type="file"  id="serv_image" required>
                        </div>
                    </div>
                </div><hr>
                <div class="container d-grid gap-2 mb-4">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </div> -->


<!-- 
    <table class="table-8">
        <thead>
            <tr>
    
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            <td><img src="" class="rounded-circle me-3" alt="..." height="30" width="30"/>product name</td>
            <td>Php 2000</td>
            <td><a href="" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editproduct">Edit</a>
            <input type='submit' class="btn btn-danger" value='Delete' name='but_delete'></td> -->
            
    <!-- UPDATE PRODUCT Modal -->
        <!-- <div class="modal fade" id="editproduct" tabindex="-1" aria-labelledby="editproductlLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="editproductLabel">Product No.</h5>
                <button type="button" class="btn-close bg-white rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
                <div class="modal-body">
                        <div class="container">
                            <input type="text" id="prod_id" hidden>
                            <div class="mb-3">
                                <label for="prod_name" class="form-label">Product Name:</label>
                                <input type="text" class="form-control"  id="prod_name" required>
                            </div>
                            <div class="mb-3">
                                <label for="prod_price" class="form-label">Product Price:</label>
                                <input type="number" class="form-control"  id="prod_price" step="any" required>
                            </div>
                        </div>
                </div><hr>
                <div class="container d-grid gap-2 mb-4">
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
            </div>
        </div>
        </div>

    <div> -->

    <!-- NEW PRODUCT Modal -->
        <!-- <div class="modal fade" id="newproduct" tabindex="-1" aria-labelledby="newproductlLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="newproductLabel">New Product</h5>
                <button type="button" class="btn-close bg-white rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form  enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="container">
                        <div class="mb-3">
                            <label for="prod_name" class="form-label">Product Name:</label> 
                            <input type="text" class="form-control"  id="prod_name" required>
                        </div>
                        <div class="mb-3">
                            <label for="prod_price" class="form-label">Product Price:</label> 
                            <input type="number" class="form-control"  id="prod_price" required>
                        </div>
                        <div class="mb-3">
                            <label for="prod_image" class="form-label">Upload Image File:</label> 
                            <input class="form-control" type="file"  id="prod_image" required>
                        </div>
                    </div>
                </div><hr>
                <div class="container d-grid gap-2 mb-4">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </div>

     </tr>
                        </tbody>
                    </table>
                </div>
        </li>
</ul>
</div> -->




<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ ."/include/create-service.modal.inc.php";
require_once __DIR__ ."/include/create-product.modal.inc.php";
require_once __DIR__ ."/include/update-service.modal.inc.php";
?>
</body>
</html>