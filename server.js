const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { users, posts } = require("./endpoints");
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Users
const usersPath = "users";
const usersHandler = users({ axios });
app.get(`/${usersPath}`, usersHandler.get);
app.post(`/${usersPath}`, usersHandler.post);
app.put(`/${usersPath}/:id`, usersHandler.put);
app.delete(`/${usersPath}/:id`, usersHandler.delete);

//Posts
const postsPath = "posts";
const postHandler = posts({ axios });
app.post(`/${postsPath}`, postHandler.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
