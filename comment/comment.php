<!DOCTYPE html>
<html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>
			Form Record
		</title>
		<link href="../bootstrap/bootstrap.css" rel="stylesheet">
		<script src="../bootstrap/jquery.min.js"></script>
		<script src="../bootstrap/bootstrap.min.js"></script>
		<script src="../js/select_js.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
        <script src="http://www.parsecdn.com/js/parse-1.3.0.min.js"></script>
        <script src="js/jquery-1.11.1.min.js"></script>
        <link rel="stylesheet" href="css/Tbstyle.css">
        <link href="bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="bootstrap-responsive.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">'
        <script>
            function GoHome(){
                if (confirm("Are you sure to quit?") == true) {
                    location.href = "../homepage.html";
                }
            }
        </script>
	</head>
	<body>
<div data-role="header" id='header' data-theme="a">
    <h1>Comment</h1>
    <a onclick="GoHome()" class="ui-btn ui-corner-all ui-btn-inline ui-mini footer-button-left ui-btn-icon-left ui-icon-power">Back</a>
</div> 
<table class="flatTable">
    <tr class="headingTr" >
        <td>Name</td>
        <td>phone</td>
        <td>Email</td>
        <td>Message</td>
    </tr>
    <?php
    include ('../connectDB.php');
    $result = $mysqli -> query("select * from Comment");
    while ($row = $result -> fetch_object()) {
    echo '<tr>';    
    echo '<td>' . $row -> name . '</td>';
    echo '<td>' . $row -> phone. '</td>';
    echo '<td>' . $row -> email . '</td>';
    echo '<td>' . $row -> message . '</td>';    
    echo '</tr>';
    }
    $result -> close();
    $mysqli -> close();
    ?>    
</table>
</html>