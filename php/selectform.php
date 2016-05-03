<?php
header('Access-Control-Allow-Origin: *');
$link=mysqli_connect("localhost","root","","test");

if (mysqli_connect_errno())
    echo "Failed to connect to MySQL: " . mysqli_connect_error();

$action=$_POST["action"];
$detail=$_POST["detail"];

if($action=="showroom") {
    $query = "SELECT * FROM tables WHERE enable = 0";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {

        echo "<ul class='pricing_table'><li onClick='reply_click(this.id)' id='" . $row['id'] . "' class='price_block'>
                <ul class='features'><li>" . $row['id'] . 
                "<p style='float:right;font-size:15px;font-weight: normal;'>" . $row['create-time'] . "</p><br>" . 
                "<p class='topic'>" . $row['tableName'] . "</p>" . 
                "<a style='float:right;margin-top:-20px'>Fill it</a>" .
                "</li></ul></li></ul>";
    }
}
elseif($action=="showdetail"){
    $temp = array();
    $query = "select * from tables where id = '$detail'";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        $temp['formType']= $row['formType'];
        $temp['multValue']= $row['multValue'];
        $temp['fieldName']= $row['fieldName'];
        $temp['tableName']= $row['tableName'];
        $temp['isNull']= $row['isNull'];
        $temp['username']= $_COOKIE["mycookie1"];
    }
    echo json_encode($temp);
    
}
elseif($action=="search"){
    $query = "SELECT * FROM tables WHERE enable = 0 AND (tableName like '%$detail%' || id like '%$detail%')";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        echo "<ul class='pricing_table'><li onClick='reply_click(this.id)' id='" . $row['id'] . "' class='price_block'>
                <ul class='features'><li>" . $row['id'] . 
                "<p style='float:right;font-size:15px;font-weight: normal;'>" . $row['create-time'] . "</p><br>" . 
                "<p class='topic'>" . $row['tableName'] . "</p>" . 
                "<a style='float:right;margin-top:-20px'>Fill it</a>" .
                "</li></ul></li></ul>";
    }
}
elseif($action=="checkLogin"){
	$Password=$_POST["Password"];
    $Username = $_POST["Username"];
    setcookie("mycookie1", $_POST["Username"]);
    
    $query = "select * from users where username= '" . $Username . "' and password =  '" . $Password . "';";
    $show = mysqli_query($link, $query) or die ("Error");
    while ($row = mysqli_fetch_array($show)) {
        echo $row['class'];
        setcookie('grade', $row['class']);
    }    
}
?>