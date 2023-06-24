<?php

$username="root";
$servername="localhost";
$password="";
$conn=mysqli_connect($servername,$username,$password);
if(!$conn){
    die("connection unsuccessful :". mysqli_connect_error());
    echo "connection unsuccessful";
}
else{
    echo"<br>connected successfully";
}
$sql="CREATE DATABASE dbharshil2";
mysqli_query($conn, $sql);

?> 