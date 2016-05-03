<?php
header('Access-Control-Allow-Origin: *');
$link=mysqli_connect("localhost","root","","test");

if (mysqli_connect_errno())
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

$tableName = $_POST["tableName"];
$action = $_POST["action"];

if( $action == "select" ){
    $temp = array();
    $query = "select * from tables where tableName ="."'".$tableName."'";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $temp['formType']= $row['formType'];
        $temp['multValue']= $row['multValue'];
        $temp['fieldName']= $row['fieldName'];
        $temp['tableName']= $row['tableName'];
    }
    echo json_encode($temp);
}else{
    $query = "select * from tables";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        echo '<li><a href="#" onclick="find(this.innerText);setTimeout(function() {jsonToForm()}, 50);">' . $row['tableName'] . '</a></li>';
    }
}
?>