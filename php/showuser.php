<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>
			Manage Account
		</title>
		<link href="../bootstrap/bootstrap.css" rel="stylesheet">
		<script src="../bootstrap/jquery.min.js"></script>
		<script src="../bootstrap/bootstrap.min.js"></script>
		<link href="../css/showuser.css" rel="stylesheet" type="text/css" />
	</head>
    
	<body  style="background: #e9e9e9;">
		<nav class="navbar navbar-default" role="navigation" style="background: red;">
            <button onclick="location.href = '../homepage.html';" style="margin-left:5px;border-radius: 25px;">Back</button>
		</nav>
		<div id="q1" class="container">
			<h2>
				Manage Account <a href="../html/register.html"><input  type="button" id="q44" value="Register"/> </a>
			</h2>
			<form id='q21' action='../php/deleteusers.php' method='post'>
				<table width=100%  class="table-striped">
					<thead>
						<td>
							Employee Level
						</td>
						<td>
							Employee Name
						</td>
						<td>
							Password
						</td>
						<td>
							Gender
						</td>
						<td>
							Email
						</td>
						<td>
							Tel
						</td>
						<td>
							Click
						</td>
					</thead>
					<?php
                    ob_start();
					session_start();
					header("Content-Type:text/html;charset=utf-8");
					include ('conn.php');
					$page = isset($_GET['page']) ? $_GET['page'] : 1;
					$pagesize = 5;
					//select all fileds
					$sql1 = "select * from users;";
					//check num of row
					$maxrows = $conn -> query($sql1) -> num_rows;
					//total num
					$maxpage = ceil($maxrows / $pagesize);
					if ($page > $maxpage) {
						$page = $maxpage;
					}
					if ($page < 1) {
						$page = 1;
					}
					$offset = ($page - 1) * $pagesize;
					$sql2 = "select * from users limit {$offset},$pagesize;";
					$rs = $conn -> query($sql2);
					while ($row = $rs -> fetch_assoc()) {
						echo "<tr>";
						echo "<td>{$row['class']}</td>";
						echo "<td>{$row['username']}</td>";
						echo "<td>***</td>";
						echo "<td>{$row['sex']}</td>";
						echo "<td>{$row['email']}</td>";
						echo "<td>{$row['phone']}</td>";
						echo "<td><input type='checkbox' value='{$row['username']}' name='members[]'></td>";
						echo "</tr>";
					}
					echo "</table>";
					$mc = $_COOKIE['mycookie1'];
					echo "<div id='q3'><b>Welcome：$mc</b></div>";
					echo "<div class='container'>";
					echo "{$page}/{$maxpage} Pages --- Total {$maxrows} Messages";
					//page message
					echo "&emsp;<a href='showuser.php?page=1'>first page</a>";
					//page to change
					echo "&emsp;<a href='showuser.php?page=" . ($page - 1) . "'>previous page</a>";
					echo "&emsp;<a href='showuser.php?page=" . ($page + 1) . "'>next page</a>";
					echo "&emsp;<a href='showuser.php?page=" . $maxpage . "'>last page</a>";
					echo "&emsp;<input type='submit' value='delect' />";
					echo "</div>";
					echo "</form>";
                    ob_end_flush();
					?>
		</div>
	</body>
</html>