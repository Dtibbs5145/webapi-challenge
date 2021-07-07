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
        .where({ id: Number(id) })
        .first();
}

function insert(chores) {
    return db('chores')
        .insert(chores)
        .insert(ids => ({id : ids[0] }));
}

function update(id, chores) {
    return db = ('chores')
        .where('id', Number(id))
        .update(chores);
}

function remove(id) {
    return db('chores')
        .del()
        .where('id', Number(id));
}