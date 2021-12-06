<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body>
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<main>
<div class="content-section custom-m mt-5 mb-5">
<div class="container">
    
   
        <div class="card shadow pt-4">
            <h4 class="ps-4 fw-bold"><i class="far fa-user"></i> Profile</h4><hr>
        <div class="card-body">
            <div class="container">

                <!-- <div class="col mb-5">
                <div class="list-group">
                <a href="" class="list-group-item pending">Personal Settings</a>
                <a href="cpass.php" class="list-group-item" aria-current="true">Change Password</a>
                </div>
                </div>


                <div class="col">
                    <div id="user_data" class="edit-user"></div>
                </br>
                    <div class="d-grid gap-2 mb-5 mt-4">
                        <button type="button" class="btn btn-outline-primary mt-3 mb-2 input_button" data-bs-toggle="modal" data-bs-target="#confirm-user-modal" disabled>Save Changes</button>
                    </div>
               
                </div> -->
            
                <div class="mb-4">
                    <h6 class="mb-4 pending fw-bold">ACCOUNT</h6>
                    <div class="">
                        <div id="user_data" class="edit-user"></div>
                    </div>
                    <div class="">
                        <form>

                            <div id="id-pass"></div>
                            <label class="label mb-1 mt-4 fw-bold">New Password <small style="font-size: 10px;">( LEAVE BLANK IF YOU DON'T WANT TO CHANGE )</small></label>
                            <div class="group input-group mb-3">
                                <input type="password" class="form-control bg-white curt_pass pending" id="new_pass" placeholder="NewPassword" disabled>
                                <span class="input-group-text pending_header text-white" id="edit_pass" style="cursor:pointer;">Edit</span>
                            </div>
                            <div class="group">
                                <label class="label mb-1 mt-4 fw-bold">Retype Password</label>
                                <input type="password" class="form-control bg-white nw_pass pending" id="retype_pass" placeholder="NewPassword" disabled>
                            </div>
                        
                        </br>
                            <div class="d-grid gap-2 mt-4">
                                <button type="button" class="btn btn-outline-primary mt-3 mb-2 input_button" data-bs-toggle="modal" data-bs-target="#confirm-user-modal" disabled>Save Changes</button>
                            </div>
                        </form>
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
