// define student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create student objects
const student1: Student = {
    firstName: "Bobby",
    lastName: "Lee",
    age: 25,
    location: "Melbourne"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Meow",
    age: 23,
    location: "Perth"
};

// store in array
let studentsList: Array<Student> = [student1, student2];

// create table elements
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// loop through students and create rows
studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
})

// append table to doc
table.appendChild(tbody);
document.body.appendChild(table);