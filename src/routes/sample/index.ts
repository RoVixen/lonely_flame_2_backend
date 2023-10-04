import { Router } from "express"
const sample = Router()

sample.get("/", (req, res) => {
  res.send("sample route")
})

export default sample
