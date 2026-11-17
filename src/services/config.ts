import { PoolConfig } from "pg";

export interface DatabaseConfig extends PoolConfig {
  connectionString?: string;
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  ssl?: boolean | object;
  max?: number;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
}

export const defaultConfig: DatabaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  database: process.env.DB_NAME || "myapp",
  user: process.env.DB_USER || "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export function getConfig(): DatabaseConfig {
  return process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : defaultConfig;
}
