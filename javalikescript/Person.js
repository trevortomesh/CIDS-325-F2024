export class Person{
    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    getFirstName(){
        return this.#firstName;
    }

    setFirstName(firstName){
        this.#firstName = firstName;
    }

    getLastName(){
        return this.#lastName;
    }

    setLastName(lastName){
        this.#lastName = lastName;
    }

    getAge(){
        return this.#age;
    }

    setAge(age){
        if(age > 0){
            this.#age = age;
        }else{console.log("Invalid Age!");}
    }

    displayInfo(){
        console.log(`Name: ${this.#firstName} ${this.#lastName},
        Age: ${this.#age}`);
    }

}