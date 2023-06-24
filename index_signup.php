<?php
require_once "config.php";
$username=$password=$email="";
$username_err=$password_err=$email_err="";
if($_SERVER['REQUEST_METHOD']=="POST"){
  //check if the username is empty
  if(empty(trim($_POST["username"]))){
    $username_err="Username cannot be blank";
  }
  else{
    $sql = "SELECT id FROM users WHERE username = ?";

    $stmt= mysqli_prepare($conn , $sql);
    if($stmt)
    {
      mysqli_stmt_bind_param($stmt,"s",$param_username);
      //set the value of param username
      $param_username=trim($_POST['username']);
      //Try to execute this statement
      if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_store_result($stmt);
        if(mysqli_stmt_num_rows($stmt)==1)
        {
          $username_err="Username already taken";
        }
        else{
          $username=trim($_POST['username']);
        }
      }
      else{
        echo "something went wrong";
      }
    }
  }
mysqli_stmt_close($stmt);

//check for password
if(empty(trim($_POST['password']))){
  $password_err="Password cannot be blank ";

}
elseif(strlen(trim($_POST['password']))<5){
  $password_err="Password cannot be less than 5 characters ";

}
else{
  $password=trim($_POST['password']);

}

//check for confirm field
 
//if there was no error , go ahead and insert into the database
if(empty($username_err)&& empty($password_err))
{
  $sql="INSERT INTO users (username,password) VALUES(?,?)";
  $stmt=mysqli_prepare($conn,$sql);
  if($stmt){
    mysqli_stmt_bind_param($stmt,"ss",$param_username,$param_password);
    //set these parameters
    $param_username=$username;
    $param_password=password_hash($password,PASSWORD_DEFAULT);

    //try to execute the query
    if(mysqli_stmt_execute($stmt))
    {
      header("Location:index_login.php");
    }
    else{
     echo "something went wrong.... cannot redirect!!";
    }
  }
  mysqli_stmt_close($stmt);
}
mysqli_close($conn);
} 
?>
<!DOCTYPE html>
<html>
<head>
  <title>Sign Up Page</title>
  <link rel="stylesheet" type="text/css" href="styles_signup.css">
  <link rel="stylesheet" href="script.js">
</head>
<body>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form action="" method="post" id="createAccount" onsubmit="login(event)">
      <div class="form-group">
        <label for="username"></label>
        <input type="text" class="form_input2" id="User_name" name="username" autofocus placeholder="Enter your username">
        <div class="form_input--error-message"></div>
      </div>
      <div class="form-group">
        <label for="email"></label>
        <input type="email" class="form_input2" id="email" name="email" autofocus placeholder="Enter your email">
        <div class="form_input--error-message"></div>
      </div>

      <div class="form-group">
        <label for="password"></label>
        <input type="password" class="form_input2" id="password" name="password" autofocus placeholder="Enter your password">
        <div class="form_input--error-message"></div>
      </div>
      <button type="submit" onclick="redirectToLogin()">Sign Up</button>
    </form>
    <div class="sign-up_option">
      <p>Already have an account 
       <a href="index_login.php">login</a>
       
      </p>
    </div>
  </div>

  <script>
    function redirectToLogin() {
      // Redirect to the login page
      window.location.href = "index_login.php";
    }
  </script>
  <script src="script.js"></script>
</body>
</html>