<?php
header('Content-type:text/html;charset=utf-8');
session_start();
//logout
if($_GET['action'] == "logout"){
    unset($_COOKIE['username']);
	unset($_COOKIE['mycookie1']);
    unset($_COOKIE['mycookie2']);
    echo "<script>alert('logout!');location='../index.html'</script>";
    exit;
}
	?>