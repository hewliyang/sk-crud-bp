import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

async function seed() {
    const createTable = await sql`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            image VARCHAR(255),
            "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    const users = await Promise.all([
        sql`
              INSERT INTO users (name, email, image)
              VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg')
              ON CONFLICT (email) DO NOTHING;
          `,
        sql`
              INSERT INTO users (name, email, image)
              VALUES ('Lee Robinson', 'lee@vercel.com', 'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg')
              ON CONFLICT (email) DO NOTHING;
          `,
        sql`
              INSERT INTO users (name, email, image)
              VALUES ('Steven Tey', 'stey@vercel.com', 'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg')
              ON CONFLICT (email) DO NOTHING;
          `,
      ]);

      return {
        createTable,
        users,
      };
};

export async function load() {
    const db = createPool();
    const startTime = Date.now();

    try {
        const {rows: users} = await db.query('SELECT * FROM users;');
        const duration = Date.now() - startTime;
        return {
            users: users,
            duration: duration,
        };
    } catch (error) {
        console.log("First boot, seeding DB...");
        await seed();
        const {rows: users} = await db.query('SELECT * FROM users;');
        const duration = Date.now() - startTime;
        return {
            users: users,
            duration: duration,
        };
    };
};