// class

class User {
  constructor(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;
  }

  get getUsername() {
    return "Mr." + this.username;
  }
  set setUsername(value) {
    if (value.length < 4) {
      console.log("Minimum name length is 4");
    } else {
      this.username = value;
    }
  }

  greet() {
    console.log(
      `Hi, I am ${this.username}, my age ${this.age} and email id ${this.email}`
    );
  }

  static staticName = "Amisha";

  static {
    console.log("This is a static block");
  }

  static bio() {
    console.log(`My bio ${this.staticName}`);
  }
}

// console.log(User.bio());
// console.log(User.staticName);

const ram = new User("Ram", 44, "ram@gmail.com");
// console.log(ram);
// console.log(ram.greet());
// console.log(ram.getUsername); // ram
// ram.setUsername = "Shiva";
// console.log(ram.getUsername); // shiva

// Inheritance

class Teacher extends User {
  constructor(username, email, department) {
    super(username, null, email);
    this.department = department;
  }

  teacherInfo() {
    console.log(
      `Name: ${this.username}, Email: ${this.email}, department: ${this.department}`
    );
  }
}

// console.log(Teacher.bio());

// const t1 = new Teacher("Shyam", "shyam@gmail.com", "Computer Science");
// console.log(t1);
// console.log(t1.teacherInfo());

// instanceof
//console.log(t1 instanceof Teacher); // true
