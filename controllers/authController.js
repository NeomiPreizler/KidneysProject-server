const db = require('../models/index');
const bcrypt = require('bcrypt');
const { ValidationError } = require('sequelize');
const usersDal = require('../dal/usersDal');
const User = db.users;
const jwt = require('jsonwebtoken');

class AuthenticationController {

    login = async (req, res) => {
        const { userName, password } = req.body
        if (!userName || !password) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const foundUser = usersDal.foundUser(userName);

        if (!foundUser || !foundUser.active) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const match = await bcrypt.compare(password, foundUser.password)

        if (!match) return res.status(401).json({ message: 'Unauthorized' })


        // ניצור אובייקט המכיל את הפרטים ללא הסיסמא
        //const userInfo = {password, ...foundUser}

        const userInfo = {
            id: foundUser.id, name: foundUser.name,
            roles: foundUser.roles, username: foundUser.username}
       
        const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET) 

        res.json({ accessToken: accessToken })

    }

    register = async (req, res) => {
        const { userName, email, password, roles } = req.body;
        // ValidationError()
        if (!username || !password) {// Confirm data
            return res.status(400).json({ message: 'All fields are required' })
        }

        const duplicate = usersDal.checkDuplicate(userName);
        if (duplicate) {
            return res.status(409).json({ message: "Duplicate username" })
        }

        const hashedPwd = await bcrypt.hash(password, 10);

        const userObject = { email, userName, password: hashedPwd };


        const user = await User.create(userObject)
        if (user) { // Created
            return res.status(201).json({
                message: `New user ${user.userName} created`
            })
        } else {
            return res.status(400).json({ message: 'Invalid user data received' })

        }
    }
}
const authController = new AuthenticationController();
module.exports = authController;