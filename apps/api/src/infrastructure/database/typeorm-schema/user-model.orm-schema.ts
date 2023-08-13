import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { CouponSchemaModel } from './coupon-model.orm-schema';

@Entity()
@ObjectType()
export class UserSchemaModel {
  @PrimaryColumn({ unique: true })
  @Field(() => String, { description: 'User ID' })
  id: string;

  @Column()
  @Field(() => String, { description: 'User name' })
  name: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'User email' })
  email: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'Indicate coupon' })
  indicateCoupon?: string;

  @OneToOne(() => CouponSchemaModel, (coupon) => coupon.user)
  @JoinColumn({ name: 'coupon_id' })
  @Field(() => CouponSchemaModel)
  coupon: CouponSchemaModel;
}
