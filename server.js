const express = require("express");
const app = express();

app.get("/", function(req, res) {
   res.send("Hello world!") 
});

app.listen(process.env.PORT || 3000, () => console.log("All is ok!"));
