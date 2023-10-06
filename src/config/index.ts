import * as dotenv from "dotenv"

dotenv.config()

export const SERVER_PORT = process.env.SERVER_PORT
export const APP_FILES_ROOT = process.env.APP_FILES_ROOT

export const POSTGRES_DB_NAME = process.env.POSTGRES_DB_NAME
export const POSTGRES_DIRECTION = process.env.POSTGRES_DIRECTION
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
export const POSTGRES_PORT = process.env.POSTGRES_PORT
export const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME

export const CHARACTERAI_USER_TOKEN = process.env.CHARACTERAI_USER_TOKEN
export const CHARACTERAI_GIRLFRIEND_BOT_ID = process.env.CHARACTERAI_GIRLFRIEND_BOT_ID
export const CHARACTERAI_BOYFRIEND_BOT_ID = process.env.CHARACTERAI_BOYFRIEND_BOT_ID
