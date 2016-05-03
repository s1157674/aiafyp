<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>
			Disable Form
		</title>
		<link href="bootstrap/bootstrap.css" rel="stylesheet">
		<script src="bootstrap/jquery.min.js"></script>
		<script src="bootstrap/bootstrap.min.js"></script>
	 	<link href="css/showuser.css" rel="stylesheet" type="text/css" />
	</head>
	<body style="background: #e9e9e9;">
		<nav class="navbar navbar-default" role="navigation" style="background-color: #ff0000;">
            <button onclick="location.href = 'homepage.html';" style="margin-left:5px;border-radius: 25px;">Back</button>
		</nav>
		<div id="q1" class="container">
			<h2>
				Disable Form
			</h2>
			<form id='q21' action='deleteTb.php' method='post'>
				<table style="margin-bottom:2%;width:100%" class="table-striped">
                    <input style='display: none' value="" name='tbs[]'>
					<thead>
						<td>
							&emsp;Table Name&emsp;
						</td>
                        <td>
							&emsp;Staut&emsp;
						</td>
						<td>
							&emsp;Click&emsp;
						</td>
					</thead>
					<?php
                    ob_start();
					session_start();
					header("Content-Type:text/html;charset=utf-8");
					include ('conn.php');
					$page = isset($_GET['page']) ? $_GET['page'] : 1;
					$pagesize = 5;
					//select all fields
					$sql1 = "select * from tables;";
					//check the num of record
					$maxrows = $conn -> query($sql1) -> num_rows;
					//total num of record
					$maxpage = ceil($maxrows / $pagesize);
					if ($page > $maxpage) {
						$page = $maxpage;
					}
					if ($page < 1) {
						$page = 1;
					}
					$offset = ($page - 1) * $pagesize;
					$sql2 = "select * from tables limit {$offset},$pagesize;";
					$rs = $conn -> query($sql2);
					while ($row = $rs -> fetch_assoc()) {
						echo "<tr>";
						echo "<td>{$row['tableName']}</td>";
                        if($row['enable'] == 0)
                            echo "<td>enable</td>";
                        else
                            echo "<td>disable</td>";
				        echo "<td><input type='checkbox' value='{$row['tableName']}' name='tbs[]'></td>";
						echo "</tr>";
					}
					echo "</table>";
					echo "<div class='container'>";
					echo "{$page}/{$maxpage} pages --- total {$maxrows} messages";
					//page message
					echo "&emsp;<a href='dropTb.php?page=1'>first page</a>";
					//change page
					echo "&emsp;<a href='dropTb.php?page=" . ($page - 1) . "'>previous page</a>";
					echo "&emsp;<a href='dropTb.php?page=" . ($page + 1) . "'>next page</a>";
					echo "&emsp;<a href='dropTb.php?page=" . $maxpage . "'>last page</a>";
					echo "&emsp;<input type='submit' value='Change' />";
					echo "</div>";
					echo "</form>";
                    ob_end_flush();
					?>
		</div>
	</body>
</html>