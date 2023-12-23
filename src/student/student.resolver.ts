import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { FriendService } from 'src/friend/friend.service';
import { Friend } from 'src/friend/friend.entity';

@Resolver(Student)
export class StudentResolver {
  constructor(
    private readonly studentService: StudentService,
    private readonly friendService: FriendService,
  ) {}

  @Query(() => [Student])
  async students() {
    return await this.studentService.getAll();
  }

  @ResolveField('friends', () => [Friend])
  async getFriends(@Parent() student: Student) {
    const { id: studentId } = student;
    return await this.friendService.getStudentFriends(studentId);
  }
}
