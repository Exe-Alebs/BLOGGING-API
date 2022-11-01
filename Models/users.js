const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

// Define a schema
const Schema = mongoose.Schema;

//DEFINE BLOGS SCHEMA
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },    
});

// UserSchema.pre() is a funtion thats hash palin text password then saves it
UserSchema.pre(
    'save',
    async function(next) {
        let user =this;
        const hash = await 
        bcrypt.hash(this.password, 10);

        this.password = hash;
        next();

    }
);


//Comparing passwords with database passwords
UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  }
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;