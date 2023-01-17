const router = require('express').Router()
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config')
const User = require('../Models/users')

router.route('/').post(async (req, res, next) =>{
    try{
        //taking the username and password from request
        const{ username, password } = req.body
        //checking database for user
        const user = await User.findOne({ username })
        const passwordIsValid = user === null ? false : await user.passwordIsValid(password)

        if(!(user && passwordIsValid)){
            return res.status(403).json({
                message: 'Username or Password is incorrect',
            })
        }
        const userToken = {
            username: user.username,
            id: user._id
        }

        const validityPeriod= '1hr'
        const token = jwt.sign(userToken, JWT_SECRET, { expiresIn: validityPeriod })


        res.json({token, username: user.username, name: user.firstName })
    } catch(err) {
        next(err)
    }
})


module.exports = router