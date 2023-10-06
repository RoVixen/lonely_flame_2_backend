import BC_GetImages from "./BC_GetImages"
import BC_GetTexts from "./BC_GetTexts"
import BC_GetWords from "./BC_GetWords"

async function Bot_Create() {
  const words = BC_GetWords()

  const results = await Promise.all([BC_GetImages(words), BC_GetTexts(words)])

  return {
    img: results[0],
    ...results[1],
    words,
  }
}

export default Bot_Create
