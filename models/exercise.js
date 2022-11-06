const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    operation_type: {
        type: String,
        required: true,
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('exercise', ExerciseSchema);