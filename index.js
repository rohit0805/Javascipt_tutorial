//There are three ways of creating object:

//(1)Object literal
var employee={
    employee_id:123,
    employee_name:"LAkhan",
    salary:432345
}
document.write("Object literal <br>"+employee.employee_id);

//(2)Instance of Object
var employee=new Object();
employee.id=234;
employee.name="Evan";
employee.salary=34234;

document.write("<br><br>Instance of Object<br>"+employee.name);
//document.write("<br>"+typeof(employee));

//(3)Constructor(it has "this" keyword)
function employe(id1,name1,salary1){
    this.id=id1;
    this.name=name1;
    this.salary=salary1;
}
document.write("<br><br>Constructor<br>");
emp=new employe(45,"Nehy",23445);
document.write(emp.id);
