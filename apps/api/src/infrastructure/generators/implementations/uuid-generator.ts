import { randomUUID as uuid } from 'node:crypto';
import { IdGenerator } from '../id-generator.interface';

export class UuidGenerator implements IdGenerator {
  generateID(): string {
    return uuid();
  }
}
