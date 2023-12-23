import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { FriendModule } from 'src/friend/friend.module';

@Module({
  imports: [FriendModule],
  providers: [StudentResolver, StudentService, StudentRepository],
})
export class StudentModule {}
