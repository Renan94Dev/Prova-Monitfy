export class UserCouponAssociation {
  constructor(
    public readonly userId: string,
    public readonly couponId: string,
  ) {}
}
