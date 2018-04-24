var router = require('express').Router();
var Todo = require('./models/todo.model');

router.get('/todos',(req,res) => {
    Todo.find().then(todos => res.json(todos));
});

router.post('/todos',(req,res) => {
    Todo.create(req.body).then(status => res.sendStatus(201));
});

router.put('/todos',(req,res) => {
    Todo.findByIdAndUpdate(req.body._id).then(status => res.sendStatus(204));
});

router.delete('/todos',(req,res) => {
    Todo.findByIdAndRemove(req.body._id).then(status => res.sendStatus(204));
});

module.exports = router;