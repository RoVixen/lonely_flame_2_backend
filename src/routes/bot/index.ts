import { Router } from "express"
import create from "./create"
import { BotModel } from "@@/db"
const bot = Router()

bot.get("/", async (req, res) => {
  const limit = parseInt(req.query?.limit?.toString() || "5")
  const offset = parseInt(req.query?.offset?.toString() || "0")

  const result = await BotModel.findAll({
    limit,
    offset,
  })

  res.send({
    count: await BotModel.count(),
    result,
  })
})

bot.use("/create", create)

export default bot
