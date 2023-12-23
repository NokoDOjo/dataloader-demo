import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendRepsoitory } from './friend.repository';

@Module({
  providers: [FriendService, FriendRepsoitory],
  exports: [FriendService, FriendRepsoitory],
})
export class FriendModule {}
