    var tableName = '';
    var username = '';
    var A, Aid = '';
    var isVail = false;
    
function reply_click(clicked_id){
    $.ajax({
       type: "POST",
       url: "php/selectform.php",
            data:{action:"showdetail", detail:clicked_id},
            //contentType:"application/json",
            success: function (data) {
            $("#searchDIV").hide();
            $("#header").hide();
            $("#myPanel").remove();
                
            var table = JSON.parse(data);
            tableName = table.tableName;
            username = table.username;
            var fields = JSON.parse(table.fieldName);
            var formType = JSON.parse(table.formType);
            var multValues = JSON.parse(table.multValue);
            var isNull = JSON.parse(table.isNull);     
            var html ="";
            html = html + "<div style='padding-top: 2%;' data-role='header' data-position='fixed' data-theme='b'><h1>"+tableName+"</h1>" ;
            html = html + "<a style='padding-top: 2%;' href='#' onclick='quitForm()' data-icon='back' data-iconpos='notext'>Refresh</a>";
            html = html + "</div>";
            html = html + "<h1 style='color:red;'>* Must Fill it!<h1>"
            for(var i = 0 ;i < fields.length ;i++){
            if(formType[i] == 'SELECT'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var SelectValues = new Array();
                var SelectValues = res.split(",");
                html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><select name='"+fields[i]+"'>";
                for(var j = 0 ;j < SelectValues.length ;j++){
                     html = html + "<option value='"+SelectValues[j]+"'>"+ SelectValues[j] +"</option>";
                }
               html = html + "</select>"+"</td>"+"</tr>";
            }else if (formType[i] == 'CHECKBOX'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var checkboxValues = new Array();
                var checkboxValues = res.split(",");
                
                html = html + "<tr><td>"+
                    "<h3>"+fields[i]+
                    "*<input data-role='none' style='display: none' value='' type='text' name='field_"+i+"[]'>"+
                    "</h3>";
                for(var j = 0 ;j < checkboxValues.length ;j++){
                html = html + 
                    "<label>"+
                    "<input value='"+checkboxValues[j]+"' name='field_"+i+"[]' type='checkbox'>"+checkboxValues[j]+
                    "</label>";
                }
                html = html + "</td></tr>";
            }else if (formType[i] == 'RADIO'){
                var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var RadioValues = new Array();
                var RadioValues = res.split(",");
                
                html = html + "<tr><td>"+
                    "<h3>"+fields[i]+
                    "*<input data-role='none' style='display: none' value='' type='text' name='field_"+i+"'>"+
                    "</h3>";
                for(var j = 0 ;j < RadioValues.length ;j++){
                html = html + 
                    "<label>"+
                    "<input value='"+RadioValues[j]+"' name='field_"+i+"' type='radio'>"+RadioValues[j]+
                    "</label>";
                }
                html = html + "</td></tr>";
            }else if (formType[i] == 'INPUT'){
                if(isNull[i] == "false"){
                    html = html + 
                        "<tr>" + "<td><h3>"+
                        ""+fields[i]+
                        "*</h3><p style='color:red' id='error"+i+"'></p>"+
                        "<input onchange='textFilter(this.value, "+i+")' type='text' name='"+fields[i]+"'>"+
                        "</td>" + "</tr>";
                }else{
                    html = html + 
                        "<tr>" + "<td><h3>"+
                        ""+fields[i]+
                        "</h3>"+
                        "<input type='text' name='"+fields[i]+"'>"+
                        "</td>" + "</tr>";
                }
            }else if (formType[i] == 'TEXTAREA'){
                if(isNull[i] == "false"){
                    html = html + 
                        "<tr>" + "<td><h3>"+
                        ""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                        "<textarea onchange='textFilter(this.value, "+i+")' type='text' name='"+fields[i]+"'></textarea>"+
                        "</td>" + "</tr>";
                }else{
                   html = html + 
                        "<tr>" + "<td><h3>"+
                        ""+fields[i]+"</h3>"+
                        "<textarea type='text' name='"+fields[i]+"'></textarea>"+
                        "</td>" + "</tr>"; 
                }
            }else if (formType[i] == 'SECTION'){
                html = html + 
                    "<tr><td>"+
                    "<input data-role='none' style='display: none' value='' type='text' name='field_"+i+"'>"+
                    "<div style='margin:0 -30%;' class='ui-body ui-body-a ui-corner-all'>"+
                    "<h3 style='margin-top:20px;text-align:center;'>" + fields[i] + "</h3>"+
                    "</div></td></tr>";
            }else if (formType[i] == 'Name'){
                html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                     "<div class='ui-block-a' style='width: 40%'>"+
                     "<input onchange='textFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='Surname' type='text' maxlength='20'>"+
                     "</div>" + 
                     "<div class='ui-block-b' style='width: 60%'>"+
                     "<input onchange='textFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='Given Name' type='text' maxlength='20'>"+
                     "</div>" + 
                     "</tr>";
            }else if (formType[i] == 'Address'){
                 html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                     "<div class='ui-block-a' style='width: 100%'>"+
                     "<input onchange='AddressAFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='Room/Flat , Floor, Block' type='text' maxlength='20'>" + 
                     "<input onchange='AddressBFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='Garden, Street No.' type='text' maxlength='20'>" + 
                     "<input onchange='AddressBFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='District ' type='text' maxlength='20'>" + 
                     "<input onchange='AddressBFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='Location/ City, Country' type='text' maxlength='20'>" + 
                     "</div></tr>";
            }else if (formType[i] == 'Email'){
                 html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                     "<input onchange='EmailFilter(this.value, "+i+")' placeholder='Email' type='text' name='field_"+i+"'>"+
                     "</td>" + "</tr>";
            }else if (formType[i] == 'Identify'){
                 html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                     "<div class='ui-block-a' style='width: 100%'>"+
                     "<input onchange='textFilter(this.value, "+i+")' name='field_"+i+"[]' placeholder='HKID' type='text' maxlength='20'></div>" + 
                     "</tr>";
            }else if (formType[i] == 'Date'){
                 html = html + "<tr>" + "<td><h3>"+""+fields[i]+"*</h3><p style='color:red' id='error"+i+"'></p>"+
                     "<input onchange='DateFilter(this.value, "+i+")' type='text' placeholder='Date' name='field_"+i+"[]'>"+
                     "</td>" + "</tr>";
            }else if (formType[i] == 'Signature'){
                    Aid = "field_"+i;
                
                 html = html + "<tr>" + "<td><h3 id='sign'>"+""+fields[i]+"*</h3>"+
                     "<input data-role='none' style='display: none' value='' type='text' id='field_"+i+"' name='field_"+i+"'>"+
                     "</td>" + "</tr>";
            }else if (formType[i] == 'Table'){
                    var res = multValues[i].substring(1, multValues[i].length-1);
                console.log(res);
                var TableValues = new Array();
                var TableValues = res.split(",");
                
                html = html + "<tr><td>"+
                    "<h3 style='margin-bottom: 1%'>"+fields[i]+
                    "<input data-role='none' style='display: none' value='' type='text' name='field_"+i+"[]'>"+
                    "*</h3><p style='color:red' id='error"+i+"'></p>";
                
                html = html +"<table id='myTable' style='margin-bottom: 2%;width:100%;border-style: solid;border-bottom: none;'>"
                html = html + 
                    "<tr style='height:80px;'>"+
                    "<td style='width:50%;border-bottom: solid;border-right: solid;'>Constituent Funds</td>"+
                    "<td style='width:50%;border-bottom: solid;'>Contribution Allocation</td> "+
                    "</tr>" ;               
                for(var j = 0 ;j < TableValues.length ;j++){
                html = html + 
                    "<tr>"+
                    "<td style='width:50%;border-bottom: solid;border-right: solid;'>"+TableValues[j]+"</td>"+
                    "<td style='width:50%;border-bottom: solid;'><input value=0 id='mpf_"+j+"' onchange='MPFFilter(this.value, "+i+")' type='text' name='field_"+i+"[]'></td> "+
                    "</tr>"
                }
                html = html + "</table></td></tr>";    
            }  
            }
            html = html + 
                "<tr>" + "<td>" +
                "<input type='submit' value='Submit' >" + 
                "<input type='reset' value='Reset' >"+ 
                "</td>" + "</tr>";
            html = "<table class='form' style='margin:0% 5% 5% 5%;width:90%'>" + html +'</table>';
            $( '#content' ).html('');
            $( '#fillForm' ).append( html ).trigger( "create" );
            $( '#sign' ).append( A ).trigger( "create" );
       }
    });
}
 
