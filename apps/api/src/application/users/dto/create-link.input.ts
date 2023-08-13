import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl } from 'class-validator';

@InputType()
export class CreateLinkInput {
  @IsNotEmpty()
  @IsUrl()
  @Field(() => String, { description: 'Url link' })
  link: string;
}
