import { ConfigService } from '@nestjs/config';
import { DATABASE_PROVIDER_DATA_SOURCE_TOKEN } from 'src/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER_DATA_SOURCE_TOKEN,
    useFactory: async (configService: ConfigService) => {
      const username = configService.get<string>('POSTGRES_USER');
      const password = configService.get<string>('POSTGRES_PASSWORD');
      const host = configService.get<string>('POSTGRES_HOST');
      const port = configService.get<string>('POSTGRES_PORT');
      const database = configService.get<string>('POSTGRES_DB');

      const dataSource = new DataSource({
        type: 'postgres',
        host: `${host}`,
        port: parseInt(port),
        username: username,
        password: password,
        database: database,
        entities: ['dist/**/*.orm-schema{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
