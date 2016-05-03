/* set global variable i */
var i=0; 

/* function for automatic increament of feild's "Name" attribute*/
function increment(){
    i +=1;                                   
}

/*function to remove fom elements dynamically*/
function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {
          document.getElementById("MyDiv").style.opacity = "0";
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
         
         var IDNum = parseInt( childDiv.substring(childDiv.length-1) );
         var jsonObjPosition = jsonObj.Position.indexOf(IDNum);
         
         jsonObj.attributeNames.splice(jsonObjPosition, 1);
         jsonObj.formType.splice(jsonObjPosition, 1);
         jsonObj.multValue.splice(jsonObjPosition, 1);
         jsonObj.Position.splice(jsonObjPosition, 1);
         jsonObj.isNull.splice(jsonObjPosition, 1);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}

var jsonObj ={
               "tableName":"",
               "attributeNames":[],
                "formType":[],
                "multValue":[],
                "Position":[],
                "isNull":[]
};

/*functions that will be called upon, when user click on the Single Line Text Element*/
function SingleLineTextElement()
{
    increment(); 
    
    jsonObj.attributeNames.push(" ");
    jsonObj.formType.push("INPUT");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('INPUT', 'textelement_"+i+"')");
    
    var Input = document.createElement("INPUT");
    Input.setAttribute("type", "text");
    Input.setAttribute("placeholder","Single Line Text");
    Input.setAttribute("id","textelement_"+i); 
    Input.setAttribute("readonly", "readonly"); 
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Single Line Text");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Input);
    
    document.getElementById("myForm").appendChild(Span);
}

/*functions that will be called upon, when user click on the Multi Line Text Element*/
function MultiLineTextElement()
{
    increment(); 
    
    jsonObj.attributeNames.push(" ");
    jsonObj.formType.push("TEXTAREA");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('TEXTAREA', 'textelement_"+i+"')");
    
    var Textarea = document.createElement("TEXTAREA");
    Textarea.setAttribute("cols", "17");
    Textarea.setAttribute("placeholder", "Multi Line Text");
    Textarea.setAttribute("id","textelement_"+i); 
    Textarea.setAttribute("readonly", "readonly"); 
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Multi Line Text");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Textarea);
    
    document.getElementById("myForm").appendChild(Span);
}

/*functions that will be called upon, when user click on the Select Element*/
function SelectElement()
{
    increment(); 
    
    jsonObj.attributeNames.push(" ");
    jsonObj.formType.push("SELECT");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('SELECT', 'textelement_"+i+"')");
    
    var Select = document.createElement("select");
    Select.setAttribute("id","textelement_"+i);
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    Span.appendChild(Img);
    Span.appendChild(Select);
   
    document.getElementById("myForm").appendChild(Span);
    
    $("#id_"+i).prepend($("<p></p>").attr("id","SELECTtextelement_"+i).text("Select a Choice"));
    
    $("#textelement_"+i).append($("<option></option>").attr("value", "First Choice").attr("id", "1_SELECTtextelement_"+i).text("First Choice"));
}

/*functions that will be called upon, when user click on the Radio Element*/
function RadioElement()
{
        increment(); 
    
        jsonObj.attributeNames.push(" ");
        jsonObj.formType.push("RADIO");
        jsonObj.multValue.push('[ ]');
        jsonObj.Position.push(i);
        jsonObj.isNull.push("false");
    
        var objDiv = document.getElementById("myForm");
         
        var radioItem1 = document.createElement("input");
        radioItem1.type = "radio";
        radioItem1.name = "radioGrp_"+i;

        var radioItem2 = document.createElement("input");
        radioItem2.type = "radio";
        radioItem2.name = "radioGrp_"+i;
 
        var objTextNodeTitle = document.createTextNode("Radio Field");
        var objTextNode1 = document.createTextNode("  Radio1");
        var objTextNode2 = document.createTextNode("  Radio2");
 
        var objLabel = document.createElement("label");
        objLabel.htmlFor = radioItem1.id;
        objLabel.id = i + "_label_1";
        objLabel.appendChild(radioItem1);
        objLabel.appendChild(objTextNode1);
 
        var objLabel2 = document.createElement("label");
        objLabel2.htmlFor = radioItem2.id;
        objLabel2.id = i + "_label_2";
        objLabel2.appendChild(radioItem2);
        objLabel2.appendChild(objTextNode2);
    
        var Span = document.createElement("div");
        Span.setAttribute("id", "id_"+i);
        Span.setAttribute("onclick", "createDiv('RADIO', 'id_"+ i +"')"); 
        
        var P = document.createElement("p");
        P.className = "RadioStyle";
        P.id = "RadioTitle_" + i ;
        Span.appendChild(P);
        P.appendChild(objTextNodeTitle);
    
        var img = document.createElement("IMG");
        img.className = "RadioStyleImg";
        img.setAttribute("src", "delete.png");
        img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
        Span.appendChild(img);
    
        Span.appendChild(objLabel);   
        Span.appendChild(objLabel2);
    
        objDiv.appendChild(Span);
}

