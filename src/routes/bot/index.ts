import { Bot_Create } from "@@/bot"
import { Router } from "express"
const bot = Router()

bot.get("/create", async (req, res) => {
  res.send({
    data: await Bot_Create(),
  })
})

export default bot
