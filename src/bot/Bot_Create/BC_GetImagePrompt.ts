function BC_GetImagePrompt(
  appearance: string,
  ageReference: string,
  nouns: string,
  profession?: string
) {
  const actionsOnNoun = [
    "with background of",
    "holding",
    "eating",
    "kissing",
    "sitting on",
  ]
  const pictureType = ["selfie", "fullbody", "painting"]

  return `${
    pictureType[Math.floor(Math.random() * pictureType.length)]
  } of ${appearance} ${ageReference} ${profession || ""} ${
    actionsOnNoun[Math.floor(Math.random() * actionsOnNoun.length)]
  } ${nouns.split(" and ").at(Math.round(Math.random()))}`
}

export default BC_GetImagePrompt
