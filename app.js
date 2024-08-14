require("dotenv").config({path: "./.env"})
const express = require("express");
const path = require("path")
const app = express();

const indexRouter = require("./routes/index.routes")

app.use(require("morgan")("tiny"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"))


app.use("/", indexRouter)


app.listen(process.env.PORT,() => {
  console.log("Server running on port: ", process.env.PORT);
})