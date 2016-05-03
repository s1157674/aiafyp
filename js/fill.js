function find(tableName){
    send(tableName);

}

//send JSON with ajax
var xmlHttp;
function send(str) {
    if (str.length == 0) {
        document.getElementById("form1").innerHTML = "";
        return
    }
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = "php/getField.php";
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
function stateChanged() {
    var str = xmlHttp.responseText;
    //alert(JSON.parse(str));
    var fields = JSON.parse(str);
    var html ="";
    for(var i = 0 ;i < fields.length-1 ;i++){
       html = html + "<tr>" + "<td>"+"<input type='text' placeholder='"+fields[i]+"' + name='"+fields[i]+"'>"+"</td>" + "</tr> "
    }
    html = html + "<tr style='display: none'>" + "<td>"+"<input type='text' placeholder='"+fields[fields.length-1]+"' name='tableName' value='"+fields[fields.length-1]+"'>"+"</td>" + "</tr>";
    html = html + "<tr>" + "<td>" +"<input type='submit' value='Submit' >" + "<input type='reset' value='Reset' >"+ "</td>" + "</tr>"
    document.getElementById('form1').innerHTML = "<table style='margin:5% 5% 5% 5%;width:60%'>" + html +'</table>';
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