/*functions that will be called upon, when user click on the Check Box Element*/
function CheckBoxElement()
{
        increment(); 
    
        jsonObj.attributeNames.push(" ");
        jsonObj.formType.push("CHECKBOX");
        jsonObj.multValue.push('[ ]');
        jsonObj.Position.push(i);
        jsonObj.isNull.push("false");
    
        var objDiv = document.getElementById("myForm");
         
        var checkboxItem1 = document.createElement("input");
        checkboxItem1.type = "checkbox";
        checkboxItem1.name = "checkboxGrp_"+i;

        var checkboxItem2 = document.createElement("input");
        checkboxItem2.type = "checkbox";
        checkboxItem2.name = "checkboxGrp_"+i;
 
        var objTextNodeTitle = document.createTextNode("checkbox Field");
        var objTextNode1 = document.createTextNode("  checkbox1");
        var objTextNode2 = document.createTextNode("  checkbox2");
 
        var objLabel = document.createElement("label");
        objLabel.htmlFor = checkboxItem1.id;
        objLabel.id = i + "_label_1";
        objLabel.appendChild(checkboxItem1);
        objLabel.appendChild(objTextNode1);
 
        var objLabel2 = document.createElement("label");
        objLabel2.htmlFor = checkboxItem2.id;
        objLabel2.id = i + "_label_2";
        objLabel2.appendChild(checkboxItem2);
        objLabel2.appendChild(objTextNode2);
    
        var Span = document.createElement("div");
        Span.setAttribute("id", "id_"+i);
        Span.setAttribute("onclick", "createDiv('CHECKBOX', 'id_"+ i +"')"); 
        
        var P = document.createElement("p");
        P.className = "checkboxStyle";
        P.id = "checkboxTitle_" + i ;
        Span.appendChild(P);
        P.appendChild(objTextNodeTitle);
    
        var img = document.createElement("IMG");
        img.setAttribute("src", "delete.png");
        img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
        Span.appendChild(img);
    
        Span.appendChild(objLabel);   
        Span.appendChild(objLabel2);
    
        objDiv.appendChild(Span);
}

function NameElement(){
    increment(); 
    
    jsonObj.attributeNames.push("Name");
    jsonObj.formType.push("Name");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.className = "NameStyle";
    Span.setAttribute("onclick", "createDiv('Name', 'textelement_"+i+"_Title')");
    
    var FirstName = document.createElement("INPUT");
    FirstName.setAttribute("placeholder", "Given Name");
    FirstName.setAttribute("type", "text");
    FirstName.setAttribute("readonly", "readonly");
    
    var LastName = document.createElement("INPUT");
    LastName.setAttribute("placeholder", "Surname");
    LastName.setAttribute("type", "text");
    LastName.setAttribute("readonly", "readonly");
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Name");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(LastName);
    Span.appendChild(FirstName);
    
    document.getElementById("myForm").appendChild(Span);
}

function AddressElement(){
    increment(); 
    
    jsonObj.attributeNames.push("Address");
    jsonObj.formType.push("Address");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.className = "AddressStyle";
    Span.setAttribute("onclick", "createDiv('Address', 'textelement_"+i+"_Title')");
    
    var Address1 = document.createElement("INPUT");
    Address1.setAttribute("placeholder", "Room/Flat , Floor, Block");
    Address1.setAttribute("type", "text");
    Address1.setAttribute("readonly", "readonly");
    
    var Address2 = document.createElement("INPUT");
    Address2.setAttribute("placeholder", "Garden, Street No.");
    Address2.setAttribute("type", "text");
    Address2.setAttribute("readonly", "readonly");
    
    var Address3 = document.createElement("INPUT");
    Address3.setAttribute("placeholder", "District");
    Address3.setAttribute("type", "text");
    Address3.setAttribute("readonly", "readonly");
    
    var Address4 = document.createElement("select");
    Address4.setAttribute("id","textelement_"+i);
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Address");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Address1);
    Span.appendChild(Address2);
    Span.appendChild(Address3);
    Span.appendChild(Address4);
    
    document.getElementById("myForm").appendChild(Span);
    
    $("#textelement_"+i).append($("<option></option>").text("Hong Kong"));
}

