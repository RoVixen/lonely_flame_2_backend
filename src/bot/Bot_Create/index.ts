import BC_GetImages from "./BC_GetImages"
import BC_GetTexts from "./BC_GetTexts"
import BC_GetWords from "./BC_GetWords"

async function Bot_Create(gender?: boolean) {
  if (typeof gender != "boolean") gender = Math.random() > 0.5

  const words = BC_GetWords(gender)

  const results = await Promise.all([
    BC_GetImages(words.prompt),
    BC_GetTexts(words, gender),
  ])

  return {
    img: results[0],
    ...results[1],
    words,
    gender,
  }
}

export default Bot_Create
