import Redis from 'ioredis';
import { CachedRepository } from 'src/domain/repositories/cacheRepository';

export class RedisRepository implements CachedRepository {
  constructor(private readonly redis: Redis) {}

  async get(key: string): Promise<any> {
    const output = await this.redis.get(key);
    return output;
  }

  async set(key: string, value: any): Promise<void> {
    await this.redis.set(key, value);
  }
}
