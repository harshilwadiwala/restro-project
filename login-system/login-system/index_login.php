
<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="style_login.css">
   
    
  </head>
  <body>
    <div class="login-container">
      <h2>Login</h2>

      

      <div class="login-option">
        
        <p>Don't have an account?<br> <a href="index_signup.php">Sign Up</a></p>
      
      </div>

      

      <h2>Welcome</h2>

      <form action="login.php" method="post" id="login" onsubmit="login(event)">
        <div class="form-group">
        
          <label for="username"placeholder="Username"></label>
          <input
            type="text"
            class="form_input1"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <div class="form_input1--error-message"></div>
        </div>
       
        <div class="form_message"></div>
        <div class="form-group">
          <label for="password"></label>
          <input
            type="password"
            class="form_input1"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="form_button">LOGIN</button>
      </form>
    </div>
<!-- <script src="script.js"></script> -->
  </body>
</html>


