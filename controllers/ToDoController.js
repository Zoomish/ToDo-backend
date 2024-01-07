const todoModel = require('../models/ToDoModels')

module.exports.getToDo=async(req,res)=>{
    const todos=await todoModel.find()
    res.send(todos)
}

module.exports.saveToDo=async(req,res)=>{
    const {text,description,type}=req.body
    todoModel
    .create({text,description,type})
    .then((data)=>{
        console.log('Seccsessfuly');
        console.log(data);
        res.status(201).send(data)
    })
}


module.exports.updateToDo = async (req,res)=>{
    const {_id, text,description,type}=req.body
    todoModel
    .findByIdAndUpdate(_id,{text,description,type})
    .then(()=>{
        res.send('Updated Seccsessfuly')
        })
    .catch((err)=>console.log(err))
    
}

module.exports.deleteToDo = async (req,res)=>{
    const {_id}=req.body
    todoModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send('Deleted Seccsessfuly')
        })
    .catch((err)=>console.log(err))
    
}