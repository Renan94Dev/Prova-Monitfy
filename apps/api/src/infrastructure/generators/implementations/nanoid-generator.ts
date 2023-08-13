import { customAlphabet } from 'nanoid';
import { IdGenerator } from '../id-generator.interface';

const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

export class NanoIdGenerator implements IdGenerator {
  generateID(): string {
    return nanoid();
  }
}
