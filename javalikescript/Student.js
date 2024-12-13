import { Person } from './Person.js'

export class Student extends Person{
    #studentID;
    #course;

    constructor(firstName, lastName, age, studentID, course) {
        super(firstName, lastName,age);
        this.#studentID = studentID;
        this.#course = course;
    }

    getStudentID(){
        return this.#studentID;
    }

    setStudentID(studentID){
        this.#studentID = studentID;
    }

    getCourse(){
        return this.#course;
    }

    setCourse(course){
        this.#course = course;
    }
}