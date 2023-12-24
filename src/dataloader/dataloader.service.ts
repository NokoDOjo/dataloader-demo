import { Injectable, Scope } from '@nestjs/common';
import { FriendService } from 'src/friend/friend.service';
import { IDataloaders } from './dataloader.interface';
import * as DataLoader from 'dataloader';
import { Friend } from 'src/friend/friend.entity';

@Injectable()
export class DataloaderService {
  constructor(private readonly friendService: FriendService) {}

  getLoaders(): IDataloaders {
    const friendLoader = this._createFriendsLoader();
    return {
      friendLoader,
    };
  }

  private _createFriendsLoader() {
    return new DataLoader<number, Friend>(
      async (studentIds: readonly number[]) =>
        await this.friendService.getStudentFriendsByBatch(
          studentIds as number[],
        ),
    );
  }
}
