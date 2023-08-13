import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from 'src/application/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'src/presentation/graphql/schema.gql',
      ),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
  exports: [GraphQLModule],
})
export class GraphqlModule {}