function EmailElement(){
    increment(); 
    
    jsonObj.attributeNames.push("Email");
    jsonObj.formType.push("Email");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('Email', 'textelement_"+i+"_Title')");
    
    var Email = document.createElement("INPUT");
    Email.setAttribute("placeholder", "Eamil Address");
    Email.setAttribute("type", "text");
    Email.setAttribute("readonly", "readonly");
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Email");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Email);
    
    document.getElementById("myForm").appendChild(Span);
}

function IdentifyElement(){
    increment(); 
    
    jsonObj.attributeNames.push("HKID");
    jsonObj.formType.push("Identify");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.className = "IdentifyStyle";
    Span.setAttribute("onclick", "createDiv('Identify', 'textelement_"+i+"_Title')");
    
    var identify_choose = document.createElement("select");
    identify_choose.setAttribute("id","textelement_"+i);
    
    var identify = document.createElement("INPUT");
    identify.setAttribute("placeholder", " ");
    identify.setAttribute("type", "text");
    identify.setAttribute("readonly", "readonly");
        
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("HKID");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(identify_choose);
    Span.appendChild(identify);
    
    document.getElementById("myForm").appendChild(Span);
    $("#textelement_"+i).append($("<option></option>").text("HKID"));
}

function DateElement(){
    increment(); 
    
    jsonObj.attributeNames.push("Date");
    jsonObj.formType.push("Date");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('Date', 'textelement_"+i+"_Title')");
    
    var Date = document.createElement("INPUT");
    Date.setAttribute("placeholder", "Date");
    Date.setAttribute("type", "text");
    Date.setAttribute("readonly", "readonly");
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Date");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Date);
    
    document.getElementById("myForm").appendChild(Span);

}

//function FileElement(){
//    increment(); 
//    
//    jsonObj.attributeNames.push("File");
//    jsonObj.formType.push("File");
//    jsonObj.multValue.push('[ ]');
//    jsonObj.Position.push(i);
//    
//    var Span=document.createElement('div');
//    Span.setAttribute("id", "id_"+i);
//    Span.setAttribute("onclick", "createDiv('File', 'textelement_"+i+"_Title')");
//    
//    var file = document.createElement("INPUT");
//    file.setAttribute("type", "file");
//    file.style.marginBottom = '3%';
//    file.style.width = '100%';
//    file.setAttribute("disabled", "disabled");
//    
//    var Img = document.createElement("IMG");
//    Img.setAttribute("src", "delete.png");
//    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
//    
//    var P = document.createElement("p");
//    var objTextNodeTitle = document.createTextNode("File");
//    P.appendChild(objTextNodeTitle);
//    P.setAttribute("id","textelement_"+i+"_Title");
//    
//    Span.appendChild(Img);
//    Span.appendChild(P);
//    Span.appendChild(file);
//    
//    document.getElementById("myForm").appendChild(Span);
//}

function SignElement(){
    var oneSign = false;
    
    for(var i=1; i<=jsonObj.formType.length; i++){
       if(jsonObj.formType[i-1] == "Signature"){
            oneSign = true;
       }
   }
    
    if(oneSign == false){
    
    increment(); 
    
    jsonObj.attributeNames.push("Signature");
    jsonObj.formType.push("Signature");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.className = "signatureStyle";
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('Signature', 'textelement_"+i+"_Title')");
    
    var Sign = document.createElement("INPUT");
    Sign.setAttribute("type", "text");
    Sign.setAttribute("id","textelement_"+i); 
    Sign.setAttribute("readonly", "readonly"); 
    
    var button = document.createElement("button");
    var clear = document.createTextNode("clear");
    button.appendChild(clear);
    button.className = "clearSignatureStyle";
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Signature");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(Sign);
    Span.appendChild(button);
    
    document.getElementById("myForm").appendChild(Span);
    }else{
        alert("only one signature is allowed!");
    }
}

