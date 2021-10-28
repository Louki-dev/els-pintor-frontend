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
      <script src="<?php echo Utilities::domain();?>/frontend/js/defined/login.js?v=<?php echo md5(uniqid(rand(), true));?>"></script>
      <title>Else Pintor</title>
  </head>
  
  <body>
    <!-- <div class="jumbotron text-center vertical-center">
      <div class="container">
          <main>
            <div>
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="text" id="username" class="form-control" id="floatingInput" placeholder="username">
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating">
                <input type="password" id="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" id="login" type="button">Sign in</button>
            </div>
          </main>
      </div>
    </div> -->
    
    <div class="login-form">
      <h2><i class="fas fa-brush login_icon"></i> LOGIN</h2>
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
    </div>
  </body>
</html>
