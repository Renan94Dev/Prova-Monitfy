import { Coupon } from '../../entities/coupon/coupon';
import { User } from '../../entities/user/user';
import { UserCouponAssociation } from './userCouponAssociation';

describe('UserCouponAssociation suite', () => {
  it('should create a user and coupon association', () => {
    const user = new User(
      {
        name: 'John Doe',
        email: 'jdoe@me.com',
      },
      '123',
    );

    const coupon = new Coupon({ code: '1234' }, '123');

    const userCouponAssociation = new UserCouponAssociation(user.id, coupon.id);

    expect(userCouponAssociation).toBeTruthy();
    expect(userCouponAssociation.userId).toBe(user.id);
    expect(userCouponAssociation.couponId).toBe(coupon.id);
  });
});
