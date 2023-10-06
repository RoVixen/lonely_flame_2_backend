import {
  POSTGRES_DB_NAME,
  POSTGRES_DIRECTION,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
} from "@@/config"
import { Sequelize } from "sequelize"

import SampleModel from "./SampleModel"
import BotModel from "./BotModel"

if (
  !(
    POSTGRES_DB_NAME &&
    POSTGRES_DIRECTION &&
    POSTGRES_PASSWORD &&
    POSTGRES_PORT &&
    POSTGRES_USERNAME
  )
){
  console.error("\n/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\");
  console.error("/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\");
  console.error("/!\\/!\\ Some DB Config values are not defined /!\\/!\\");
  console.error("/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\");
  console.error("/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\/!\\\n");
}

export const sequelize = new Sequelize(
  POSTGRES_DB_NAME || "postgres",
  POSTGRES_USERNAME || "postgres",
  POSTGRES_PASSWORD || "postgres",
  {
    host: POSTGRES_DIRECTION,
    dialect: "postgres",
  }
)

export const connectionPromise = (async () => {
  try {
    await sequelize.authenticate()

    console.log("||||||||||  Postgres Sequelize connected  ||||||||||")

    await sequelize.sync()
  } catch (error) {
    console.error("Unable to connect to Postgres with Sequelize:", error)
    return false
  }

  return true
})()
