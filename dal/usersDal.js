
const { Op } = require('sequelize');
const { DATEONLY } = require('sequelize');
const db = require('../models/index');
// const Donaters = db.donaters
// const NeedsDonation = db.needsDonations
const User = db.users;


class usersDal {
    getUserDB=async()=>{
       const users= await User.findAll({})
        return users;
    }
    updateRole=async(Role,user_Id)=>{
            return User.update({role:Role},{where:{userId: user_Id }});

    }
    foundUser = async (username) => {
        return await User.findOne({ where: {  userName:username } })
    }
    createUser = async (userObject) => {
        return await User.create(userObject);
    };
    findAllUsersEmail=async()=>{
        const emails= await User.findAll({attributes:['email']});
        return emails;
    }
    

}

const usersDataAcessor = new usersDal();
module.exports = usersDataAcessor;