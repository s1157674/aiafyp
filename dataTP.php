<?php
//detect the user level
$mc = $_GET['username'];
$gd = $_GET['grade'];
setcookie("mycookie1", $mc);
if ($gd == "Staff")
	echo "<script>location='highuser.php';</script>";
?>