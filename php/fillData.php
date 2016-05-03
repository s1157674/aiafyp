<?php
	header('Access-Control-Allow-Origin: *');
    $link=mysqli_connect("localhost","root","","test");

    if (mysqli_connect_errno())
        echo "Failed to connect to MySQL: " . mysqli_connect_error();

	$json=$_POST["action"];
    $tableName = $_POST["tableName"];
    $username = $_POST["username"];
    $array = json_decode( $json, true );

    $sql = "insert into " . $tableName . " values (";
    foreach ((array)$array as $key => $jsons) { // This will search in the 2 jsons
        foreach((array)$jsons as $key => $value) {
            $sql = $sql . "'" . $value . "',";
        }
    }
    $sql = substr($sql, 0, strlen($sql) - 1) . ")";
    mysqli_query($link, $sql) or die ("Error");

    $sql1 = "select * from ".$tableName;
    $num = $link->query($sql1)->num_rows;
    $insert = "insert into tu(num,tableName,userName) values ('".$num."','".$tableName."','".$username."');";
    mysqli_query($link, $insert) or die ("Error");

    echo ("insert success by " . $username);
?>