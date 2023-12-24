import { friends } from 'src/data';
import { Friend } from './friend.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FriendRepsoitory {
  public async getStudentFriends(studentId: number): Promise<Friend[]> {
    console.log(`SELECT * FROM friends WHERE studentId = ${studentId}`);
    return friends.filter((friend) => friend.studentId === studentId);
  }

  public async getAllFriendsByStudentIds(
    studentIds: number[],
  ): Promise<Friend[]> {
    console.log(
      `SELECT * FROM friends WHERE studentId IN (${studentIds.join(',')})`,
    );

    return friends.filter((friend) => studentIds.includes(friend.studentId));
  }
}
