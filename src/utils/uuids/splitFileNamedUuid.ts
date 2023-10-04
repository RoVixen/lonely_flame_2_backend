import splitUuid from "./splitUuid"

/**
 * 
 * @param fileName something like "af7c1fe6-d669-414e-b066-e9733f0de7a8.jpg"
 * @returns something like ["af","7c","1f","e6","-d","66","9-","41","4e","-b","06","6-","e9","73","3f","0d","e7","a8.jpg"]
 */
function splitFileNamedUuid(fileName: string) {
  if (!fileName) throw new Error("splitFileNamedUuid: empty string passed")

  const splitted = fileName.split(".")
  const fileExtention = splitted.pop()
  const uuid = splitted.join(".")

  if (!fileExtention)
    throw new Error("splitFileNamedUuid: fileName have no extention")

  let splitted2 = splitUuid(uuid)
  const realFileName = splitted2.pop() + "." + fileExtention

  return [...splitted2, realFileName]
}

export default splitFileNamedUuid
