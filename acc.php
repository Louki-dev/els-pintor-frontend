<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body>
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<main>
<div class="content-section custom-m mt-5">
<div class="container">
    
   
        <div class="card shadow pt-4">
            <h5 class="ps-4"><i class="fas fa-user-cog"></i> Account Settings</h5><hr>
        <div class="card-body">
            <div class="container row row-cols-2 row-cols-sm-2 row-cols-lg-2">

                <div class="col mb-5">
                <div class="list-group">
                <a href="" class="list-group-item pending">Personal Settings</a>
                <a href="cpass.php" class="list-group-item" aria-current="true">Change Password</a>
                </div>
                </div>


                <div class="col">
                    <div id="user_data" class="edit-user" id="e-user"></div>
                </br>
                    <div class="d-grid gap-2 mb-5 mt-4">
                        <button type="button" class="btn btn-outline-primary mt-3 mb-2 input_button" data-bs-toggle="modal" data-bs-target="#confirm-user-modal" disabled>Save Changes</button>
                    </div>
               
                </div>
            </div>
            
        </div>
        </div>

</div>
</div>
</main>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/confirm-pass.modal.inc.php";
?>
</body>
</html>
