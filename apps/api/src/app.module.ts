import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisRepository } from './infrastructure/database/cache/redisRepository';
import { GraphqlModule } from './presentation/graphql/graphql.module';
import { Redis } from 'ioredis';
import { REDIS_INSTANCE_TOKEN } from './constants';
import { LinksController } from './application/links/links.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    EventEmitterModule.forRoot(),
    GraphqlModule,
  ],
  controllers: [LinksController],
  providers: [
    {
      provide: REDIS_INSTANCE_TOKEN,
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('REDIS_HOST');
        const port = configService.get<string>('REDIS_PORT');

        return new Redis({
          host: host,
          port: parseInt(port),
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_INSTANCE_TOKEN],
})
export class AppModule {}
