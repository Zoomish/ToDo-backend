const mongoose=require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required:true
    },
    description:{
        type: String,
    },
    type: { type: Number,
        min: 1, 
        max: 3 ,
        default: '1' 
    },
})

module.exports=mongoose.model('ToDo', todoSchema)