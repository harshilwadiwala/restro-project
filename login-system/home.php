<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="style_home.css">
</head>
<body>
<nav>
          <ul>
            <h2>Lost and Found</h2>
            <li><a href="index.php">Home</a></li>
            <li><a href="#">Post Items</a></li>
            <li><a href="#">Found Items</a></li>
            <li><a href="#">Report Lost Item</a></li>
            <li><a href="logout.php">logout</a></li>
          </ul>
        </nav>
        
        <form class="my-5" name="myform" method="post" enctype="multipart/form-data">

          <p>Item-name 
            <input type="text" name="name" placeholder="Enter item">
            <p>description
              <input type="text" name="description" placeholder="Enter description">
            </p>
            <p>Item type 
              <select name="select" id="select">
                <option >choose</option>
                <option >lost it</option>
                <option >found it</option>
              </select>
            </p>
            <p >Image input <br>

           <input type="file" name="image" class="form-control">

            
            </p>
            <p><input type="submit" name="upload" class="btn btn-success my-3" onclick="check(); return false;" ></p>
           
          </p>

         
        </form>
        <p id="f1"></p>
        <p id="f2"></p>
        <p id="f3"></p>
        <p id="f4"></p>
        <div class="contaniner1">
          <h1>Lost-Item</h1>
          
        
        </div>
        <div class="container2">
          <h1>Found-Item</h1>
         
        
        </div>
        <!-- Rest of your HTML content goes here -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 
        <script src="script_dashboard.js"></script>
     
</body>
</html>

<?php 
}else{
     header("Location: index_login.php");
     exit();
}
 ?>