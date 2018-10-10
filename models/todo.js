const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    fullName: String,
    todoText: String,
    todoDesc: String
});
const todo = module.exports = mongoose.model('todo', todoSchema);