export interface CachedRepository {
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<any>;
}
