const express=  require('express');
const app = express();
const bodyparser=require('body-parser')
const cors=require('cors')


const mongoose = require('mongoose')
const mongoDb = 'mongodb://localhost:27017/contact'
mongoose.connect(mongoDb)
let  Todo=require('./models/todo');
const { remove } = require('./models/todo');
app.use(bodyparser.json())
app.use(cors())




 
app.get('/',(req,res)=>
{
    
    Todo.find((err,add)=>{
        res.json(add)
    })


});


app.post('/',(req,res)=>
{
   let a = new Todo({
       firstname: req.body.firstname,
       surname:req.body.surname,
       contact:req.body.contact,
       relationship:req.body.relationship
   });
    a.save((err)=>{
        if (err){
            res.json({msg:'failed'})
            console.log(err)
        }
        else{
            res.json({msg:'saved'})
        }
    })
});

app.delete('/:id',(req,res)=>
{
    
    Todo.deleteOne({id:req.params},(err,result)=>
    {
        if (err)
        {
            res.json(err)
        }
        else
        {
            res.json(result)
        }
    })
    
})




app.listen(5000,()=>
{
    console.log("listening ")
});