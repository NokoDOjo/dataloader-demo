import DataLoader from 'dataloader';
import { Friend } from 'src/friend/friend.entity';

export interface IDataloaders {
  friendLoader: DataLoader<number, Friend>;
}
