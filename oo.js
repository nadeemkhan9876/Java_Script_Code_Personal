class Animal {
    constructor(color="Yellow",energy=100){
        this.color=color;
        this.energy=energy;
    isActive()
        if (this.energy>0){
        this.energy -=20
        console.log("Energy is decreasing",this.energy)       
        }else if (this.energy==0){
            this.sleep ()
        }
    }
    sleep(){
        this.energy +=20
        console.log("Energy is increasing",this.energy)
    }
    getColor(){
        console.log(this.color)
    }
}
console.log(this.color)


