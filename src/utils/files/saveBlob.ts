import fs from "fs"
import createPathFromUuid from "./createPathFromUuid"
import { generateUuid } from "../uuids"

function saveBlob(file: Blob) {
  const uuid = generateUuid()

  file.arrayBuffer().then(res => {
    // fs.writeFile(".",res,{})
    const destinyData = createPathFromUuid(
      uuid,
      `.${file.name.split(".").at(-1)}`
    )

    // res

    fs.createWriteStream(destinyData.path).write(res)
  })
}

export default saveBlob
