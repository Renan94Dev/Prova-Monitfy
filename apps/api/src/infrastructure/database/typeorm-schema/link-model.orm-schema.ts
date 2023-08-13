import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class LinksSchemaModel {
  @PrimaryColumn({ unique: true })
  @Field(() => String, { description: 'Link ID' })
  id: string;

  @Column()
  @Field(() => String, { description: 'Origin url link' })
  original_link: string;

  @Column()
  @Field(() => String, { description: 'Custom url link' })
  custom_link: string;

  @Column({ default: 0 })
  @Field(() => Int, { description: 'Acesses count' })
  access_count: number;
}
