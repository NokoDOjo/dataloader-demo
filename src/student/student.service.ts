import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepo: StudentRepository) {}

  async getAll(): Promise<Student[]> {
    return await this.studentRepo.getAll();
  }
}
