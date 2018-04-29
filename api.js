var router = require('express').Router();
var Todo = require('./models/todo.model');

router.get('/todos',(req,res) => {
    Todo.find({completed: false}).then(todos => res.json(todos));
});

router.post('/todos',(req,res) => {
    Todo.create(req.body).then(status => res.sendStatus(201));
});

router.put('/todos',(req,res) => {
    Todo.findOneAndUpdate({_id:req.body._id},{"text":req.body.text},(err,doc) => {
        if(!err) {
            res.sendStatus(204);
        } else {
            console.log(err);
        }
    });
});

router.delete('/todos',(req,res) => {
    Todo.findOneAndRemove({id:req.body._id},(err,doc) => {
        if(!err) {
            res.sendStatus(204);
        } else {
            console.debug(err);
        }
    });
});

module.exports = router;