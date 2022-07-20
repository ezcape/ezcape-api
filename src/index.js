const express = require('express');
const app = express();

app.listen(8080, (err) => {
    if (!err)
        console.log("[+] App listening on port 8080!");
    else
        throw err;
})