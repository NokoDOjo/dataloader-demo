import { Friend } from "./friend/friend.entity";
import { Student } from "./student/student.entity";

export const students: Student[] = [
    { id: 1, name: 'John', class: '1A' },
    { id: 2, name: 'Emily', class: '1B' },
    { id: 3, name: 'Alex', class: '1C' },
    { id: 4, name: 'Sophia', class: '1D' },
    { id: 5, name: 'Michael', class: '1E' },
    { id: 6, name: 'Emma', class: '1F' },
    { id: 7, name: 'Lucas', class: '1G' },
    { id: 8, name: 'Olivia', class: '1H' },
    { id: 9, name: 'Ethan', class: '1I' },
    { id: 10, name: 'Mary', class: '1J' }
];

export const friends: Friend[] = [
    { id: 1, name: 'Sam', studentId: 6 },
    { id: 2, name: 'Anna', studentId: 10 },
    { id: 3, name: 'David', studentId: 1 },
    { id: 4, name: 'Mia', studentId: 9 },
    { id: 5, name: 'Jack', studentId: 2 },
    { id: 6, name: 'Lily', studentId: 10 },
    { id: 7, name: 'Noah', studentId: 5 },
    { id: 8, name: 'Ella', studentId: 4 },
    { id: 9, name: 'James', studentId: 10 },
    { id: 10, name: 'Seyi', studentId: 4 }
  ];