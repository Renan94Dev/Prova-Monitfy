import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';

export class User {
  public readonly id?: string;

  public name: string;
  public email: string;
  public readonly idGenerator?: IdGenerator;

  constructor(input: Omit<User, 'id'>, id?: string) {
    if (!id && !input.idGenerator) {
      throw new Error('ID and IdGenerator is not provided');
    }

    Object.assign(this, input);

    this.id = id ?? this.idGenerator.generateID();
  }
}
