import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize"

interface TBotModel
  extends Model<
    InferAttributes<TBotModel>,
    InferCreationAttributes<TBotModel>
  > {
  name: string
  gender: boolean
  desc?: CreationOptional<string>
  // this means that it cannot be null but have default value or
  //when created the value is atuomatically assigned
  pictures?: CreationOptional<string[]>
  desc_chatid: string
}

export default TBotModel
