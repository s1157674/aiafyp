<?php
$tableName = $_GET["tableName"];
$username = $_COOKIE['mycookie1'];
$grade1 = $_COOKIE['grade'];


$jsonObj = json_decode('{"tableName":"","fieldName":[],"data":[],"userName":[],"submitTime":[]}');

$jsonObj -> tableName = $tableName;
include ('connectDb.php');
$result1 = $mysqli -> query("select (fieldName) from tables where tableName =" . "'" . $tableName . "'");

while ($row = $result1 -> fetch_object()) {
	$array = json_decode($row -> fieldName);
	for ($i = 0; $i < count($array); $i++)
		$jsonObj -> fieldName[] = $array[$i];
}
if ($grade1 == 'Manager') {
	$result2 = $mysqli -> query("select * from " . $tableName);
	$x1 = 1;
while ($row = $result2 -> fetch_row()) {
$jsonObj -> data[] = $row;
//A certain variable in the form is fixed, so that a corresponding users' correspouding record can be fixed
$result3 = $mysqli -> query("select  userName  from  TU where num = " . $x1 . " and  tableName = '" . $tableName . "' ;");
$jsonObj -> userName[] = $result3 -> fetch_row();
$result4 = $mysqli -> query("select  submitTime  from  TU where num = " . $x1 . " and  tableName = '" . $tableName . "' ;");
$jsonObj -> submitTime[] = $result4 -> fetch_row();
$x1 = $x1 + 1;
}
$result2 -> close();
}
else if ($grade1 == 'Staff') {
	 	$x1 = 1;
	  
	$rsh = $mysqli -> query("select  num  from tu  where tableName ='".$tableName."' and userName = '".$username."';"  );
	while($rowh = $rsh->fetch_object())
	{   
		 $number = $rowh->num;
		$rsh1 = $mysqli -> query("select  *  from ".$tableName."   limit  ".($number-1).",  1;");		
		$jsonObj -> data[] =$rsh1 -> fetch_row(); 
        $rsh5 = $mysqli -> query("select  submitTime  from  TU where num = " . $x1 . " and  tableName = '" . $tableName . "' ;");
        $jsonObj -> submitTime[] =$rsh5 -> fetch_row(); 
//A certain variable in the form is fixed, so that a corresponding users' correspouding record can be fixed
       $jsonObj -> userName[] = $_COOKIE['mycookie1'];
       $x1 = $x1 + 1;
		
	}
}
echo json_encode($jsonObj);

$result1 -> close();

$mysqli -> close();
?>
