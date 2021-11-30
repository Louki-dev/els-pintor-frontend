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
                <a href="acc.php" class="list-group-item">
                    Personal Settings
                </a>
                <a href="" class="list-group-item pending" aria-current="true">Change Password</a>
                </div>
                </div>


                <div class="col">
                <form>
                    <div id="id-pass"></div>
                    <label class="label mb-1">Current Password </label>
                    <div class="group input-group mb-3">
                        <input type="password" class="form-control bg-white curt_pass" id="old_pass" placeholder="" disabled>
                        <span class="input-group-text pending_header text-white" id="edit_pass" style="cursor:pointer;">Change</span>
                    </div>
                    <div class="group">
                        <label class="label mb-1">New Password *</label>
                        <input type="password" class="form-control bg-white nw_pass" id="new_pass" placeholder="" disabled>
                    </div>
                
                </br>
                    <div class="d-grid gap-2 mb-5 mt-4">
                        <button type="button" class="btn btn-outline-primary mt-3 mb-2 val-button" data-bs-toggle="modal" data-bs-target="#confirm-pass-modal" disabled>Save Changes</button>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
        </div>

</div>
</div>
</main>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/confirm-newpass.modal.inc.php";
require_once __DIR__ . "/include/confirm-sk.modal.inc.php";
?>
</body>
</html>
