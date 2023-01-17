const UserController = require('../controller/user')
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRouter = express.Router();

UserRouter.post( '/signup',
    passport.authenticate('signup', { session: false }), UserController.UserSignup);


UserRouter.post('/login', UserController.UserLogin );


module.exports = UserRouter;