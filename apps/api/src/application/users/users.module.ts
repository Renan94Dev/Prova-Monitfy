import { Global, Module } from '@nestjs/common';
import {
  DATABASE_PROVIDER_DATA_SOURCE_TOKEN,
  LINKS_SERVICE_TOKEN,
  REDIS_INSTANCE_TOKEN,
} from 'src/constants';
import { LinkRepository } from 'src/domain/repositories/LinkRepository';
import { CouponRepository } from 'src/domain/repositories/couponRepository';
import { UserRepository } from 'src/domain/repositories/userRepository';
import { LinksService } from 'src/domain/services/LinkService';
import { UsersService } from 'src/domain/services/UsersService';
import { RedisRepository } from 'src/infrastructure/database/cache/redisRepository';
import { CouponTypeormRepository } from 'src/infrastructure/database/couponTypeormRepository';
import { LinkTypeormRepository } from 'src/infrastructure/database/linkTypeormRepository';
import { CouponSchemaModel } from 'src/infrastructure/database/typeorm-schema/coupon-model.orm-schema';
import { LinksSchemaModel } from 'src/infrastructure/database/typeorm-schema/link-model.orm-schema';
import { UserSchemaModel } from 'src/infrastructure/database/typeorm-schema/user-model.orm-schema';
import { UserTypeormRepository } from 'src/infrastructure/database/userTypeormRepository';
import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';
import { NanoIdGenerator } from 'src/infrastructure/generators/implementations/nanoid-generator';
import { UuidGenerator } from 'src/infrastructure/generators/implementations/uuid-generator';
import { LinksResolver } from 'src/presentation/graphql/resolvers/links.resolver';
import { DataSource } from 'typeorm';
import { UsersResolver } from '../../presentation/graphql/resolvers/users.resolver';
import { DatabaseModule } from '../database/database.module';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [
    UsersResolver,
    LinksResolver,
    {
      provide: UserTypeormRepository,
      useFactory(dataSource: DataSource) {
        return new UserTypeormRepository(
          dataSource.getRepository(UserSchemaModel),
        );
      },
      inject: [DATABASE_PROVIDER_DATA_SOURCE_TOKEN],
    },
    {
      provide: UuidGenerator,
      useClass: UuidGenerator,
    },
    {
      provide: CouponTypeormRepository,
      useFactory(dataSource: DataSource) {
        return new CouponTypeormRepository(
          dataSource.getRepository(CouponSchemaModel),
        );
      },
      inject: [DATABASE_PROVIDER_DATA_SOURCE_TOKEN],
    },
    {
      provide: NanoIdGenerator,
      useClass: NanoIdGenerator,
    },
    {
      provide: UsersService,
      useFactory(
        userRepository: UserRepository,
        idGenerator: IdGenerator,
        couponRepository: CouponRepository,
        nanoidGenerator: IdGenerator,
      ) {
        return new UsersService(
          userRepository,
          idGenerator,
          couponRepository,
          nanoidGenerator,
        );
      },
      inject: [
        UserTypeormRepository,
        UuidGenerator,
        CouponTypeormRepository,
        NanoIdGenerator,
      ],
    },
    {
      provide: LinkTypeormRepository,
      useFactory(dataSource: DataSource) {
        return new LinkTypeormRepository(
          dataSource.getRepository(LinksSchemaModel),
        );
      },
      inject: [DATABASE_PROVIDER_DATA_SOURCE_TOKEN],
    },
    {
      provide: RedisRepository,
      useFactory: (redis: Redis) => new RedisRepository(redis),
      inject: [REDIS_INSTANCE_TOKEN],
    },
    {
      provide: LINKS_SERVICE_TOKEN,
      useFactory(
        linkRepository: LinkRepository,
        idGenerator: IdGenerator,
        nanoidGenerator: IdGenerator,
        redisRepository: RedisRepository,
      ) {
        return new LinksService(
          linkRepository,
          idGenerator,
          nanoidGenerator,
          redisRepository,
        );
      },
      inject: [
        LinkTypeormRepository,
        UuidGenerator,
        NanoIdGenerator,
        RedisRepository,
      ],
    },
  ],
  exports: [LINKS_SERVICE_TOKEN],
})
export class UsersModule {}
