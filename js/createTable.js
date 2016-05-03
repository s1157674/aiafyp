    var filedfilter = new RegExp("^[0-9a-zA-Z][0-9a-zA-Z ]+$");
     
        
    function StandardFieldSetting(text, id) {
       $(document).ready(function(){ 
           if(filedfilter.test(text)){
                $(id).text(text);
               var attributeNamesPosition = id.substring(13);
               if(attributeNamesPosition.length == 7)
                    attributeNamesPosition = attributeNamesPosition.substring(0,1);
               else
                   attributeNamesPosition = attributeNamesPosition.substring(0,2);
               for(var i=1; i<=jsonObj.Position.length; i++){
                   if(attributeNamesPosition == jsonObj.Position[i-1])
                        jsonObj.attributeNames[i-1] = text;
               }
           }else{
                alert("Field name can not null!\n First character must be letter or number");
           }
        });
    }    
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
           var tableNamefilter = new RegExp("^[0-9a-zA-Z][0-9a-zA-Z ]+$");
           if(tableNamefilter.test(value)){
                $(id).text(value);
                var changevalue = value.replace(" ", "_");
//                alert(changevalue);
               jsonObj.tableName = changevalue;
           }else{
                alert("Form name only can type the letter and number!\nYou can use _ to break the Form Name\nEx: Personal Form");
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
        var objTextNode1 = document.createTextNode("  Radio "+labelNum);
        
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
        var objTextNode1 = document.createTextNode("  checkbox "+labelNum);
        
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
        
    function addtableItem(id) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW CELL";
        cell2.innerHTML = "";
        
        id = id.substring(1);
        createDiv("Table", id);
    }  
    function droptableItem(){
        var last = document.getElementById("myTable").rows.length -1;
        document.getElementById("myTable").deleteRow(last);
    }
    function cellSetting(id,value){
        document.getElementById("myTable").rows[id].cells[0].innerHTML = value;
    }
        
    function isNullSetting(id, value){
        var attributeNamesPosition = id.substring(13);
//        alert(attributeNamesPosition);
       for(var i=1; i<=jsonObj.Position.length; i++){
           if(attributeNamesPosition == jsonObj.Position[i-1]){
               if(value.checked == true){
                jsonObj.isNull[i-1] = "true";
                document.getElementById(id).checked = true;
               }else{
                jsonObj.isNull[i-1] = "false";
                document.getElementById(id).checked = false;
               }
//               alert(jsonObj.isNull[i-1]);
           }
       }
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
            var data = "<h1>FORM SETTINGS</h1>"+
                "Field Label:<input value='"+placeholder+"' id='"+fliedID+"' type='text' "+
                "onchange='InputFormSetting(this.value, this.id)' />"+
                'Can It empty: <input id='+ fliedID +' type="checkbox" onclick="isNullSetting(this.id, this)">';
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
        }else if(type == 'Name' || type == 'Address' || type == 'Email' || type == 'Signature' || type == 'Identify' || type == 'Date' || type == 'File'){
            var data = "<h1>FORM SETTINGS</h1>Field Label:<input value='"+$(fliedID).text()+"' id='"+fliedID+"' type='text' onchange='StandardFieldSetting(this.value, this.id)' />";        
        }else if(type == 'Table'){
            var data = "<h1>FORMa SETTINGS</h1>Field Label:<input value='"+$(fliedID).text()+"' id='"+fliedID+"' type='text' onchange='StandardFieldSetting(this.value, this.id)' />Table Items:<button onclick='droptableItem();' style='float:right;'>-</button><button id='"+fliedID+"' onclick='addtableItem(this.id);' style='float:right;'>+</button>";  
            
            var tablelength = document.getElementById("myTable").rows.length ;
            var multValueJson = '[';
            for (var i=1; i<tablelength; i++){
                var cellvalue = document.getElementById("myTable").rows[i].cells[0].innerHTML;
                
                data = data + "<input type='text' id='"+i+"' onchange='cellSetting(this.id,this.value)' value=' "+cellvalue+" ' >";
                multValueJson = multValueJson+cellvalue+','; 
            }
            multValueJson = multValueJson.substring(0, multValueJson.length-1);
            multValueJson = multValueJson+']';
            
            var attributeNamesPosition = fliedID.substring(13);
            if(attributeNamesPosition.length == 7){
                attributeNamesPosition = attributeNamesPosition.substring(0,1);
            }else{
               attributeNamesPosition = attributeNamesPosition.substring(0,2);
            }
            
            for(var i=1; i<=jsonObj.Position.length; i++){
               if(attributeNamesPosition == jsonObj.Position[i-1]){
                    jsonObj.multValue[i-1] = multValueJson;
               }
           }
        }
            $(".form-style-6").html(data);
    } 
        
$(document).ready(function() {
    
//    SectionElement();
//    SectionNameSetting("Personal Infomaton", "#id_1");
    
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
        
function quit(){
    if (confirm("Are you sure to quit?\nAll record will reset!") == true) {
        location.href = "homepage.html";
    }else{
        
    }
} 
function reset(){
    if (confirm("Are you sure to quit?\nAll record will reset!") == true) {
        resetElements();
    }else{
        
    }
}         