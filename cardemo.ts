interface Car{
    start()
    accelerate()
    shiftgear()
    stop()
}

class Celerio implements Car{

    start(){
        console.log("celerio starts");
        
    }

    accelerate(){
        console.log("celerio accelerate");
        
    }

    shiftgear(){
        console.log("celerio shit");
        
    }

    stop(){
        console.log("celerio stop");
        
    }

}


class Swift{

    accelerate(){
        console.log("celerio accelerate"); 
    }

    shiftgear(){
        console.log("celerio shit");
        
    }

}