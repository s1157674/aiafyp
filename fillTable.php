<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fill Form</title>
    <link href="bootstrap/bootstrap.css" rel="stylesheet">
    <script src="bootstrap/jquery.min.js"></script>
    <script src="bootstrap/bootstrap.min.js"></script>
    <script src="js/W.formCache.js"></script>
<script>
function find(tableName) {
$.ajax({
   type: "POST",
   url: "php/getField.php",
        data:{action:"select", tableName:tableName},
        //contentType:"application/json",
        success: function (data) {
        var table = JSON.parse(data);
        var tableName = table.tableName;
        var fields = JSON.parse(table.fieldName);
        var formType = JSON.parse(table.formType);

        var multValues = JSON.parse(table.multValue);
        var html ="";
        for(var i = 0 ;i < fields.length ;i++){
            if(formType[i] == 'SELECT'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var SelectValues = new Array();
                var SelectValues = res.split(",");
               html = html + "<tr>" + "<td><h3>"+""+fields[i]+"</h3><select name='field_"+i+"'>";
                for(var j = 0 ;j < SelectValues.length ;j++){
                     html = html + "<option value='"+SelectValues[j]+"'>"+ SelectValues[j] +"</option>";
                }
               html = html + "</select>"+"</td>"+"</tr>";
            }else if (formType[i] == 'CHECKBOX'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var checkboxValues = new Array();
                var checkboxValues = res.split(",");
                
                html = html + "<tr>" + "<td><h3>"+fields[i]+
                    "<input style='display: none' value='' type='text' name='field_"+i+"'>"+"</h3>";
                for(var j = 0 ;j < checkboxValues.length ;j++){
                html = html + "<label><input value='"+checkboxValues[j]+"' name='field_"+i+"[]' type='checkbox'>"+checkboxValues[j]+"</label>";
                }
                html = html + "</td></tr>";
            }else if (formType[i] == 'RADIO'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var RadioValues = new Array();
                var RadioValues = res.split(",");
                
                html = html + "<tr>" + "<td><h3>"+fields[i]+
                    "<input style='display: none' value='' type='text' name='field_"+i+"'>"+"</h3>";
                for(var j = 0 ;j < RadioValues.length ;j++){
                html = html + "<label><input value='"+RadioValues[j]+"' name='field_"+i+"' type='radio'>"+RadioValues[j]+"</label>";
                }
                html = html + "</td></tr>";
            }else if (formType[i] == 'INPUT'){
                html = html + "<tr>" + "<td><h3>"+""+fields[i]+"</h3>"+"<input type='text' name='field_"+i+"'>"+"</td>" + "</tr>";
            }else if (formType[i] == 'TEXTAREA'){
                html = html + "<tr>" + "<td><h3>"+""+fields[i]+"</h3>"+"<textarea type='text' name='field_"+i+"'></textarea>"+"</td>" + "</tr>";
            }else if (formType[i] == 'SECTION'){
                 html = html + "<tr>" + "<td><h1>"+""+fields[i]+
                     "<input style='display: none' value='' type='text' name='field_"+i+"'>"+
                     "</h1><hr class='sectionhr'>"+"</td>" + "</tr>";
            }else if (formType[i] == 'Name'){
                 html = html + "<tr>" + "<td><h3>"+""+fields[i]+"</h3>"+
                     "<input style='width: 30%;margin-right: 1%;' type='text' name='field_"+i+"[]'>"+
                     "<input style='width: 68%;' type='text' name='field_"+i+"[]'>"+"</td>" + "</tr>";
            }else if (formType[i] == 'Signature'){
                 html = html + 
                     "<tr>" + "<td><h1>"+""+fields[i]+"</h1>"+
                     "<div>"+
                     "<canvas style='border-style: solid;' id='A'></canvas>"+
                     "<div>"+
                     "</td>" + "</tr>";
            }
        }
        html = html + "<tr style='display: none'>" + "<td>"+"<input type='text' placeholder='"+tableName+"' name='tableName' value='"+tableName+"'>"+"</td>" + "</tr>";
        html = html + "<tr>" + "<td>" +"<input type='submit' value='Submit' >" + "<input type='reset' value='Reset' >"+ "</td>" + "</tr>";
        document.getElementById('form1').innerHTML = "<table style='margin:5% 5% 5% 5%;width:60%'>" + html +'</table>';
        }
});
}
$(document).ready(function(){                  
    $.ajax({
        type: "POST",
        url: "php/getField.php",
        data:{action:"showroom", tableName:""},
        success: function (data) {
            $("#selectForm").html(data);
        }
    });
});
</script>
<style type="text/css">
input[type="text"],
select,
textarea
{
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 23px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
    
}
select
{
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 30px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
    
}
label{
    display:inline-block;
    background-color:#F7F7F7;
    width: 100%;
    padding:4px 11px;
    font-family:Arial;
    font-size: 23px;
    padding-left: 10%;
}
label:last-child{
    margin-bottom: 30px;
}
td h3
{
    margin-top: -12px;
}
input[type="text"]:focus,
select:focus,
textarea:focus
{
    background: #d2d9dd;
}

input[type="submit"],
input[type="reset"]
{
    position: relative;
    display: block;
    padding: 10px;
    color: #FFF;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    border-radius: 8px;
    margin-bottom: 10px;
}
input[type="submit"]:hover,
input[type="reset"]:hover
{
    background: #109177;
}
    
.sectionh {
    text-align-last: center;
}

</style>
</head>
<body style="background-image: url(image/background.jpg);">
	
<nav style="background-color: #ff0000;" class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">AIA</a>
    </div>
    <div>
        <ul class="nav navbar-nav" style="background-color: #ff0000;">
            <li><a href="homepage.html" class="navbar-brand">Home Page</a></li>
            <li><a href="createtable.html" class="navbar-brand">Create Form</a></li>
            <li><a href="seenTable.php" class="navbar-brand">Form Record</a></li>
            <li class="active"><a href="fillTable.php" class="navbar-brand">Fill Form</a></li>
            <li><a href="../table/php/showuser.php" class="navbar-brand">Manage Account</a></li>
            <li> <a href='../table/dropTb.php' class="navbar-brand"> Drop Table </a> </li>
            <li> <a href='../table/php/logout.php?action=logout' class="navbar-brand">Logout</a></li>
        </ul>
    </div>
</nav>
	   	 
<div class="container">
    <div class="row">
        <div class="col-md-3" style="box-shadow:
         inset 1px -1px 1px #444, inset -1px 1px 1px #444;overflow: scroll;height: 600px">
            <h3 class="text-danger">Choose Form</h3>

            <div style="overflow: auto;height: 600px">
                <ul id='selectForm' class="nav nav-pills nav-stacked">
                </ul>
            </div>


        </div>

        <div class="col-md-9" style="background-color: #ffffff;box-shadow:
                                inset 1px -1px 1px #444, inset -1px 1px 1px #444;height: 600px">

            <div id="div1" class="container" style="overflow: auto;height:600px">
                <form id="form1" class="form-horizontal" role="form" action="php/fillData.php" method="get">

                     <div onclick="saveCanvas()" id="A">
                        <canvas id="B"></canvas>
                        <button onclick="clearCanvas()">Clear</button>
                    </div>
                </form>
            </div>
        </div>


    </div>
</div>
    <script src="js/signature_pad.js"></script>
</body>
</html>