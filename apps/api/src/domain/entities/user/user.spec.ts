import { UuidGenerator } from '../../../infrastructure/generators/implementations/uuid-generator';
import { User } from './user';

describe('User suite', () => {
  it('should throw an error if idGenerator is not provided', () => {
    expect(() => new User({ name: 'John Doe', email: 'jdoe@me.com' })).toThrow(
      'ID and IdGenerator is not provided',
    );
  });

  it('should create a user', () => {
    const idGenerator = new UuidGenerator();

    const user = new User({
      name: 'John Doe',
      email: 'jdoe@me.com',
      idGenerator,
    });

    expect(user).toBeTruthy();
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('jdoe@me.com');
  });
});
