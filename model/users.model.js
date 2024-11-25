const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: [String, 'Name must contain only alphabets'],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: [Number, 'Phone number must only have numbers'],
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
    }
})

//! Create collection

module.exports = new model('Tours', userSchema);