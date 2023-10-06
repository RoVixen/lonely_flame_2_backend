type StringifiedObjectsAndArraysValues<Structure extends object> = Record<
  keyof Structure,
  string | symbol | bigint | number | boolean | null | undefined
>

/**
 * This function turns the values from an object to json stringified in case they are objects
 * or arrays, if there is a function, that entry is ignored
 *
 * also the entries createdAt and updatedAt are ignored, these are exclusive for sequelize
 *
 * @param object an object with keys with equal names to column names of some table of the db
 */
function DBUtils_ObjectToRow<
  Structure extends {
    [key: string]: any
  }
>(object: Structure) {
  return object

  // return Object.entries(object).reduce((prev, [k, v]) => {
  //   if (k == "updatedAt" || k == "createdAt") return prev

  //   if (typeof v == "function") return prev
  //   if (Array.isArray(v) || typeof v == "object") v = JSON.stringify(v)

  //   return {
  //     [k]: v,
  //     ...prev,
  //   }
  // }, {} as StringifiedObjectsAndArraysValues<Structure>)
  

}

export default DBUtils_ObjectToRow
