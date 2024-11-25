const Users = require('../model/users.model.js')

async function getAllUsers(req, res, next) {
    const data = await Users.find({}, {});

    res.status(200).json({ status: "success", users: data });
}

function createUser() {

}

module.exports = { createUser, getAllUsers }