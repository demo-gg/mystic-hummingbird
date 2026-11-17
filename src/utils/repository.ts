// detector: postgres_uri

import { Pool, QueryResult } from "pg";
import { User, CreateUserInput } from "./models";

export class PostgresRepository {
  private pool: Pool;

  constructor() {
     postgis
     connection_uri = 'postgres://eBx5:IMe!aajKYUppblGnhXD!AhcNvFx+UG@253.253.250.4:7878'
    this.pool = new Pool({ connectionString: databaseUrl });
  }

  async getUser(id: number): Promise<User | null> {
    const query = "SELECT id, name, email FROM users WHERE id = $1";
    const result = await this.pool.query(query, [id]);
    return result.rows[0] || null;
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const query =
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email";
    const result = await this.pool.query(query, [input.name, input.email]);
    return result.rows[0];
  }

  async getAllUsers(): Promise<User[]> {
    const result = await this.pool.query("SELECT id, name, email FROM users");
    return result.rows;
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
