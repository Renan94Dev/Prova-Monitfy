import { IdGenerator } from 'src/infrastructure/generators/id-generator.interface';

export class Coupon {
  public readonly id?: string;
  public readonly code?: string;
  public readonly idGenerator?: IdGenerator;
  public readonly codeGenerator?: IdGenerator;

  constructor(input: Omit<Coupon, 'id'>, id?: string) {
    if (!id && !input.idGenerator) {
      throw new Error('ID and IdGenerator is not provided');
    }

    if (!input.code && !input.codeGenerator) {
      throw new Error('Code and CodeGenerator is not provided');
    }

    Object.assign(this, input);

    this.id = id ?? this.idGenerator.generateID();
    this.code = input.code ?? this.codeGenerator.generateID();
  }
}
