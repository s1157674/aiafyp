<?php
header('Access-Control-Allow-Origin: *');
$link=mysqli_connect("localhost","root","","test");

if (mysqli_connect_errno())
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

$action = $_POST["action"];

if( $action == "show" ){
    $temp = array();
    $query = "select * from tables where tableName ="."'".$_COOKIE["fillformtableName"]."'";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $temp['formType']= $row['formType'];
        $temp['multValue']= $row['multValue'];
        $temp['fieldName']= $row['fieldName'];
        $temp['tableName']= $_COOKIE["fillformtableName"];
        $temp['isNull']= $row['isNull'];
        $temp['username']= $_COOKIE["mycookie1"];
    }
    echo json_encode($temp);
}else if( $action == "select" ){
    setcookie("fillformtableName", $_POST["tableName"]);
    echo $_POST["tableName"];
}else{
    $query = "select * from tables WHERE enable = 0";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        echo "<div style='margin-right:30px;' class='latest-post waves-effect'>".
            "<img src='assets/images/fill_form.jpg' class='img-responsive' alt=''>".
            "<h1><a>". $row['id'] ."</a></h1>".
            "<h2>". $row['tableName'] ."</h2>".
            "<a onClick='reply_click(this.id);' id='" . $row['tableName'] . "' class='btn btn-primary'>CHOOSE</a></div>";
    }
}
?>