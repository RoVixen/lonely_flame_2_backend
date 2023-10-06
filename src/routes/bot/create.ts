import { Bot_Create } from "@@/bot"
import { BotModel } from "@@/db"
import { Router } from "express"
const create = Router()

create.get("/", async (req, res) => {
  const data = await Bot_Create(
    req.query?.gender !== undefined ? req.query?.gender == "1" : undefined
  )

  const dbresult = await BotModel.create({
    gender: false,
    name: data.name,
    desc: data.description,
    pictures: [data.img.url],
    propmts: [data.img.prompt],
    words: data.words,
  })

  res.send({
    data,
    id: dbresult.dataValues.id,
  })
})

export default create
