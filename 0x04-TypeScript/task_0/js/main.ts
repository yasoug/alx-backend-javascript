export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "curious",
  lastName: "adonis",
  age: 29,
  location: "Paris",
};

const student2: Student = {
  firstName: "Mr",
  lastName: "Fox",
  age: 23,
  location: "Lille",
};

const studentsList: Array<Student> = [student1, student2];

export const renderTable = (studentsList: Array<Student>): void =>  {
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }
  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
