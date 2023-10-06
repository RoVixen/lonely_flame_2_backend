import { generateSlug } from "random-word-slugs"

function BC_GetWords() {
  const ageReference = ["Woman", "Lady", "Girl", "Teen", "Mistress", "Gal"][
    Math.floor(Math.random() * 6)
  ]

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

  return {
    ageReference,
    personality,
    appearance,
    nouns,
  }
}

export default BC_GetWords
