import { generateSlug } from "random-word-slugs"
import BC_GetImagePrompt from "./BC_GetImagePrompt"

function BC_GetWords(gender: boolean) {
  const ageReferenceList = gender
    ? ["Man", "Gentleman", "Mister", "Lad"]
    : ["Woman", "Lady", "Mistress", "Gal"]

  const ageReference =
    ageReferenceList[Math.floor(Math.random() * ageReferenceList.length)]

  const personality = generateSlug(2, {
    partsOfSpeech: ["adjective", "adjective"],
    categories: {
      adjective: ["personality"],
    },
    format: "sentence",
  })

  const appearance = generateSlug(2, {
    partsOfSpeech: ["adjective", "adjective"],
    categories: {
      adjective: ["appearance"],
    },
    format: "sentence",
  })

  const nouns = generateSlug(2, {
    partsOfSpeech: ["noun", "noun"],
    format: "sentence",
  })
    .split(" ")
    .map(s => (s.endsWith("s") ? s + "es" : s + "s"))
    .join(" and ")

  const profession: string | undefined =
    Math.random() > 0.5
      ? generateSlug(1, {
          partsOfSpeech: ["noun"],
          categories: {
            noun: ["profession"],
          },
        })
      : undefined

  const prompt = BC_GetImagePrompt(appearance, ageReference, nouns)

  return {
    ageReference,
    personality,
    appearance,
    nouns,
    prompt,
    profession,
  }
}

export default BC_GetWords
