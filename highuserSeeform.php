<!DOCTYPE html>
<html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>
			Form Record
		</title>
		<link href="bootstrap/bootstrap.css" rel="stylesheet">
		<script src="bootstrap/jquery.min.js"></script>
		<script src="bootstrap/bootstrap.min.js"></script>
		<script src="js/select_js.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/highuserSeeform.js"></script>
        <link href="css/highuserSeeform.css" rel="stylesheet" type="text/css" /> 
    </head>
    
	<body>
<div data-role="header" id='header' data-theme="a" style="margin-bottom:30px;">
    <h1>Form Record</h1>
    <a onclick="GoHome()" class="ui-btn ui-corner-all ui-btn-inline ui-mini footer-button-left ui-btn-icon-left ui-icon-power">Back</a>
</div> 
		<div class="container">
			<div class="row">
				<div class="col-md-3" style="box-shadow:
				inset 1px -1px 1px #444, inset -1px 1px 1px #444;overflow: scroll;height: 600px">
					<h3 class="text-danger">
						Choose Form
					</h3>
					<div style="overflow: auto;height: 600px">
						<ul class="nav nav-pills nav-stacked">
							<?php
//							header("Content-Type:text/html;charset=utf-8");
							include ('connectDB.php');
							$result = $mysqli -> query("select * from tables");
							while ($row = $result -> fetch_object()) {
								echo '<li><a href="#" onclick="find(this.innerText)">' . $row -> tableName . '</a></li>';
							}
							$result -> close();
							$mysqli -> close();
							?>
						</ul>
					</div>
				</div>
				<div class="col-md-9" style="background-color: #ffffff;box-shadow:
				inset 1px -1px 1px #444, inset -1px 1px 1px #444;overflow: scroll;height: 600px">
					<div id="div1" style="overflow: auto;height:600px ">
					</div>
				</div>
			</div>
</html>