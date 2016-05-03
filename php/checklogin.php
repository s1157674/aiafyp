<?php
header('Content-type:text/html;charset=utf-8');
include ('conn.php');

//run when username is not null
if ($_POST['username']) {
	$user = $_POST['username'];
	$pwd = $_POST['password'];

	setcookie('mycookie1', $user);

	$sql1 = "select * from users where username= '" . $user . "' and password =  '" . $pwd . "';";
	$num = $conn -> query($sql1) -> num_rows;
    $rows = $conn -> query($sql1);
    
    while ($row = $rows -> fetch_assoc()) {
        $cls = $row['class'];
        setcookie('grade', $cls);
    }
    
	if ($num > 0) {
		if ($cls == "Manager") {
            echo "<script>location='../homepage.html'</script>";
		} else if ($cls == 'Staff') {
			echo "<script>location='../dataTP.php?username=$user&grade=$cls'</script>";
		}

	} else {
		echo "<script>alert('username or password is wrong, please login again!');location='../html/login.html'</script>";
	}

	mysqli_close($conn);
}else {
    echo "<script>alert('username or password is wrong, please login again!');location='../html/login.html'</script>";
}
?>