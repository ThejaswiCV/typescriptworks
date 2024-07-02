class Employee{
    code:String
    name:String
    department:String
    salary:Number

    setEmployee(code:String,name:String,department:String,salary:Number){
        this.code=code;
        this.name=name;
        this.department=department;
        this.salary=salary
    }

    printDeatils(){
        console.log(this.name,this.department,this.salary);
        
    }
}

let obj5=new Employee()
obj5.setEmployee("A01","Ajay","hr",50000)
obj5.printDeatils()

//class--instance--variable--intialize--:constructor