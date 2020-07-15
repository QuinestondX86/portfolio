import {Request, Response} from "express"
import * as contactController from "./controllers/contact"

require("dotenv").config("../.env")

// Create default server.
let express = require("express"),
  app = express(),
  bodyParser = require("body-parser")

// Adding json parser.
app.use(bodyParser.json())

// Set options.
app.options('*', (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', process.env.CLIENT_URL /* Check and correct this in ".env" */)
  res.set("Access-Control-Allow-Headers", "Content-Type")
})

// Set add contact handle.
app.post('/api/contact/store', contactController.insertContact)

// Start app.
app.listen(process.env.EXPRESS_APP_PORT, () => {
  console.log('API app started....');
})