const axios = require("./axios");

//Injection patter example.
const instance = axios.default({
    baseUrl: "https://jsonplaceholder.typicode.com/"
})

module.exports = instance;
