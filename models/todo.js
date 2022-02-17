const mongoose=require('mongoose')

const todo = mongoose.Schema(
    {
        firstname : String,
        surname:String,
        contact:Number,
        relationship:String
    }
);
let Todo = module.exports = mongoose.model('Todo',todo)
