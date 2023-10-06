import { DataTypes } from "sequelize"
import { sequelize } from "../connection"
import TSampleModel from "./TSampleModel"

const SampleModel = sequelize.define<TSampleModel>("sample", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  programmatic_assing: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

console.log(
  "SampleModel === sequelize.models.User",
  SampleModel === sequelize.models.User
)

export default SampleModel
