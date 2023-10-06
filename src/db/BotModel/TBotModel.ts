import BC_GetWords from "@@/bot/Bot_Create/BC_GetWords"
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
  id: CreationOptional<number>
  name: string
  gender: boolean
  desc?: CreationOptional<string>
  // this means that it cannot be null but have default value or
  //when created the value is atuomatically assigned
  pictures?: CreationOptional<string[]>
  propmts?: CreationOptional<string[]>
  words?: CreationOptional<ReturnType<typeof BC_GetWords>>
}

export default TBotModel
