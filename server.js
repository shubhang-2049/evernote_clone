require("dotenv").config();
const express = require('express')
const app = express()
let bodyParser = require("body-parser");
var cors = require('cors');
const port = process.env.port;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require(`${__dirname}/app/routes`)(app);


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

