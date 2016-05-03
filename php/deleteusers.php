<?php
	header("Content-type:text/html;charset=utf-8");
	include('conn.php');
	if(!empty($_POST['members']))
	{
		$arr = $_POST['members'];
		$key1 = "";
		foreach($arr as $key=>$value)
		{
			$sql1 = "delete from users where username= '".$value."'";
			$rs = $conn->query($sql1);
		    $key1.=$value.",";
		}
		$str1 = substr($key1,0, strlen($key1) - 1);
		echo "<script>alert('success to delect user：'.$str1.'!');</script>";
		echo "<script>location='../php/showuser.php'</script>";
  	}
	?>