import { Injectable } from '@nestjs/common';
import { students } from 'src/data';
import { Student } from './student.entity';

@Injectable()
export class StudentRepository {
  public async getAll(): Promise<Student[]> {
    console.log('SELECT * FROM students');
    return students;
  }
}
