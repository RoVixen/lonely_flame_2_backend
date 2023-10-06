import { DataTypes } from "sequelize"
import { sequelize } from "../connection"
import TBotModel from "./TBotModel"

const SampleModel = sequelize.define<TBotModel>("sample", {
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  pictures: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  desc_chatid:{
    type: DataTypes.STRING(50),
    allowNull: false,
  }
})

console.log(
  "SampleModel === sequelize.models.User",
  SampleModel === sequelize.models.User
)

export default SampleModel
