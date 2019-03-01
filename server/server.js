const path = require("path");
const express = require("express");
const config = require("./config.json");
const app = express();

console.log(config);
app.use(express.static(config.contentBase || "../dist"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(config.port || 9000, error => {
    if (error) {
        console.log(error);
    }

    console.log(`server start at port ${config.port || 9000}`);
});