function textFilter(text, id){
    var Filter = new RegExp("^[a-zA-Z0-9][a-zA-Z ]+$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail = true;
    }else{
        $("#error"+id).text("only english and number can input!");
        isVail =false;
    }
}
    
function AddressAFilter(text, id){
    var Filter = new RegExp("^[0-9]{1,}[a-zA-Z ]+$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail = true;
    }else{
        $("#error"+id).text("Please fill number first and english!");
        isVail = false;
    }
} 
    
function AddressBFilter(text, id){
    var Filter = new RegExp("^[a-zA-Z0-9]{1,}[a-zA-Z ]+$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail =true;
    }else{
        $("#error"+id).text("please fill the address!");
        isVail = false;
    }
}     
    
function EmailFilter(text, id){
    var Filter = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail = true;
    }else{
        $("#error"+id).text("Please follow this format: aaa@bbb.com !");
        isVail = false;
    }
}
    
function DateFilter(text, id){
    var Filter = new RegExp("^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail = true;
    }else{
        $("#error"+id).text("Please follow this format: dd / MM / YYYY !");
        isVail = false;
    }
}  
    
function MPFFilter(text, id){
    var finalCount = 0;
    var Filter = new RegExp("^[1-9]$|^[1-9][0-9]$|^100$");
    if(Filter.test(text)){
        $("#error"+id).text("");
        isVail = true;
        for(var leg=0; leg < document.getElementById("myTable").rows.length-1; leg++){
            finalCount += parseInt($("#mpf_"+leg).val());
            if( finalCount > 100 ){
                $("#error"+id).text("All input can not more than 100!");
                isVail = false;
            }
            
           if( $("#mpf_"+leg).val() % 5 == 0 ){

           }else{
                $("#error"+id).text("All input must divisible by 5!");
               isVail=false;
           }
        }
    }else{
        $("#error"+id).text("Please only input the number between 1 - 100 and divisible by 5!");
        isVail = false;
    }
}    
    
