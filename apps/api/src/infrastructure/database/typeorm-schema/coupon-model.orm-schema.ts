import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { UserSchemaModel } from './user-model.orm-schema';

@Entity()
@ObjectType()
export class CouponSchemaModel {
  @PrimaryColumn({ unique: true })
  @Field(() => String, { description: 'Coupon ID' })
  id: string;

  @Column()
  @Field(() => String, { description: 'Coupon code' })
  code: string;

  @OneToOne(() => UserSchemaModel, (user) => user.coupon)
  @Field(() => UserSchemaModel)
  user: UserSchemaModel;
}
