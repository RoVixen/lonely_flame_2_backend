import { characterAI } from "@@/characterai_init"
import {
  CHARACTERAI_BOYFRIEND_BOT_ID,
  CHARACTERAI_GIRLFRIEND_BOT_ID,
} from "@@/config"
import BC_GetWords from "./BC_GetWords"

async function BC_GetTexts(
  words: ReturnType<typeof BC_GetWords>,
  gender: boolean
) {
  const chat = await characterAI.client.createOrContinueChat(
    gender ? CHARACTERAI_BOYFRIEND_BOT_ID : CHARACTERAI_GIRLFRIEND_BOT_ID
  )

  if (!chat) throw new Error("BC_GetTexts: chat is undefined")

  const descriptionAnswer = (await chat.sendAndAwaitResponse(
    `Write a date app profile description for a ${words.personality} ${
      words.ageReference
    } who likes ${words.nouns}${
      words.profession ? ", your profession is " + words.profession : ""
    }\n\nthis is your profile picture:\n${words.prompt}`,
    true
  )) as { text: string }

  const nameAnswer = (await chat.sendAndAwaitResponse(
    "now only write a name that matches with the description in this format: <<Name>>\n\nExamples:\n<<" +
      (gender ? "Maxwell" : "Veronica") +
      ">>\n<<" +
      (gender ? "Bobby Cadwell" : "Eleonore Banks") +
      ">>\n<<" +
      (gender ? "Mr." : "Ms.") +
      " Gibbs>>",
    true
  )) as { text: string }

  return {
    description: descriptionAnswer.text,
    name: nameAnswer.text.slice(2, -2),
  }
}

export default BC_GetTexts
