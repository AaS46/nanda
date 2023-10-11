const {Client} = require("pg")

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "nanda",
    port: 5050,
})

module.exports = client