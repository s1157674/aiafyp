<?php
header('Access-Control-Allow-Origin: *');
$link=mysqli_connect("localhost","root","","test");

if (mysqli_connect_errno())
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

$name=$_POST["name"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$message=$_POST["message"];

$insert = "insert into Comment(name,phone,email,message) values ('".$name."','".$phone."','".$email."','".$message."');";
    mysqli_query($link, $insert) or die ("Error");

?>