class Person {
    // name, birthday, gender, email, tel, address
    constructor(name, birthYear, gender, email, tel, address) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
        this.email = email;
        this.tel = tel;
        this.address = address;
    }
    getAge() {
        let now = new Date();
        return now.getFullYear() - this.birthYear;
    }
    changeName(newName) {
        this.name = newName;
    }
}

class Student extends Person {
    constructor(name, birthYear, gender, email, tel, address, studentID) {
        super(name, birthYear, gender, email, tel, address);
        this.studentID = studentID;
    }

    getID() {
        return this.studentID;
    }
}