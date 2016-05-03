
    var filedfilter = new RegExp("^[0-9a-zA-Z][0-9a-zA-Z ]+$");
        
    function InputFormSetting(text, id) {
       $(document).ready(function(){ 
           if(filedfilter.test(text)){
                $(id).attr("placeholder", text).blur();
                $(id+"_Title").text(text);
               var attributeNamesPosition = id.substring(13);
               for(var i=1; i<=jsonObj.Position.length; i++){
                   if(attributeNamesPosition == jsonObj.Position[i-1])
                        jsonObj.attributeNames[i-1] = text;  
               }
           }else{
               alert("Field name can not null!\n First character must be letter or number");
           }
        });
    }
    function FormNameSetting(value, id) {
       $(document).ready(function(){
           var tableNamefilter = new RegExp("^[0-9a-zA-Z_]+$");
           if(tableNamefilter.test(value)){
                $(id).text(value);
               jsonObj.tableName = value;
           }else{
                alert("Form name only can type the letter and number!\nYou can use _ to break the Form Name\nEx: Personal_Form");
           }
        });
    }
    function SectionNameSetting(value, id) {
       $(document).ready(function(){
           if(filedfilter.test(value)){
               var attributeNamesPosition = id.substring(4);
               var Section_id = "#section_id_" + attributeNamesPosition;
                $(Section_id).text(value);
               for(var i=1; i<=jsonObj.Position.length; i++){
                   if(attributeNamesPosition == jsonObj.Position[i-1])
                        jsonObj.attributeNames[i-1] = value;  
                }
           }else{
               alert("Field name can not null!\n First character must be letter or number");
           }
        });
    }
    function SelectNameFormSetting(value, id) {
       $(document).ready(function(){  
            $(id).text(value);
           var attributeNamesPosition = id.substring(19);
           for(var i=1; i<=jsonObj.Position.length; i++){
               if(attributeNamesPosition == jsonObj.Position[i-1])
                    jsonObj.attributeNames[i-1] = value;  
           }
        });
    }
        
    function SelectOptionFormSetting(value, id, idNum) {
       $(document).ready(function(){  
            $(id).text(value);
            $(id).val(value);

           var attributeNamesPosition = idNum;
           var multValueJson = '[';
           var SelectLength = "#textelement_"+idNum+" option";
            for(var i=1; i<=$(SelectLength).length; i++){
                var SelectOption = "#"+ i + "_SELECTtextelement_" + attributeNamesPosition;
                multValueJson = multValueJson+$(SelectOption).text()+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']';
           for(var i=1; i<=jsonObj.Position.length; i++){
               if(attributeNamesPosition == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }
        });
    }
    function addSelectOption(id) {
        var SelectLength = "#"+id+" option";
        var num_Of_new_Select = $(SelectLength).length+1;
        $("#"+id).append($("<option></option>").attr("value", "new Choice").attr("id", num_Of_new_Select+"_SELECT"+id).
                         text("new Choice"));
        createDiv("SELECT", id);
    }
    function dropSelectOption(id) {
        var SelectLength = "#"+id+" option";
        var num_Of_Select = $(SelectLength).length;
        var myForm = "myForm";
        if($(SelectLength).length != 1)
            $("#"+num_Of_Select+"_SELECT"+id).remove();
        else
            alert("Can't less that 1!");
        createDiv("SELECT", id);
    }
        
    function RadioNameFormSetting(value, id) {
       $(document).ready(function(){ 
           if(filedfilter.test(value)){
                $(id).text(value);
               var attributeNamesPosition = id.substring(12);
                for(var i=1; i<=jsonObj.Position.length; i++){
                   if(attributeNamesPosition == jsonObj.Position[i-1])
                        jsonObj.attributeNames[i-1] = value;  
               }
           }else{
               alert("Field name can not null!\n First character must be letter or number");
           }
        });
    }
    function RadioValueFormSetting(value, id, idNum) {
       $(document).ready(function(){  
            $(id).text("  "+value);
            $(id).prepend($("<input></input>").attr("type","radio").attr("name", "radioGrp_"+idNum));

            var multValueJson = '[';
            for(var i=1; i<=$("input[name=radioGrp_"+idNum+"]").length; i++){
                var radioVal = "#" + idNum + "_label_" + i;
                multValueJson = multValueJson+$(radioVal).text()+',';
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']';
           for(var i=1; i<=jsonObj.Position.length; i++){
               if(idNum == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }
        });
    }
    function addRadioVal(IDNum) {
        var radioItem1 = document.createElement("input");
        radioItem1.type = "radio";
        radioItem1.name = "radioGrp_"+IDNum;
        
        var labelNum = $("input[name=radioGrp_"+IDNum+"]").length+1;
        var objTextNode1 = document.createTextNode("Radio "+labelNum);
        
        var objLabel = document.createElement("label");
        objLabel.htmlFor = radioItem1.id;
        objLabel.id = IDNum + "_label_" + labelNum;
        objLabel.appendChild(radioItem1);
        objLabel.appendChild(objTextNode1);
        
        $("#id_"+IDNum).append(objLabel);
        createDiv("RADIO", "id_"+IDNum);
    }
    function dropRadioVal(IDNum) {
        var labelNum = $("input[name=radioGrp_"+IDNum+"]").length;
        var Label = "#"+IDNum + "_label_" + labelNum;
        $(Label).remove();
        createDiv("RADIO", "id_"+IDNum);
    }
        
    function checkboxNameFormSetting(value, id) {
       $(document).ready(function(){
           if(filedfilter.test(value)){
                $(id).text(value);
               var attributeNamesPosition = id.substring(15);
                for(var i=1; i<=jsonObj.Position.length; i++){
                   if(attributeNamesPosition == jsonObj.Position[i-1])
                        jsonObj.attributeNames[i-1] = value;  
               }
            }else{
               alert("Field name can not null!\n First character must be letter or number");
           }
        });
    }
    function checkboxValueFormSetting(value, id, idNum) {
       $(document).ready(function(){  
            $(id).text("  "+value);
            $(id).prepend($("<input></input>").attr("type","checkbox").attr("name", "checkboxGrp_"+idNum));

            var multValueJson = '[';
            for(var i=1; i<=$("input[name=checkboxGrp_"+idNum+"]").length; i++){
                var checkboxVal = "#" + idNum + "_label_" + i;
                multValueJson = multValueJson+$(checkboxVal).text()+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']';
           for(var i=1; i<=jsonObj.Position.length; i++){
               if(idNum == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }
        });
    }
    function addcheckboxVal(IDNum) {
        var checkboxItem1 = document.createElement("input");
        checkboxItem1.type = "checkbox";
        checkboxItem1.name = "checkboxGrp_"+IDNum;
        
        var labelNum = $("input[name=checkboxGrp_"+IDNum+"]").length+1;
        var objTextNode1 = document.createTextNode("checkbox "+labelNum);
        
        var objLabel = document.createElement("label");
        objLabel.htmlFor = checkboxItem1.id;
        objLabel.id = IDNum + "_label_" + labelNum;
        objLabel.appendChild(checkboxItem1);
        objLabel.appendChild(objTextNode1);
        
        $("#id_"+IDNum).append(objLabel);
        createDiv("CHECKBOX", "id_"+IDNum);
    }
    function dropcheckboxVal(IDNum) {
        var labelNum = $("input[name=checkboxGrp_"+IDNum+"]").length;
        var Label = "#"+IDNum + "_label_" + labelNum;
        $(Label).remove();
        createDiv("CHECKBOX", "id_"+IDNum);
    }
        
    function createDiv(type, id) {
            var fliedID = "#"+ id;
            var positionTop = $(fliedID).position().top;
            var positionLeft = $(fliedID).position().left * 3;
            $(".form-style-6").animate({
                left: '560px',
                top: positionTop,
                opacity: '1'
            });
        if(type == 'INPUT' || type == 'TEXTAREA'){
            var placeholder = document.getElementById(id).getAttribute("placeholder");
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input value='"+placeholder+"' id='"+fliedID+"' type='text' onchange='InputFormSetting(this.value, this.id)' />";
        }else if(id == 'FormName'){
            var data = "<h1>FORM Name</h1>Field Label:<input value='"+$(fliedID).text()
            +"' id='"+fliedID+"' type='text' onchange='FormNameSetting(this.value, this.id)' />";
        }else if(type == 'SECTION'){
            var data = "<h1>Section Name</h1>Field Label:<input value='"+$(fliedID).text()
            +"' id='"+fliedID+"' type='text' onchange='SectionNameSetting(this.value, this.id)' />";
        }else if(type == 'RADIO'){
            var IDNum = id.substring(3);
            var RadioTitle = "#RadioTitle_" + IDNum;
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input type='text' id='"+RadioTitle+"' value='"
            +$(RadioTitle).text()+"' onchange='RadioNameFormSetting(this.value, this.id)'>Multiple Items:<button style='float:right;' id='"+IDNum+"' onclick='dropRadioVal(this.id);'>-</button><button style='float:right;' id='"+IDNum+"' onclick='addRadioVal(this.id);'>+</button>";
            
            var multValueJson = '[';
            for(var i=1; i<=$("input[name=radioGrp_"+IDNum+"]").length; i++){
                var label = "#" + IDNum + "_label_" + i;
                data = data + "<input type='text' id='"+label+"' value='"+$(label).text()+"' name='"+IDNum+"' onchange='RadioValueFormSetting(this.value, this.id, this.name)'> ";
                
                multValueJson = multValueJson+$(label).text()+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']'; 
            
            for(var i=1; i<=jsonObj.Position.length; i++){
               if(IDNum == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }
            
        }else if(type == 'CHECKBOX'){
            var IDNum = id.substring(3);
            var checkboxTitle = "#checkboxTitle_" + IDNum;
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input type='text' id='"+checkboxTitle+"' value='"
            +$(checkboxTitle).text()+"' onchange='checkboxNameFormSetting(this.value, this.id)'>Multiple Items:<button style='float:right;' id='"+IDNum+"' onclick='dropcheckboxVal(this.id);'>-</button><button style='float:right;' id='"+IDNum+"' onclick='addcheckboxVal(this.id);'>+</button>";
            
            var multValueJson = '[';
            for(var i=1; i<=$("input[name=checkboxGrp_"+IDNum+"]").length; i++){
                var label = "#" + IDNum + "_label_" + i;
                data = data + "<input type='text' id='"+label+"' value='"+$(label).text()+"' name='"+IDNum+"' onchange='checkboxValueFormSetting(this.value, this.id, this.name)'> ";
                
                multValueJson = multValueJson+$(label).text()+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']'; 
            
            for(var i=1; i<=jsonObj.Position.length; i++){
               if(IDNum == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }       
        }else if(type == 'SELECT'){
            var SelectLength = "#"+id+" option";
            var SelectName = "#SELECT"+id;
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input type='text' id='"+SelectName+"' value='"
            +$(SelectName).text()+"' onchange='SelectNameFormSetting(this.value, this.id)'>Multiple Items:<button id='"+id+"' onclick='dropSelectOption(this.id);' style='float:right;'>-</button><button id='"+id+"' onclick='addSelectOption(this.id);' style='float:right;'>+</button>";
            
            var attributeNamesPosition = id.substring(12);
            var multValueJson = '[';
            for(var i=1; i<=$(SelectLength).length; i++){
                var SelectOption = "#"+ i +"_SELECT"+id;
                data = data + "<input type='text' name='"+attributeNamesPosition+"' id='"+SelectOption+"' value='"
                    +$(SelectOption).text()+"' onchange='SelectOptionFormSetting(this.value, this.id, this.name)'>";
                
                multValueJson = multValueJson+$(SelectOption).text()+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']'; 

            for(var i=1; i<=jsonObj.Position.length; i++){
               if(attributeNamesPosition == jsonObj.Position[i-1])
                    jsonObj.multValue[i-1] = multValueJson; 
           }
        }else if(type == 'Name' || type == 'Address' || type == 'Email' || type == 'Signature' || type == 'Date'){
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input value='"+$(fliedID).text()+"' id='"+fliedID+"' type='text' onchange='StandardFieldSetting(this.value, this.id)' />";        
        }
            $(".form-style-6").html(data);
    } 
        
$(document).ready(function() {
    
    $("#edit").hide();
    
    $.ajax({
        type: "POST",
        url: "php/editform.php",
        data:{action:"showroom", detail:""},
        success: function (data) {
            $("#choose").html(data);
        }
    }); 
    
    Array.prototype.move = function(from,to){
      this.splice(to,0,this.splice(from,1)[0]);
      return this;
    };
    
    var startPos, updatePos;
    
	$("#myForm").fsortable({
		connectWith: ".fs",
		tolerance: "pointer",
		size: 5,
        update: function(event, ui) { 
            console.log('update: '+ui.item.index())
            updatePos = ui.item.index();
        },
        start: function(event, ui) { 
            document.getElementById("MyDiv").style.opacity = "0";
            console.log('start: ' + ui.item.index())
            startPos = ui.item.index();
        },stop: function(event, ui) { 
            jsonObj.attributeNames.move(startPos,updatePos);
            jsonObj.formType.move(startPos,updatePos);
            jsonObj.multValue.move(startPos,updatePos);
            jsonObj.Position.move(startPos,updatePos);
            console.log(jsonObj);
        }
	}).disableSelection();
});

$( "html" ).dblclick(function() {
  document.getElementById("MyDiv").style.opacity = "0";
});        

function reply_click(clicked_id){
    $.ajax({
       type: "POST",
       url: "php/editform.php",
            data:{action:"showdetail", detail:clicked_id},
            //contentType:"application/json",
            success: function (data) {
            $("#choose").hide();
            $("#header").hide();    
            $("#edit").show();
                
            var table = JSON.parse(data);
            tableName = table.tableName;
            FormNameSetting(tableName, "#FormName")
            username = table.username;
            var fields = JSON.parse(table.fieldName);
            var formType = JSON.parse(table.formType);
            var multValues = JSON.parse(table.multValue);
            
            var html ="";
            html = html + "<div data-role='header' data-position='fixed' data-theme='a'><h1>Edit Form</h1>" ;
            html = html + "<a href='#' onclick='quit()' data-icon='back' data-iconpos='notext'>Refresh</a>";
            html = html + '<a onclick="reset()" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right ui-icon-gear">Reset</a>';
            html = html + "</div>";              
            $("#edit").prepend(html).trigger( "create" );
            
            for(var i = 0 ;i < fields.length ;i++){
            if(formType[i] == 'SELECT'){
                SectionElement();
            }else if (formType[i] == 'CHECKBOX'){
                CheckBoxElement();
            }else if (formType[i] == 'RADIO'){
                RadioElement();
            }else if (formType[i] == 'INPUT'){
                SingleLineTextElement();
            }else if (formType[i] == 'TEXTAREA'){
                MultiLineTextElement();
            }else if (formType[i] == 'SECTION'){
               SelectElement();
            }else if (formType[i] == 'Name'){
                 NameElement();
            }else if (formType[i] == 'Address'){
                 AddressElement();
            }else if (formType[i] == 'Email'){
                EmailElement();
            }else if (formType[i] == 'Identify'){
                 IdentifyElement();
            }else if (formType[i] == 'Date'){
                 DateElement();
            }else if (formType[i] == 'Signature'){
                   SignElement();
            } 
            }
            
       }
    });
}
        
function quit(){
    if (confirm("Are you sure to quit?\nAll record will reset!") == true) {
        window.location.reload();
    }else{
        
    }
} 
function reset(){
    if (confirm("Are you sure to quit?\nAll record will reset!") == true) {
        resetElements();
    }else{
        
    }
}        