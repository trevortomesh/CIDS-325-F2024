import { Person } from './Person.js';
import { Student } from './Student.js';
class Main{
    static main(){
        console.log("---- Java-Like Programming in Javascript! ---");
        const person = new Person("John", "Doe", 30);

        console.log(person.getAge());
        console.log(person.getLastName());

        const student = new Student("Bob", "Dole", 65, 123456, "Physics");
        //console.log(person.lastName);
        console.log(student.getAge());
    }
}

Main.main();