import { Router } from "express"
import sample from "./sample"

const routes = Router()

routes.use("/sample", sample)

export default routes
