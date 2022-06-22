class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "BEEP!"
    }
    toString(){
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4;
    }
}

class MotorCycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOOOM!!!'
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity;
    }
    add(junt){
        if (!(junt instanceof Vehicle)){
            return "Only Vehicular Devices are allowed here Jit"
        }
        if (this.vehicles.length >= this.capacity){
            return "You got too many vehicular devices Jit"
        }
        this.vehicles.push(junt);
        return "You can park it here I guess..."
    }
}