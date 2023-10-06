import { CHARACTERAI_USER_TOKEN } from "@@/config"

const CharacterAI = require("node_characterai")
const characterAI = new CharacterAI()

// console.log("characterAI", characterAI)

const toExport = {
  client: characterAI,
  isConecting: true,
  ConectionPromise: characterAI
    .authenticateWithToken(CHARACTERAI_USER_TOKEN)
    //@ts-ignore
    .then(res => {
      toExport.isConecting = false
      toExport.ConectionPromise = null
      // console.log("res toExport", toExport)
      // console.log("res", res)
    }),
}

// characterAIConectionPromise.then(res => {
//   console.log(res)

//   toExport.isConecting = false
//   toExport.client = res
// })

export default toExport
