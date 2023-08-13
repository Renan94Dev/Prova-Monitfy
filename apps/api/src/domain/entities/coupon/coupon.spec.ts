import { NanoIdGenerator } from '../../../infrastructure/generators/implementations/nanoid-generator';
import { UuidGenerator } from '../../../infrastructure/generators/implementations/uuid-generator';
import { Coupon } from './coupon';

describe('Coupon suite', () => {
  it('should throw an error if idGenerator is not provided', () => {
    const codeGenerator = new NanoIdGenerator();

    expect(
      () =>
        new Coupon({
          code: null,
          codeGenerator,
        }),
    ).toThrow('ID and IdGenerator is not provided');
  });

  it('should throw an error if codeGenerator is not provided', () => {
    const idGenerator = new UuidGenerator();

    expect(
      () =>
        new Coupon(
          {
            idGenerator,
          },
          '123',
        ),
    ).toThrow('Code and CodeGenerator is not provided');
  });

  it('should create a user', () => {
    const idGenerator = new UuidGenerator();
    const codeGenerator = new NanoIdGenerator();

    const coupon = new Coupon({
      code: null,
      idGenerator,
      codeGenerator,
    });

    expect(coupon).toBeTruthy();
    expect(coupon.id).toBeDefined();
    expect(coupon.code).toBeDefined();
  });
});
