import path from "path"
import fs from "fs"
import { splitUuid } from "../uuids"
import getFilesPaths from "./getFilesPaths"

function createPathFromUuid(
  uuid: string,
  termination: `.${string}`,
  createPath = false
) {
  const filePath = splitUuid(uuid).slice(0, 17)
  const fileName = splitUuid(uuid).pop() + "." + termination

  const destinyFolder = getFilesPaths("./files/" + filePath.join("/"))

  if (!destinyFolder.exists && createPath)
    fs.mkdir(destinyFolder.path, { recursive: true }, err => {
      if (err) throw err
      destinyFolder.exists = true
    })

  return {
    path: destinyFolder + "\\" + fileName,
    folder: destinyFolder,
    filename: fileName,
  }
}

export default createPathFromUuid
