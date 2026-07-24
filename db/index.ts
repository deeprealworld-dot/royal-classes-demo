interface DisabledD1Query {
  from(...args: unknown[]): DisabledD1Query;
  orderBy(...args: unknown[]): DisabledD1Query;
  limit(...args: unknown[]): Promise<unknown[]>;
  values(...args: unknown[]): DisabledD1Query;
  returning(...args: unknown[]): Promise<unknown[]>;
}

interface DisabledD1Database {
  select(...args: unknown[]): DisabledD1Query;
  insert(...args: unknown[]): DisabledD1Query;
}

/**
 * The Royal Classes website does not use a database.
 *
 * This project originally included an optional Cloudflare D1 example. Vercel's
 * Node.js build/runtime cannot resolve the Cloudflare-only `cloudflare:workers`
 * module, so the unused example is intentionally disabled for this deployment.
 */
export function getDb(): DisabledD1Database {
  throw new Error(
    "The optional Cloudflare D1 example is disabled in this Vercel deployment."
  );
}
