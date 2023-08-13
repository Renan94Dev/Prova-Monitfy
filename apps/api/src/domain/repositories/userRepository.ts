import { Coupon } from '../entities/coupon/coupon';
import { User } from '../entities/user/user';

export interface UserRepository {
  save(user: User, coupon: Coupon, indicateCoupon?: string): Promise<void>;
  findAll(): Promise<User[]>;
}
