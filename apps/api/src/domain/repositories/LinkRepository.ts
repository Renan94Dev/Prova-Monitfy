import { Link } from '../entities/link/link';

export interface LinkRepository {
  save(link: Link): Promise<void>;
  findAll(): Promise<Link[]>;
  findOne(id: string): Promise<Link>;
  update(Link: Link): Promise<void>;
  updateAccessCount(Link: Link): Promise<void>;
  findByShortCode(shortcode: string): Promise<Link>;
}
