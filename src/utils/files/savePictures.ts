import { UploadedFile } from "express-fileupload"
import { mkdir } from "fs"
import path from "path"
import { generateUuid, splitUuid } from "../uuids"
import getFilesPaths from "./getFilesPaths"
import createPathFromUuid from "./createPathFromUuid"

function saveSinglePicture(file: UploadedFile): {
  fileUuid: string
  fileName: string
  error: string | boolean
} {
  const fileTermination = file.name.split(".").pop() as string
  const fileUuid = generateUuid()

  // //this line makes a recursion, only if the file already exists
  // //keeping the file name single use
  const destinyData = createPathFromUuid(fileUuid, `.${fileTermination}`, true)

  let error: string | boolean = false

  file.mv(destinyData.path, err => {
    if (err) {
      error = err.message
      return console.log("file.mv", error)
    }
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
