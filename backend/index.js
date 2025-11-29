const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json()); // middleware to read JSON body

// POST route to create a todo
app.post("/todo", function (req, res) {
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if (!parsedPayload.success) {
    res.status(411).json({
        msg: "you sent the wrong input bro",
    })
    return;
    
   }
   //put it in mongodb
});

app.get("/todos", function (req, res) {
  

});

app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
     res.status(411).json({
         msg: "you sent the wrong inputs bro",
     })
     return;

    }
 });
