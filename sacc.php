<?php require __DIR__ . "/include/utilities/Utilities.php";?>
<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/css/bootstrap.min.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/css/sweetalert2.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link rel="stylesheet" href="<?php echo Utilities::domain();?>/css/style.css?v=<?php echo md5(uniqid(rand(), true));?>"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link rel="shortcut icon" href="<?php echo Utilities::domain();?>img/icon.png?v=<?php echo md5(uniqid(rand(), true));?>">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="<?php echo Utilities::domain();?>/js/bootstrap.bundle.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/sweetalert2.all.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/apis/list.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/script.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/preload.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/defined/rst.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <title>Else Pintor</title>
  </head>
  
  <body>
<section id="login-bg">

<div id="loader"></div>
<div id="content">


    <div class="card shadow centerss container">
    <h5 class="card-header fw-bold bg-white p-3">Find Your Account</h5>
    <div class="card-body">
        <p class="card-text">Please enter your email account.</p>

        <input type="text" id="srch_email" class="form-control" placeholder="abcd@email.com" autofocus>

        <div class="modal-footer mt-4 pb-0 mb-0 pe-0">
            <a type="button" href="login.php" class="btn btn-secondary">Cancel</a>
            <button type="button" id="srch_email_submit" class="btn btn-primary">Search</button>
        </div>
    </div>
    </div>

</div>

</section>
</body>
</html>
