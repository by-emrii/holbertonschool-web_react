interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // additional properties
  [key: string]: any;
}

// create a teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// log the object
console.log(teacher3);

// directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// create dir object
const director1: Directors = {
  firstName: 'Jolly',
  lastName: 'Doe',
  location: 'Perth',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// function
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));


// studentclass interface
interface StudentClassInterface {
  firstName: string;
  lastName: string;

  workOnHomework(): string;
  displayName(): string;
}

// interface describing the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// class implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Lil", "Dwayne");
console.log(student.workOnHomework());
console.log(student.displayName()); 