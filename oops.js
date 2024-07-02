var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployee = function (code, name, department, salary) {
        this.code = code;
        this.name = name;
        this.department = department;
        this.salary = salary;
    };
    Employee.prototype.printDeatils = function () {
        console.log(this.name, this.department, this.salary);
    };
    return Employee;
}());
var obj5 = new Employee();
obj5.setEmployee("A01", "Ajay", "hr", 50000);
obj5.printDeatils();
