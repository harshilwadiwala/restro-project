<!DOCTYPE html>
<html>
<head>
	<title>SIGN UP</title>
	<link rel="stylesheet" type="text/css" href="style_signup.css">
</head>
<body>
   
    <div class="signup-container">
        <h2>SIGN UP</h2>
     <form action="signup-check.php"  method="post" >
     	
     <div class="form_input--error-message">
     <?php if (isset($_GET['error'])) { ?>

     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
          

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>
          </div>
          <div class="form-group">
          <label for="Name"></label>
          <div class="form_input--error-message">
          <?php if (isset($_GET['name'])) { ?>
               <input type="text" 
                      name="name" 
                      class="form_input2" id="name" 
                      placeholder="Enter Name"
                      value="<?php echo $_GET['name']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="name"
                      class="form_input2" id="User_name"  
                      placeholder="Enter Name"><br>
          <?php }?>
          </div>
          </div>

            <div class="form-group">
          <label for="username"></label>
          <div class="form_input--error-message">
          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" 
                      name="uname"
                      class="form_input2" id="User_name" 
                      placeholder="Enter User Name"
                      value="<?php echo $_GET['uname']; ?>"><br>
          <?php }else{ ?>
               <input type="text" 
                      name="uname" 
                      class="form_input2" id="User_name" 
                      placeholder="User Name"><br>
          <?php }?>
          </div>
          </div>


     	 <div class="form-group">
           <div class="form_input--error-message">
        <label for="password"></label>
        <input type="password" class="form_input2" id="password" name="password"  placeholder="Enter your password">
        </div>
      </div>
      <br>
            <div class="form-group">

            
          <label for="repassword"></label>
          <div class="form_input--error-message">
          <input  type="password"
                id="passwordagain"
                class="form_input2"
                 name="re_password" 
                placeholder="Again Enter The  Password"><br>
                </div>
                
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
</body>
</html>