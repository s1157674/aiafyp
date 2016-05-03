function find(tableName){
        send(tableName);
}

//send JSON with ajax
var xmlHttp;

function send(str) {
    if (str.length == 0) {
        return
    }
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = "php/select.php";
    url = url + "?tableName=" + str;
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            stateChanged();
        }

    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

    function stateChanged() {
         var str = xmlHttp.responseText;
         var  obj = JSON.parse(str);

         var  html ='<h3>'+obj.tableName+'<h3>';
        html = html+'<th class="text-center">submit at</th>';
         html = '<tr>'+html+'<th class="text-center">Agent</th>'+'</tr>';

         if(obj.data!=null) {
            for (var i = 0; i < obj.data.length; i++) {
                html = html + '<tr id=' + i + ' onclick="seeRecord(this.id)">';
                html = html + '<td>'+obj.submitTime[i]+'</td>'
                html = html + '<td>'+obj.userName[i]+'</td>'
                html = html + '</tr>';
            }
        }
        document.getElementById('div1').innerHTML = '<table style="border: solid black;font-size:150%" class="table table-hover table-bordered table-condensed">' + html +'</table>';

    }

function seeRecord(id) {
     var str = xmlHttp.responseText;
     var  obj = JSON.parse(str);
    
    $.ajax({
        type: "POST",
        url: "php/getField.php",
        data:{action:"select", tableName:obj.tableName},
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
                
                html = html + "<tr>" + "<td><h3>"+""+fields[i]+"</h3><select disabled name='field_"+i+"'>";
                    for(var j = 0 ;j < SelectValues.length ;j++){
                        if(SelectValues[j] == obj.data[id][i])
                            html = html + "<option selected value='"+SelectValues[j]+"'>"+ SelectValues[j] +"</option>";
                        else
                            html = html + "<option value='"+SelectValues[j]+"'>"+ SelectValues[j] +"</option>";
                    }
                html = html + "</select>"+"</td>"+"</tr>";
            }
            
            else if (formType[i] == 'RADIO'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var RadioValues = new Array();
                var RadioValues = res.split(",");
                
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>";
                    for(var j = 0 ;j < RadioValues.length ;j++){
                        if(RadioValues[j] == obj.data[id][i])
                            html = html + "<label><input disabled checked value='"+RadioValues[j]+"' name='field_"+i+"' type='radio'>"+RadioValues[j]+"</label>";
                        else
                            html = html + "<label><input disabled value='"+RadioValues[j]+"' name='field_"+i+"' type='radio'>"+RadioValues[j]+"</label>";
                    }
                html = html + "</td></tr>";
            }
            
            else if (formType[i] == 'CHECKBOX'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var CheckboxValues = new Array();
                var CheckboxValues = res.split(",");
                
                var CheckboxCheckedVal = new Array();
                var CheckboxCheckedVal = obj.data[id][i].split(",");
                for(var z = 0 ;z < CheckboxCheckedVal.length ;z++){
//                    alert(CheckboxCheckedVal[z]);
                }
                
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>";
                    for(var j = 0 ;j < CheckboxValues.length ;j++){
                        if($.inArray(CheckboxValues[j], CheckboxCheckedVal) != -1){
                            html = html + "<label><input disabled checked value='"+CheckboxValues[j]+"' name='field_"+i+"' type='checkbox'>"+CheckboxValues[j]+"</label>";
                        }else{
                            html = html + "<label><input disabled value='"+CheckboxValues[j]+"' name='field_"+i+"' type='checkbox'>"+CheckboxValues[j]+"</label>";
                        }
                    }
                html = html + "</td></tr>";
            }
            
            else if (formType[i] == 'INPUT'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+"<input readonly='readonly' type='text' value='"
                    +obj.data[id][i]+"' value='"+fields[i]+"' name='field_"+i+"'>"+"</td>" + "</tr>";
            }
            
            else if (formType[i] == 'TEXTAREA'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+"<textarea readonly='readonly' type='text' placeholder='"
                    +fields[i]+"' name='field_"+i+"'>"+ obj.data[id][i] +"</textarea>"+"</td>" + "</tr>";
            }
            else if (formType[i] == 'Signature'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>" + 
                    "<img style='margin-bottom:20px;border:solid;' src='"+ obj.data[id][i] +"'></img>" +
                    "</td></tr>";
            }
            else if (formType[i] == 'SECTION'){
               html = html + 
                    "<tr><td>"+
                    "<input data-role='none' style='display: none' value='' type='text' name='field_"+i+"'>"+
                    "<div style='margin:5% -30%;' class='ui-body ui-body-a ui-corner-all'>"+
                    "<h3 style='margin-top:20px;text-align:center;'>" + fields[i] + "</h3>"+
                    "</div></td></tr>";
            }
            else if (formType[i] == 'Name'){
                var NameValues = new Array();
                var NameValues = obj.data[id][i].split(",");
                
               html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+
                   "<input readonly='readonly' type='text' value='"+NameValues[0]+"' style='width:30%;'>"+
                   "<input readonly='readonly' type='text' value='"+NameValues[1]+"' style='width:69%;margin-left:1%;'>"
                   +"</td>" + "</tr>";
            }
            else if (formType[i] == 'Address'){
                var AddressValues = new Array();
                var AddressValues = obj.data[id][i].split(",");
                
               html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+
                   "<input readonly='readonly' type='text' value='"+AddressValues[0]+"' style='margin-bottom:5px;'>"+
                   "<input readonly='readonly' type='text' value='"+AddressValues[1]+"' style='margin-bottom:5px;'>"+
                   "<input readonly='readonly' type='text' value='"+AddressValues[2]+"' style='margin-bottom:5px;'>"+
                   "<input readonly='readonly' type='text' value='"+AddressValues[3]+"'>"
                   +"</td>" + "</tr>";
            }
            else if (formType[i] == 'Email'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+"<input readonly='readonly' type='text' value='"
                    +obj.data[id][i]+"' value='"+fields[i]+"' name='field_"+i+"'>"+"</td>" + "</tr>";
            }
            else if (formType[i] == 'Identify'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+"<input readonly='readonly' type='text' value='"
                    +obj.data[id][i]+"' value='"+fields[i]+"' name='field_"+i+"'>"+"</td>" + "</tr>";
            }
            else if (formType[i] == 'Date'){
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>"+"<input readonly='readonly' type='text' value='"
                    +obj.data[id][i]+"' value='"+fields[i]+"' name='field_"+i+"'>"+"</td>" + "</tr>";
            }else if (formType[i] == 'Table'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                
                var CheckboxValues = new Array();
                var CheckboxValues = res.split(",");
                
                var CheckboxCheckedVal = new Array();
                var CheckboxCheckedVal = obj.data[id][i].split(",");
                
                html = html + "<tr>" + "<td><h3>"+fields[i]+"</h3>";
                html = html +"<table style='margin-bottom: 2%;width:100%;border-style: solid;border-bottom: none;'>"
                html = html + 
                    "<tr style='height:80px;'>"+
                    "<td style='width:50%;border-bottom: solid;'>Constituent Funds</td>"+
                    "<td style='width:50%;border-bottom: solid;'>Contribution Allocation</td> "+
                    "</tr>" ;  
                for(var j = 0 ;j < CheckboxValues.length ;j++){
                    html = html + 
                    "<tr>"+
                    "<td style='width:50%;border-bottom: solid;'>"+CheckboxValues[j]+"</td>"+
                    "<td style='width:50%;border-bottom: solid;'>"+CheckboxCheckedVal[j+1]+"</td> "+
                    "</tr>"
                }
                html = html + "</table></td></tr>";
            }
        }
        document.getElementById('div1').innerHTML = "<table style='margin-top:20px;width:100%'>" + html +'</table>';
        }
    });    
}

function GoHome(){
    if (confirm("Are you sure to quit?") == true) {
    location.href = "homepage.html";
    }
}


