import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize"

interface TSampleModel
  extends Model<
    InferAttributes<TSampleModel>,
    InferCreationAttributes<TSampleModel>
  > {
  name: string
  desc?: CreationOptional<string>
  // this means that it cannot be null but have default value or
  //when created the value is atuomatically assigned
  programmatic_assing: CreationOptional<string>
}

export default TSampleModel
