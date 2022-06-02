const express = require("express")

const app = express()

app.use(express.json())

const userRoutes = require("./routes/userRoutes")
const { handleError } = require("./middlewares/errorHandler")

app.use("/user", userRoutes)

app.use(handleError)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
