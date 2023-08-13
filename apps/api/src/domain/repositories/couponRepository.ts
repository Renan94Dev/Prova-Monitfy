import { Coupon } from '../entities/coupon/coupon';

export interface CouponRepository {
  save(coupon: Coupon): Promise<void>;
}
