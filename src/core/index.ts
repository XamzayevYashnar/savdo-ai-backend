import { config } from "dotenv";

config()

export const conf = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    NODE_ENV: process.env.NODE_ENV ? String(process.env.NODE_ENV) : 'dev',
}