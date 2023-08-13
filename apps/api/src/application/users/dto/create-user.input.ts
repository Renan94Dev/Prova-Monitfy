import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field(() => String, { description: 'User name' })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { description: 'User email' })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true, description: 'Indicate coupon' })
  indicateCoupon?: string;
}
