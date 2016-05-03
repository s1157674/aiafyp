<?php
header("Content-Type:text/html;charset=utf-8"); 
include('conn.php');
if($_POST['username'] != '')
{
 $username = $_POST['username'];
 $password = $_POST['password'];
 $repassword = $_POST['repassword'];
 $sex = $_POST['sex'];
 $classes = $_POST['classes'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 if($password != $repassword)
 {
 	echo "<script>alert('different password typing!');location='register.html'</script>";
 }
  //username detect
 $umsql = "select * from users where username = '$username';";
 $phsql = "select * from users where phone = '$phone';";
 $emsql = "select * from users where email = '$email';";


$num = $conn->query($umsql)->num_rows;
 if($num>0)
 {
	echo "<script>alert('Username has been used!');location='../html/register.html'</script>";
    exit;
 }
  //email detect
  //get the record num
$num2 = $conn->query($emsql)->num_rows;
  if($num2>0)
 {
	echo "<script>alert('Email has been used!');location='../html/register.html'</script>";
     exit;
 }
 //tel detect
$num1 = $conn->query($phsql)->num_rows;
  if($num1>0)
 {
	echo "<script>alert('Tel has been used!');location='../html/register.html'</script>";
     exit;
 }
 
 else
{
        mysql_query("SET NAMES utf8");
 		$insert = "insert into users values ('".$classes."','".$username."','".$password."','".$sex."','".$email."','".$phone."');";
    
		if(mysqli_query($conn, $insert))
		{
			echo "<script>alert('Register successful!');location='../php/showuser.php'</script>";
			
		}
		else
		{
			echo "<script>alert('Register fail!');location='../html/register.html'</script>";
		}
		
 }
mysqli_close($conn);
}else{
    echo "<script>alert('Register fail!');location='../html/register.html'</script>";
}
 ?> 