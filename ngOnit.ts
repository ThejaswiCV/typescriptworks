//abstraction,multiple inheritance using interface

interface Oninit{
    ngOnInit()
}

interface OnChanges{
    ngOnchange()
}

class MyComponents implements Oninit,OnChanges{

    ngOnInit(){
        console.log("oninit");
        
    }

    ngOnchange(){
        console.log("onchange");
        
    }

}