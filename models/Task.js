const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxLength: [20, "Name Cannot be More than 20"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", TaskSchema);