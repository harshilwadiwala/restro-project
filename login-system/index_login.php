

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style_index_login.css">
    <title>LOGIN</title>
</head>
<body>
<div class="login-container">
<h2>Login</h2>

<div class="login-option">
        <p>Don't have an account?<br> <a href="signup.php">Sign Up</a></p>
        <h2>Welcome</h2>
      </div>
     <form action="login.php" method="post" id="login" onsubmit="login(event)">
     <div class="form-group">
     
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label for="username"placeholder="Username"></label>
     	<input type="text" class="form_input1"   id="username" name="uname" placeholder="Enter your username"><br>
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
          /><br>
        </div>

        <button type="submit" class="form_button">LOGIN</button>
       
          
     </form>
        </div>
</body>
</html>