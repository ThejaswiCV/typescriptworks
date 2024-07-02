interface framework{
    name:string
    architecture:string
    roadmap()
}


class Django implements framework{
    name:string
    architecture: string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadmap() {
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}


class Angular implements framework{
    name:string
    architecture: string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadmap() {
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}

class Student{
    frameworkObject:framework
    constructor(framework){
        this.frameworkObject=framework
    }
    learn(){
        this.frameworkObject.roadmap()
    }
}

var djangoObject= new Django("django","mvt")

var studentObject=new Student(djangoObject)
studentObject.learn()
