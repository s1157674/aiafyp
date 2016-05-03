$(document).ready(function () {
    $("#form1").change(function () {
        formToJson();
    });
});

function formToJson() {
    var data = {};
    data.formContents = {};
    $("#form1").each(function (i, obj) {
        $(obj).find("input, select, textarea").each(function (j, element) {
            if (element.name != "tableName" && element.type != "submit" && element.type != "reset") {
                if (element.type == "text" || element.type == "textarea") {
                    data.formContents[j] = $(element).val();
                } else if (element.type == "radio") {
                    if ($(element).is(":checked")) data.formContents[element.name] = $(element).val();
                } else if (element.type == "checkbox") {
                    if ($(element).is(":checked")) data.formContents[j] = $(element).val();
                } else if ($("select")) {
                    data.formContents[j] = $(element).val();
                }
            } else if (element.name == "tableName") {
                data.formName = $(element).val();
            }
        });
    });
    localStorage.setItem("FormCache", JSON.stringify(data));
}

function jsonToForm() {
    var json = localStorage.getItem("FormCache");
    var data = $.parseJSON(json);
    $("#form1").each(function (i, obj) {
        $(obj).find("input, select, textarea").each(function (j, element) {
            if (element.name != "tableName" && element.type != "submit" && element.type != "reset" && data.formName == $("#form1").find("input[name='tableName']").val()) {
                if (element.type == "text" || element.type == "textarea") {
                    if (data.formContents.hasOwnProperty(j) == true) $(element).val(data.formContents[j]);
                } else if (element.type == "radio") {
                    if (data.formContents.hasOwnProperty(element.name) == true && $(element).val() == data.formContents[element.name]) $(element).prop("checked", true);
                } else if (element.type == "checkbox") {
                    if (data.formContents.hasOwnProperty(j) == true && $(element).val() == data.formContents[j]) $(element).prop("checked", true);
                } else if ($("select")) {
                    if (data.formContents.hasOwnProperty(j) == true) $(element).val(data.formContents[j]);
                }
            }
        });
    });
}