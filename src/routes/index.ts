import { Router } from "express"
import bot from "./bot"

const routes = Router()

routes.use("/bot", bot)

export default routes
