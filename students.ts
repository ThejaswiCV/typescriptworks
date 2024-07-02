class Students{
    rol:string
    name:string
    course:string

    constructor(rol:string,name:string,course:string){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }

    printDetails(){
        console.log(this.rol,this.name,this.course);
        
    }

}

const st=new Students("A01","Theju","python")
st.printDetails()
