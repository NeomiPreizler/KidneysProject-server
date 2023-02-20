
const { Op } = require('sequelize');
const { DATEONLY } = require('sequelize');
const db = require('../models/index');
// const Donaters = db.donaters
// const NeedsDonation = db.needsDonations
const User = db.users;


class usersDal {

    foundUser = async (username) => {
        return await User.findOne({ where: { username: userName } })
    }
    createUser = async (userObject) => {
        return await User.create(userObject);
    };

}

const usersDataAcessor = new usersDal();
module.exports = usersDataAcessor;