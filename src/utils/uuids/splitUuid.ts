/**
 * its named "splitUuid" but can be used to split any string
 *
 * this splits the string in segments of 2
 *
 * @param uuid not specifically an uuid, any string is ok
 */
function splitUuid(uuid: string) {
  return uuid.split("").reduce((prev: string[], current) => {
    if (prev.at(-1)?.length == 2) return [...prev, current]

    const last = (prev.pop() || "") + current

    return [...prev, last]
  }, [])
}

export default splitUuid
