const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all to-dos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new to-do
router.post("/todos", async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a to-do by ID
router.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: "To-Do not found" });
    res.json({ message: "To-Do deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
