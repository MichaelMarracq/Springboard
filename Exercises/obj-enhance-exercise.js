//1 

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//2 

let favoriteNumber = 42;

let instructor1 = {
    firstName1: "Mike",
    [favoriteNumber]: "That is my favorite!"
}

//3

let instructor2 = {
    firstName: "Mike",
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstName + " says bye!"
    }
}

//4 

function createAnimal(species, verb, noun){
  return {  
        species,
        [verb](){
        return noun;
        }
    }
}