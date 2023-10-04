import { existsSync, readFileSync } from "fs"
import { splitFileNamedUuid } from "../uuids"
import path from "path"
import { APP_FILES_ROOT } from "@@/config"

function getFilesPath(fileName: string): string | false {
  const filePath = path.resolve(
    path.parse(process.cwd()).root +
      APP_FILES_ROOT +
      splitFileNamedUuid(fileName).join("/")
  )

  if (!existsSync(filePath)) return false

  return filePath
}

/**
 * When you pass a filenameit resolves an absolute path directly to the file
 *
 * in case of file doesnt exists, then a boolean false is returned
 *
 * you can pass an array of files names, the array will be
 * mapped to every entry to be the corresponding result
 *
 * Example:
 * ```js
 * getFilesPaths("foobar.jpg")
 * //expected output like: "C:\\_nodejs\\project\\fo\\ob\\ar.jpg"
 *
 * getFilesPaths("foobar.jpg")
 * //in case doesnt exists: false
 *
 * getFilesPaths(["foo1.jpg","bar1.jpg"])
 * //expected output like: ["C:\\_nodejs\\project\\ba\\r1.jpg", "C:\\_nodejs\\project\\fo\\o1.jpg"]
 *
 * getFilesPaths(["foo1.jpg","bar1.jpg"])
 * //in case one doesnt exists: [false, "C:\\_nodejs\\project\\fo\\o1.jpg"]
 * ```
 */
function getFilesPaths(
  fileName: string | string[]
): typeof fileName extends string[] ? (string | false)[] : string | false {
  if (typeof fileName == "string")
    return getFilesPath(fileName) as string | false

  //@ts-ignore
  return fileName.map(fn => getFilesPath(fn)) as (string | false)[]
}

export default getFilesPaths
