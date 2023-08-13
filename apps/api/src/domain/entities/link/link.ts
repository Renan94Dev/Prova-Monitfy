import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';

export class Link {
  public readonly id?: string;

  public original_link: string;
  public custom_link: string;
  public access_count: number;

  public readonly idGenerator?: IdGenerator;
  public readonly nanoidGenerator?: IdGenerator;

  constructor(
    original_link?: string,
    custom_link?: string,
    idGenerator?: IdGenerator,
    nanoidGenerator?: IdGenerator,
    id?: string,
    access_count?: number,
  ) {
    if (!id && !idGenerator) {
      throw new Error('ID and IdGenerator is not provided');
    }

    if (!id && !nanoidGenerator) {
      throw new Error('ShortID and nanoidGenerator is not provided');
    }

    this.idGenerator = idGenerator;
    this.nanoidGenerator = nanoidGenerator;
    this.id = id ?? this.idGenerator.generateID();
    this.original_link = original_link;
    this.custom_link = custom_link ?? this.nanoidGenerator.generateID();
    this.access_count = access_count ?? 0;
  }

  getCustomLink(): string {
    return `http://localhost:3000/custom/${this.custom_link}`;
  }
}
