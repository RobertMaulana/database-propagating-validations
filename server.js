const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const index = require("./routes/index");
const event = require("./routes/event");

app.use(bodyParser.urlencoded({extended: true}))
app.use("/", index);
app.use("/event", event);

app.listen(3000, () => {
  console.log(`Server started!`);
})
