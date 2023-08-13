import { Coupon } from '../../domain/entities/coupon/coupon';
import { CouponRepository } from '../../domain/repositories/couponRepository';
import { Repository } from 'typeorm';
import { CouponSchemaModel } from './typeorm-schema/coupon-model.orm-schema';

export class CouponTypeormRepository implements CouponRepository {
  constructor(private readonly ormRepository: Repository<CouponSchemaModel>) {}

  async save(coupon: Coupon): Promise<void> {
    const model = this.ormRepository.create(coupon);
    await this.ormRepository.save(model);
  }
}
