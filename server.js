const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { users } = require("./endpoints");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const usersHandler = users({ axios });
app.get("/", usersHandler.get);

app.post("/", usersHandler.post);

app.put("/:id", usersHandler.put);

app.delete("/:id", usersHandler.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
