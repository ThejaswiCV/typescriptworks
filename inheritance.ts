class Parent{
    parentMethod(){
        console.log("parent method");
        
    }
}

class Parent2 extends Parent{
    chilMethod(){
        console.log("inside Parent");
        
    }
}

class Child extends Parent2{
    chilMethod(){
        console.log("child method");
        
    }
}

var ch=new Child()
ch.chilMethod()
ch.parentMethod()