function TableElement(){
    
    var oneTable = false;
    
    for(var i=1; i<=jsonObj.formType.length; i++){
       if(jsonObj.formType[i-1] == "Table"){
            oneTable = true;
       }
   }
    
    if(oneTable == false){
    
    increment(); 
    
    jsonObj.attributeNames.push("Table");
    jsonObj.formType.push("Table");
    jsonObj.multValue.push('[ ]');
    jsonObj.Position.push(i);
    jsonObj.isNull.push("false");
    
    var Span=document.createElement('div');
    Span.setAttribute("id", "id_"+i);
    Span.setAttribute("onclick", "createDiv('Table', 'textelement_"+i+"_Title')");
    
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.marginBottom = '3%';
    tbl.setAttribute('border', '1');
    tbl.id = "myTable";
        
    var tbdy = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('Constituent Funds'));
    td.style.width = '50%';
    tr.appendChild(td);
    tbl.appendChild(tbdy);

    var td1 = document.createElement('td');
    td1.appendChild(document.createTextNode('Contribution Allocation(%)'));
    tr.appendChild(td1);

    tbdy.appendChild(tr);
    
    var Img = document.createElement("IMG");
    Img.setAttribute("src", "delete.png");
    Img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
    
    var P = document.createElement("p");
    var objTextNodeTitle = document.createTextNode("Table");
    P.appendChild(objTextNodeTitle);
    P.setAttribute("id","textelement_"+i+"_Title");
    
    Span.appendChild(Img);
    Span.appendChild(P);
    Span.appendChild(tbl);
    
    document.getElementById("myForm").appendChild(Span);
    
    }else{
        alert("only one table is allowed!");
    }  
}

function SectionElement(){
        increment(); 
    
        jsonObj.attributeNames.push(" ");
        jsonObj.formType.push("SECTION");
        jsonObj.multValue.push('[ ]');
        jsonObj.Position.push(i);
        jsonObj.isNull.push("false");
    
        var objDiv = document.getElementById("myForm");
 
        var objTextNodeTitle = document.createTextNode("New Section");
        var P = document.createElement("p");
        P.appendChild(objTextNodeTitle);
        P.setAttribute("id", "section_id_"+i);
    
        var Span = document.createElement("div");
        Span.className = "sectionStyle";
        Span.appendChild(P);
        Span.setAttribute("id", "id_"+i);
        Span.setAttribute("onclick", "createDiv('SECTION', 'id_"+ i +"')"); 
    
        var img = document.createElement("IMG");
        img.setAttribute("src", "delete.png");
        img.setAttribute("onclick", "removeElement('myForm','id_"+ i +"')");
        Span.appendChild(img);
    
        var HR = document.createElement("hr");
        objDiv.appendChild(Span);  
        Span.appendChild(HR);
}

/*functions  that will be called upon, when user click on the Reset Button*/
function resetElements(){
    document.getElementById('myForm').innerHTML = '';
    document.getElementById("MyDiv").style.opacity = "0";
    
    jsonObj.attributeNames.length = 0;
    jsonObj.formType.length = 0;
    jsonObj.multValue.length = 0;
    jsonObj.Position.length = 0;
    jsonObj.isNull.length = 0;
}

function create(){
    var isNull = false;
    
    for(var i=0; i<=jsonObj.attributeNames.length; i++){
        if(jsonObj.attributeNames[i] == " "){
            isNull = true;
            var id = jsonObj.Position[i];
            $('#id_'+id).css({"border-color": "red", 
             "border-width":"1px", 
             "border-style":"solid"});
        }else{
            var id = jsonObj.Position[i];
            $('#id_'+id).css({"border-color": "white", 
             "border-width":"1px", 
             "border-style":"solid"});
        }
    }

    var tableNamefilter = new RegExp("^[0-9a-zA-Z_]+$");
    if(isNull == false){
        if( !tableNamefilter.test(jsonObj.tableName) ){
            alert('Form name only can type the letter and number!\nYou can use _ to break the Form Name\nEx: Personal_Form');
        }else if( jsonObj.tableName == " " ){
            alert('fill Form name!');
        }else if( jsonObj.attributeNames.length == 0 ){
            alert('Please choose the form field!');
        }else{
            send(JSON.stringify(jsonObj));
            console.log(jsonObj);
        }
    }else{
        alert('Please fill the form field!');
    }
}

//ajax
var xmlHttp

function send(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = ""
        return
    }
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = "php/create.php";
    url = url + "?data=" + str;
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function stateChanged() {
        if (xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            var t = xmlHttp.responseText;
            
            if(t == "fail to create table OR the table is existed"){
                alert("The Name is used! Please Change!");
            }else{
                alert(t);
                refresh();
            }
        }
}
function refresh(){
    location.reload();
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
