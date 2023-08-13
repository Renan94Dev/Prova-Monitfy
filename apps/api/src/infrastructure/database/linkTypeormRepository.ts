import { Link } from 'src/domain/entities/link/link';
import { LinkRepository } from 'src/domain/repositories/LinkRepository';
import { Repository } from 'typeorm';
import { LinksSchemaModel } from './typeorm-schema/link-model.orm-schema';

export class LinkTypeormRepository implements LinkRepository {
  constructor(private readonly ormRepository: Repository<LinksSchemaModel>) {}

  async save(link: Link): Promise<void> {
    const model = this.ormRepository.create(link);
    await this.ormRepository.save(model);
  }

  async findAll(): Promise<Link[]> {
    const output = await this.ormRepository.find();
    const outputLinks = output.map(
      (link) =>
        new Link(
          link.original_link,
          link.custom_link,
          null,
          null,
          link.id,
          link.access_count,
        ),
    );
    return outputLinks;
  }

  async findOne(id: string): Promise<Link> {
    const output = await this.ormRepository.findOneByOrFail({ id });
    const link = new Link(
      output.original_link,
      output.custom_link,
      null,
      null,
      output.id,
      output.access_count,
    );
    return link;
  }

  async findByShortCode(shortcode: string): Promise<Link> {
    const output = await this.ormRepository.findOneBy({
      custom_link: shortcode,
    });
    const link = new Link(
      output.original_link,
      output.custom_link,
      null,
      null,
      output.id,
      output.access_count,
    );
    return link;
  }

  async update(link: Link): Promise<void> {
    await this.ormRepository.update(link.id, link);
  }

  async updateAccessCount(link: Link): Promise<void> {
    await this.ormRepository.update(link.id, {
      access_count: link.access_count,
    });
  }
}
