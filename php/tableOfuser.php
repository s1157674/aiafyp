<?php
	header('Content-type:text/html;charset=utf-8');
	   //check 2 table
	   //who fill which table: table name & which record
	   	include('conn.php');
		
		
		//get user name
		$mc1 = $_COOKIE['mycookie1'];
		$bm1 = $_COOKIE['mycookie2'];
		
		$sql1 = "select * from ".$bm1;
		$num = $conn->query($sql1)->num_rows;
//		echo "username：".$mc1."    table name:".$bm1."    record num：".$num;
		
		//A certain variable in the form is fixed, so that a corresponding users' correspouding record can be fixed
	   $insert = "insert into TU(num,tableName,userName) values ('".$num."','".$bm1."','".$mc1."');";
		if(mysqli_query($conn, $insert))
		{
			echo "<script>alert('用户名绑定成功！');</script>";
			
		}
	 
		
		//check user info
	?>