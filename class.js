class Bus{
    

    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    display(){
        return this.name +" "+ this.color+" color is the best selling bus in india since 1994.";
    }
};

class LuxuryBus extends Bus{

    constructor(name,color,airCondition,tv){
        super(name,color);

        this.airCondition=airCondition;
        this.tv=tv;
    }

    display(){
        return this.name +" "+this.color+" bus is most luxurus bus in india which having "+this.airCondition+" with "+this.tv+" TV.";
    }
}

obj1 = new LuxuryBus("Tata","blue","voltas air condition","LG");

LuxuryBus.prototype.noOfSeat=60;

LuxuryBus.prototype.display1=function(){return "Hello Passenger"};

console.log("Number of seats in bus "+obj1.noOfSeat);
console.log(obj1.display1());