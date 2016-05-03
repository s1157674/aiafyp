<?php
	header("Content-type:text/html;charset=utf-8");
	include('conn.php');
	if(!empty($_POST['tbs']))
	{
		$arr = $_POST['tbs'];
		$key1 = "";
		foreach($arr as $key=>$value)
		{
			$sql1 = "UPDATE tables SET enable = NOT enable where tableName= '".$value."'";
			$rs = $conn->query($sql1);
		    $key1.=$value.",";
		}
		$str1 = substr($key1,0, strlen($key1) - 1);
		echo "<script>alert('Delete user：'.$str1.'successful');</script>";
		echo "<script>location='dropTb.php'</script>";
  	}
	?>