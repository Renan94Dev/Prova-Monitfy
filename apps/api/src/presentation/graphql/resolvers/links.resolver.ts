import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLinkInput } from 'src/application/users/dto/create-link.input';
import { LINKS_SERVICE_TOKEN } from 'src/constants';
import { Link } from 'src/domain/entities/link/link';
import { LinksService } from 'src/domain/services/LinkService';
import { LinksSchemaModel } from 'src/infrastructure/database/typeorm-schema/link-model.orm-schema';

@Resolver(() => LinksSchemaModel)
export class LinksResolver {
  constructor(
    @Inject(LINKS_SERVICE_TOKEN) private readonly linksService: LinksService,
  ) {}

  @Mutation(() => LinksSchemaModel)
  async createLink(
    @Args('createLinkInput') createLinkInput: CreateLinkInput,
  ): Promise<Link> {
    const output = await this.linksService.create(createLinkInput.link);
    return output;
  }

  @Query(() => [LinksSchemaModel], { name: 'links' })
  async findAll() {
    const output = await this.linksService.findAll();
    console.log(output);
    return output;
  }
}
