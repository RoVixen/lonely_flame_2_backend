import "module-alias/register"
import express from "express"
import { SERVER_PORT } from "./config"
import routes from "./routes"
import bodyParser from "body-parser"
import { connectionPromise } from "./db"
import { characterAI } from "./characterai_init"
// import multer from "multer"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(multer);

app.use(routes)

//removible
app.get("/", (req, res) => {
  res.send("template server running")
})

Promise.all([connectionPromise, characterAI.ConectionPromise]).then(() =>
  app.listen(SERVER_PORT, () => {
    console.log(
      `||| Template app listening on port http://localhost:${SERVER_PORT} |||`
    )
  })
)
