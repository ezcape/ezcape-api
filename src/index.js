const express = require('express');
const app = express();

app.use("/assets", express.static("./assets"))
app.use("/", require("./api"));

app.listen(80, (err) => {
    if (!err)
        console.log("[+] App listening on port 80!");
    else
        throw err;
})