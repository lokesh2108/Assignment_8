/*eslint-env browser*/

var employeeList = new Array();
    employeeList.push(["Sally Smith","Quality Assurance",3423]);
    employeeList.push(["Mark Martin","VP Sales",3346]);
    employeeList.push(["John Johnson","Marketing",3232]);
    employeeList.push(["Randy Ortin","CEO",3245]);
    employeeList.push(["Rock Johnson","Manager",4543]);

window.addEventListener("load", function () {
    $("AddEmployee_form").reset();
    for(var i=0;i<employeeList.length;i++) {
        addEmployee(employeeList[i][0],employeeList[i][1],employeeList[i][2]);
        }
    $("Count_inTable").innerHTML = "Showing " + employeeList.length + " Employees";
    $("Button_add").addEventListener("click",function(e) {
        e.preventDefault();
        addEmp();
    });
});

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
}

function addEmployee(name, title, extension) {
    "use strict";
    var empTable = $("Display");
    var row = empTable.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    cell = row.insertCell(-1);
    cell.innerHTML = title;
    cell = row.insertCell(-1);
    cell.innerHTML = extension;
    cell = row.insertCell(-1);
    var deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class","del");
    deleteButton.setAttribute("onclick", "deleteEmployee(this);");
    cell.appendChild(deleteButton);
}

function deleteEmployee(button) {
    var row = button.parentNode.parentNode;
    var table = $("Display");
    table.deleteRow(row.rowIndex);
    employeeList.splice(row.rowIndex,1);
    $("Count_inTable").innerHTML = "Showing " + employeeList.length + " Employees";
}

function addEmp() {
    "use strict";
    var Cells = window.document.getElementsByTagName("td");
    var name, title, extension, required, flag=false;
    required = "<span>Required Field</span>";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    if(name === "") {
        Cells[2].innerHTML = required;
        flag=true;
    }
    if(title === "") {
        Cells[5].innerHTML = required;
        flag=true;
    }
    if(extension === "") {
        Cells[8].innerHTML = required;
        flag=true;
    }
    if(!flag){
        Cells[2].innerHTML = "";
        Cells[5].innerHTML = "";
        Cells[8].innerHTML = "";
        employeeList.push([name,title,extension]);
        addEmployee(name, title, extension);
        $("Count_inTable").innerHTML = "Showing " + employeeList.length + " Employees";
        $("AddEmployee_form").reset();
    }
};
