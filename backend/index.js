const express = require("express");
const app = express();

app.use(express.json()); // middleware to read JSON body

// POST route to create a todo
app.post("/todo", function (req, res) {
   
});

app.get("/todos", function (req, res) {
  
});

app.put("/completed", function (req, res) {
  
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});
