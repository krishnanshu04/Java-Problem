function Bus(name,color) {

    this.name = name;
    this.color = color;

    this.display=function(){
        return this.name+" "+this.color;
    }
    
}

bus1 = new Bus("Tata","Red");

Bus.prototype.noOfSeats=65;

console.log(bus1.noOfSeats);