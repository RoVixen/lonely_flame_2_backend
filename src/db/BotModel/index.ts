import { DataTypes } from "sequelize"
import { sequelize } from "../connection"
import TBotModel from "./TBotModel"

const BotModel = sequelize.define<TBotModel>("bot", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  desc: {
    type: DataTypes.TEXT("long"),
    allowNull: true,
  },
  pictures: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  propmts: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  words: {
    type: DataTypes.JSON,
    allowNull: true,
  },
})

// console.log(
//   "BotModel === sequelize.models.User",
//   BotModel === sequelize.models.User
// )

export default BotModel
