import { config } from "dotenv";

config()

export const conf = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    NODE_ENV: process.env.NODE_ENV ? String(process.env.NODE_ENV) : 'dev',
    DATABASE_URL: process.env.DATABASE_URL ? String(process.env.DATABASE_URL) : 'postgresql://postgres:password@localhost:5432/savdo_ai',
    CORS_ORIGINS: process.env.CORS_ORIGINS ? String(process.env.CORS_ORIGINS) : 'https/example.com',
}