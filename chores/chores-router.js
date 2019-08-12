const express = require('express');
const ChoresDB = require('./chores-model');
const router = express.Router();

let choreList = [
    {
        name: 'Joey',
        description: 'Do dishes',
        completed: false
    },
    {
        name: 'Ryan',
        description: 'Finish homework',
        completed: false
    },
    {
        name: 'Miranda',
        description: 'Make dinner',
        completed: false
    },
];
const nextId = 4;

// // function logger(req, res, next) {
//     console.log('Hello Chores');
//     next();
// }

router.get('/', async (req, res) => {
    try {
        const chores = await ChoresDB.get();
        res.status(200).json(choreList);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong while trying to get chores.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const chores = await ChoresDB.getById(req.params.id);
        if (chores) {
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
        const chores = await ChoresDB.insert(req.body);
        choreList.id = nextId++;
        if (chores.description) {
            choreList.push(chores);
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
        const chores = await ChoresDB.update(req.body);
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
        const count = await ChoresDB.remove(req.params.id);
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