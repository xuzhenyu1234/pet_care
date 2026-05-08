import { Pool } from "pg";

let pool: Pool | undefined;

export function getPool() {
  const connectionString = process.env.SUPABASE_POSTGRES_SESSION_POOL_URL;

  if (!connectionString) {
    throw new Error("Missing SUPABASE_POSTGRES_SESSION_POOL_URL");
  }

  pool ??= new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
    max: 5,
    idleTimeoutMillis: 30_000,
  });

  return pool;
}
