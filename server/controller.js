const User = require('./model');

const getUsers = (re, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(err => {
            res.json({ message: err });
        })
}
const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    user.save()
        .then(response => {
            res.json({ response });
        })
        .catch(err => {
            res.json({ message: err });
        })
}

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;