<?php
header("Content-Type:text/html;charset=utf-8"); 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
// create connection
 $conn = mysqli_connect($servername, $username, $password, $dbname);
 // check connection
 if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
}
// check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 

 ?> 