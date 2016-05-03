<?php
header("Content-Type:text/html;charset=utf-8");
$dataStr = $_GET["data"];

//$dataStr='{"tableName":"test",
//           "attributeNames":["name","gender","44","12344311"],
//           "dataType":["varchar","varchar","int","varchar"]}';
$jsonObj = json_decode($dataStr);
$link=mysqli_connect("localhost","root","","test");
$query1 = "select * from tables";
$show1 = mysqli_query($link, $query1) or die ("Error");
$row = mysqli_num_rows($show1) + 1;
//echo $row;
//json to sql
$sqlStr1 ='create table '.$jsonObj->tableName.'( ';
$sqlStr2 ='';
for($i=0;$i<count($jsonObj->attributeNames);$i++){
    $sqlStr2 = $sqlStr2.'`field_'.$i.'` longtext,';
}
$sqlStr2 = substr($sqlStr2,0,strlen($sqlStr2)-1).' )';
$sqlStr = $sqlStr1.$sqlStr2;


//echo $sqlStr;
//create table

include('connectDb.php');

/* check connection */
if ($mysqli->connect_errno) {
    echo "connect fail!!";
    $mysqli->close();
    exit();
}


//insert json to table
$tableName = $jsonObj->tableName;
$fieldName = "[";
$multValue = "[";
$formType = "[";
$isNull = "[";
$a ='"';
$b ='",';
for($i=0;$i<count($jsonObj->attributeNames);$i++){
    $fieldName = $fieldName.$a.$jsonObj->attributeNames[$i].$b;
}
$fieldName = substr($fieldName,0,strlen($fieldName)-1).']';

for($i=0;$i<count($jsonObj->multValue);$i++){
    $multValue = $multValue.$a.$jsonObj->multValue[$i].$b;
}
$multValue = substr($multValue,0,strlen($multValue)-1).']';

for($i=0;$i<count($jsonObj->formType);$i++){
    $formType = $formType.$a.$jsonObj->formType[$i].$b;
}
$formType = substr($formType,0,strlen($formType)-1).']';

for($i=0;$i<count($jsonObj->isNull);$i++){
    $isNull = $isNull.$a.$jsonObj->isNull[$i].$b;
}
$isNull = substr($isNull,0,strlen($isNull)-1).']';

//echo $fieldName;
//echo $multValue;
//echo $isNull;
if($mysqli->query("insert into tables(id,tableName,fieldName,multValue,formType,isNull) VALUES ('AF0".$row."','".$tableName."','".$fieldName."','".$multValue."','".$formType."','".$isNull."')")===false) {
    echo "fail to create table";
    $mysqli->close();
    exit();
}

/* check the create */
if ($mysqli->query($sqlStr) === false) {
    echo "fail to create table OR the table is existed";
    $mysqli->query("delete from tables where id = 'AF0".$row."'");
    $mysqli->close();
    exit();
}
$mysqli->close();

echo "success to create table";


?>