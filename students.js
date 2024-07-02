var Students = /** @class */ (function () {
    function Students(rol, name, course) {
        this.rol = rol;
        this.name = name;
        this.course = course;
    }
    Students.prototype.printDetails = function () {
        console.log(this.rol, this.name, this.course);
    };
    return Students;
}());
var st = new Students("A01", "Theju", "python");
st.printDetails();
