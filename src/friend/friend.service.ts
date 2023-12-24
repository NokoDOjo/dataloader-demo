import { Injectable } from '@nestjs/common';
import { FriendRepsoitory } from './friend.repository';
import { Friend } from './friend.entity';

@Injectable()
export class FriendService {
  constructor(private readonly friendRepo: FriendRepsoitory) {}

  public async getStudentFriends(studentId: number): Promise<Friend[]> {
    return await this.friendRepo.getStudentFriends(studentId);
  }

  public async getAllFriendsByStudentIds(
    studentIds: number[],
  ): Promise<Friend[]> {
    return await this.friendRepo.getAllFriendsByStudentIds(studentIds);
  }

  public async getStudentFriendsByBatch(
    studentIds: number[],
  ): Promise<(Friend | any)[]> {
    console.log('called');
    const friends = await this.getAllFriendsByStudentIds(studentIds);
    const mappedResults = this._mapResultToIds(studentIds, friends);

    return mappedResults;
  }

  private _mapResultToIds(studentIds: readonly number[], friends: Friend[]) {
    return studentIds.map(
      (id) =>
        friends.filter((friend: Friend) => friend.studentId === id) || null,
    );
  }
}
