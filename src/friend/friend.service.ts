import { Injectable } from '@nestjs/common';
import { FriendRepsoitory } from './friend.repository';
import { Friend } from './friend.entity';

@Injectable()
export class FriendService {
  constructor(private readonly friendRepo: FriendRepsoitory) {}

  async getStudentFriends(studentId: number): Promise<Friend[]> {
    return await this.friendRepo.getStudentFriends(studentId);
  }
}
