import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';
import { Link } from '../entities/link/link';
import { LinkRepository } from '../repositories/LinkRepository';
import { RedisRepository } from 'src/infrastructure/database/cache/redisRepository';

export class LinksService {
  constructor(
    private readonly linkRepository: LinkRepository,
    private readonly idGenerator: IdGenerator,
    private readonly nanoidGenerator: IdGenerator,
    private readonly cacheRepository: RedisRepository,
  ) {}

  async create(original_link: string): Promise<Link> {
    const createdLink = new Link(
      original_link,
      null,
      this.idGenerator,
      this.nanoidGenerator,
    );
    await this.linkRepository.save(createdLink);

    await this.cacheRepository.set(
      createdLink.custom_link,
      createdLink.original_link,
    );

    return createdLink;
  }

  async findAll(): Promise<Link[]> {
    const output = await this.linkRepository.findAll();
    return output;
  }

  async findLink(id: string): Promise<string> {
    const cachedLink: string = await this.cacheRepository.get(id);

    if (cachedLink) {
      return cachedLink;
    }

    const link = await this.linkRepository.findOne(id);
    return link.custom_link;
  }

  async registerLinkAccess(id: string) {
    const link = await this.linkRepository.findByShortCode(id);
    link.access_count++;

    await this.linkRepository.updateAccessCount(link);
  }
}
