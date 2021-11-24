<?php require __DIR__ . "/include/utilities/Utilities.php";?>
<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/frontend/css/bootstrap.min.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/frontend/css/sweetalert2.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/frontend/css/style.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="<?php echo Utilities::domain();?>/frontend/js/bootstrap.bundle.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/frontend/js/sweetalert2.all.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/frontend/js/apis/list.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/frontend/js/script.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/frontend/js/preload.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>

      <title>Else Pintor</title>
  </head>
  
  <body>
<section id="login-bg">

<div id="loader"></div>
<div id="content">


    <div class="card shadow centerss container">
    <h5 class="card-header fw-bold bg-white p-3">Find Your Account</h5>
    <div class="card-body">
        <p class="card-text">Please enter your email to search for your account.</p>

        <input type="text" class="form-control">
        <div class="modal-footer mt-4 pb-0 mb-0 pe-0">
            <a type="button" href="login.php" class="btn btn-secondary">Cancel</a>
            <button type="button" class="btn pending_header text-white">Search</button>
        </div>
    </div>
    </div>

</div>

</section>
</body>
</html>
