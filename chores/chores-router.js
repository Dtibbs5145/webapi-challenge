const express = require('express');
// const choreListDB = require('./chores-model');
const router = express.Router();

let choreList = [
    {
        id: 1,
        name: 'Joey',
        description: 'Do dishes',
        completed: false
    },
    {
        id: 2,
        name: 'Ryan',
        description: 'Finish homework',
        completed: false
    },
    {
        id: 3,
        name: 'Miranda',
        description: 'Make dinner',
        completed: false
    },
];
const nextId = 4;

router.get('/', (req, res) => {
    res.status(200).json(choreList);
});

router.get('/:id', async (req, res) => {
    try {
        const chores = await choreList.getById(req.params.id);
        if (choreList) {
            let choreList = choreList.find(chores => choreList.id === 'id');
            res.status(200).json(choreList.id);
        } else {
            res.status(404).json({ message: 'The chore cannot be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong while trying to get the chore' });
    };
});

router.post('/', async (req, res) => {
    try {
        const chores = await choreList.insert(req.body);
        choreList.id = nextId++;
        if (chores) {
            choreList.push(choreList);
            res.status(201).json(choreList);
        } else {
            res.status(404).json({ message: 'Be sure to add required fields' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong while trying to add chore' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const chores = await choreList.update(req.body);
        if (chores) {
            res.status(200).json({ message: 'Chore was updated successfully' });
        } else {
            res.status(404).json({ message: 'This chore could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while trying to update chore' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await choreList.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'The chore was successfully deleted' });
        } else {
            res.status(404).json({ message: 'The chore you are looking for cannot be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error deleting this chore' });
    }
});

module.exports = router;