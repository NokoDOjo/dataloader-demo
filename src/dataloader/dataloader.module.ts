import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { FriendModule } from 'src/friend/friend.module';

@Module({
  imports: [FriendModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
