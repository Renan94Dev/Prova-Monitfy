import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';
import { UserCouponAssociation } from '../aggregates/userCouponAssociation/userCouponAssociation';
import { Coupon } from '../entities/coupon/coupon';
import { User } from '../entities/user/user';
import { CouponRepository } from '../repositories/couponRepository';
import { UserRepository } from '../repositories/userRepository';

export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly idGenerator: IdGenerator,
    private readonly couponRepository: CouponRepository,
    private readonly nanoidGenerator: IdGenerator,
  ) {}

  async create(user: User, indicateCoupon?: string): Promise<User> {
    const userCoupon = new Coupon({
      idGenerator: this.idGenerator,
      codeGenerator: this.nanoidGenerator,
    });
    await this.couponRepository.save(userCoupon);

    const newUser = new User({ ...user, idGenerator: this.idGenerator });

    await this.userRepository.save(newUser, userCoupon, indicateCoupon);

    return newUser;
  }

  async findAll(): Promise<User[]> {
    const output = await this.userRepository.findAll();
    return output;
  }
}
