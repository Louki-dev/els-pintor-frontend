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
      <link rel="shortcut icon" href="<?php echo Utilities::domain();?>/img/icon.png?v=<?php echo md5(uniqid(rand(), true));?>">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="<?php echo Utilities::domain();?>/js/bootstrap.bundle.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/sweetalert2.all.min.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/apis/list.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/script.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/defined/login.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <script src="<?php echo Utilities::domain();?>/js/preload.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <title>Els Pintor</title>
  </head>
  
  <body>
<section class="login-bg" id="login-bg">

<div id="loader"></div>
<div id="content">

  <div class="top_nav">
    
    <div class="container d-flex justify-content-center py-3 ">

        <a href="login.php" class="logo fs-3"><i class="fas fa-paint-roller"></i> ELS PINTOR</a>
    </div>
  </div>

  <div class="login-form shadow ">
    <h2 class="p-3 mb-4"><i class="fas fa-brush login_icon fs-5"></i><span class="opacity-75 fs-4">ADMIN</span></h2>
    <form>
      <div class="txt_field2">
        <input type="text" id="username" required>
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field2">
        <input type="password" id="password" required>
        <span></span>
        <label>Password</label>
      </div>
      <input type="button" id="login" value="Login">
    </form>
    <hr>
    <p><center><a href="sacc.php" class="text-decoration-none txt_decor">Forgot password?</a></center></p>
  </div>

</div>
</section>
</body>
</html>
