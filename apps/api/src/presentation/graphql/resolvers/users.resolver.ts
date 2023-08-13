import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DATABASE_PROVIDER_DATA_SOURCE_TOKEN } from 'src/constants';
import { User } from 'src/domain/entities/user/user';
import { UsersService } from 'src/domain/services/UsersService';
import { UserSchemaModel } from 'src/infrastructure/database/typeorm-schema/user-model.orm-schema';
import { DataSource } from 'typeorm';
import { CreateUserInput } from '../../../application/users/dto/create-user.input';

@Resolver(() => UserSchemaModel)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    @Inject(DATABASE_PROVIDER_DATA_SOURCE_TOKEN)
    private readonly dataSource: DataSource,
  ) {}

  @Mutation(() => UserSchemaModel)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      queryRunner.startTransaction();
      const output = await this.usersService.create(
        createUserInput,
        createUserInput.indicateCoupon,
      );
      queryRunner.commitTransaction();
      return output;
    } catch (error) {
      queryRunner.rollbackTransaction();
      throw error;
    }
  }

  @Query(() => [UserSchemaModel], { name: 'users' })
  async findAll() {
    const output = await this.usersService.findAll();
    return output;
  }
}