function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    console.log(array);
    var json = {};

    jQuery.each(array, function() {
        if(this.name.includes("[]")){
            json[this.name] += "," + this.value;
            
        }else{
            json[this.name] = this.value || '';
        }
    });

    for (var key in json) {
        if(key.includes("[]")){
            var Values = new Array();
            Values = json[key].split(",");
            json[key] = Values.splice(1, json[key].length);
            json[key] = json[key].toString();
        }
    }   
    
    return json;
}    
    
$(document).ready(function(){ 
    $("#headertext").html("Fill Form");
    A = $("#A");
    $("#content").html("");
    
    $.ajax({
        type: "POST",
        url: "php/selectform.php",
        data:{action:"showroom", detail:""},
        success: function (data) {
            $("#content").html(data);
        }
    }); 
    
    $("#search").change(function () {
        var id=$("#search").val();
        $.ajax({
            type: "POST",
            url: "php/selectform.php",
            data:{action:"search", detail:id},
            success: function (data) {
                $("#content").html(data);
            }
        });
    });
    
    $("#fillForm").submit(function () {
        var form = this;
        var json = ConvertFormToJSON(form);
        var elements = "["+JSON.stringify(json)+"]";
        
        if(isVail == true){
        
        $.ajax({
            type: "POST",
            url: "php/fillData.php",
            data:{action:elements, tableName:tableName, username:username},
            success: function (data) {
                alert(data);
                location.reload();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("some error");
                console.log(textStatus);
                console.log(error);
            }
        });
            
            var encrypted = '' + CryptoJS.AES.encrypt(elements, "Secret Passphrase");

            $.ajax({
                type: "POST",
                url: "php/sumbit.php",
                data:{detail:encrypted}
            });            
        }else{
            alert("please fill all * flieds!");
            return false;
        }    
    });
});
function quitForm(){
    if (confirm("Are you sure to quit?\nAll record will reset!") == true) {
        window.location.reload();
    }else{
        
    }
}
function GoHome(){
    if (confirm("Are you sure to quit?") == true) {
        location.href = "homepage.html";
    }else{
        
    }
}    