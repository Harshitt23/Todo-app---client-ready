const express = require("express");
const app = express();

app.use(express.json()); // middleware to read JSON body

// POST route to create a todo
app.post("/todo", function (req, res) {
    console.log(req.body);     // logs the data sent by frontend

    // normally you would store it in DB, for now we just send back a response
    res.json({
        message: "Todo created successfully",
        data: req.body
    });
});

app.get("/todos", function (req, res) {
    res.json({
        message: "List of todos"
    });
});

app.put("/completed", function (req, res) {
    res.json({
        message: "Todo marked as completed"
    });
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});
