<?php
header('Access-Control-Allow-Origin: *');
$link=mysqli_connect("localhost","root","","test");

if (mysqli_connect_errno())
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

$action = $_POST["action"];

if( $action == "allform" ){
    $rowcount = 0;
    $query = "select * from tables";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $rowcount++;
    }
    echo $rowcount;
}else if( $action == "enableform" ){
    $rowcount = 0;
    $query = "select * from tables WHERE enable = 0";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $rowcount++;
    }
    echo $rowcount;
}else if( $action == "comment" ){
    $rowcount = 0;
    $query = "select * from Comment";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $rowcount++;
    }
    echo $rowcount;
}
?>