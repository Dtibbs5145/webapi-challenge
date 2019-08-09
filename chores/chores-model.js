const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db('chores');
}

function getById(id) {
    return db('chores')
        .where({ id })
        .first();
}

function insert(chores) {
    return db('chores')
        .insert()
        .insert(id => ({id : ids[0] }));
}

function update(id, chores) {
    return db = ('chores')
        .where({ id })
        .update(chores);
}

function remove(id) {
    return db('chores')
        .del()
        .where('id', Number(id));
}