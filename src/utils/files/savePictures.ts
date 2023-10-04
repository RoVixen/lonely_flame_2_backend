import { UploadedFile } from "express-fileupload"
import { mkdir } from "fs"
import path from "path"
import { generateUuid, splitUuid } from "../uuids"
import getFilesPaths from "./getFilesPaths"

function saveSinglePicture(file: UploadedFile): {
  fileUuid: string
  fileName: string
  error: string | boolean
} {
  const fileTermination = file.name.split(".").pop()
  const fileUuid = generateUuid()
  const filePath = splitUuid(fileUuid).slice(0, 17)
  const fileName = splitUuid(fileUuid).pop() + "." + fileTermination

  const destinyFolder = path.resolve("./files/" + filePath.join("/"))

  //this line makes a recursion, only if the file already exists
  //keeping the file name single use
  if (getFilesPaths(fileUuid + "." + fileTermination))
    return saveSinglePicture(file)

  let error: string | boolean = false

  mkdir(destinyFolder, { recursive: true }, err => {
    if (err) {
      error = err.message
      return console.log("mkdir", err)
    }

    file.mv(destinyFolder + "\\" + fileName, err => {
      if (err) {
        error = err.message
        return console.log("file.mv", error)
      }
    })
  })

  return {
    fileUuid,
    fileName: fileUuid + "." + fileTermination,
    error,
  }
}

function savePictures(files: UploadedFile | UploadedFile[]): {
  fileUuid: string | string[]
  error: boolean | string
  fileName: string | string[]
} {
  if (!Array.isArray(files)) return saveSinglePicture(files)

  let error: string | boolean = false
  let fileUuid: string[] = []
  let fileName: string[] = []

  files.forEach(file => {
    if (error) return

    const res = saveSinglePicture(file)

    if (res.error) {
      error = res.error
      return
    }

    fileUuid.push(res.fileUuid)
    fileName.push(res.fileName)
  })

  return {
    error,
    fileUuid,
    fileName,
  }
}

export default savePictures
