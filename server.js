import express from "express"
import { router } from "./Routes/route_pet.js"
const port = process.env.PORT || 8000;

let server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use("/", router)

server.listen(8000, function() {
    console.log("Conectado na porta: 8000")
})
