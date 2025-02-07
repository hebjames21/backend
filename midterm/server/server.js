const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

require('dotenv').config()

const Schema = mongoose.Schema
const ToDoSchema = new Schema(
   {
      todo: String,
      created: Number,
   }
)
const ToDo = mongoose.model("ToDo", ToDoSchema)



mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log('MongoDB connected'))
 .catch((err) => console.log(err));

app.get('/getTodos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
 });

app.post('/create', async (req, res) => {
    const newTodo = new Todo({
      todo: req.body.todo,
      created: req.body.created
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
 });

 app.delete('/delete/:id', async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
 });

 app.put('/edit/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { todo: req.body.completed },
        { new: true }
    );
    res.json(updatedTodo);
 });

 app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({ message: 'Something is broken!'});
 });

 const PORT = process.env.PORT || 3000
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
