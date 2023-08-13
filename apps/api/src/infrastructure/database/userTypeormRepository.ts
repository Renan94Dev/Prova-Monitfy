import { Coupon } from 'src/domain/entities/coupon/coupon';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user/user';
import { UserRepository } from '../../domain/repositories/userRepository';
import { UserSchemaModel } from './typeorm-schema/user-model.orm-schema';

export class UserTypeormRepository implements UserRepository {
  constructor(private readonly ormRepository: Repository<UserSchemaModel>) {}

  async save(
    user: User,
    coupon: Coupon,
    indicateCoupon?: string,
  ): Promise<void> {
    const model = this.ormRepository.create({
      id: user.id,
      name: user.name,
      email: user.email,
      indicateCoupon: indicateCoupon,
      coupon: coupon,
    });
    await this.ormRepository.save(model);
  }

  async findAll(): Promise<User[]> {
    const output = await this.ormRepository.find();
    const outputUsers = output.map((user) => new User({ ...user }, user.id));
    return outputUsers;
  }
}
