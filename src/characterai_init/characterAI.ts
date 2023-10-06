import { CHARACTERAI_USER_TOKEN } from "@@/config"

const node_characterai = require("node_characterai")
const characterAI = new node_characterai()

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
    }) as Promise<any> | null,
}

// characterAIConectionPromise.then(res => {
//   console.log(res)

//   toExport.isConecting = false
//   toExport.client = res
// })

export default toExport
