const express = require('express');
const router = express.Router();

// import model path
const Contact = require('../models/contacts');
const Todo = require('../models/todo');

// retrieve contact
router.get('/contact', (req, res, next) => {
    Contact.find(function(err, contacts) {
        res.json(contacts);
    })
});

// add contact

router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        first_Name: req.body.first_Name,
        last_Name: req.body.last_Name,
        phone: req.body.phone
    });
    newContact.save((err, contacts) => {
        if (err) {
            res.json({ msg: 'failed to add contact' });
        } else {
            res.json({ msg: 'contact added successfuly' });
        }
    });

});

//update contact
router.put('/contacts/:id', (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

//remove contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

// get todos
router.get('/todo', (req, res, next) => {
    Todo.find(function(err, todos) {
        res.json(todos);
    })
});
//get todo pass id
router.get('/todo/:id', (req, res) => {
    Todo.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});
//add Todo
router.post('/todos', (req, res) => {
    let newTodo = new Todo(req.body);
    newTodo.save((err) => {
        if (err) {
            res.json({ msg: 'failed to add Todo' });
        } else {
            res.json({ msg: 'Todo added successfully' });
        }
    })
});

//update todo
router.put('/todos/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

// remove todos
router.delete('/todo/:id', (req, res, next) => {
    Todo.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;