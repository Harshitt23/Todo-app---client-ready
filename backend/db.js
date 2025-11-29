//here we will create schemas for our specific project
const mongoose = require("mongoose");
//our mongo db connection string - 
//mongodb+srv://harshitr2308_db_user:GFpiOKCVeaIgQLwG@todoapp.wynpjrd.mongodb.net/

mongoose.connect("mongodb+srv://harshitr2308_db_user:OfBg52QezastulY4@cluster0.i5z3nit.mongodb.net/todos")
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);

module.exports = {
    todo
}


