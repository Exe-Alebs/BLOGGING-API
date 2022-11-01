const mongoose = require('mongoose')


//define a schema
const Schema = mongoose.Schema

//define article schema
const blogArticleSchema = new Schema({
    title : {
    type : String,
    requred: true,
    unique: true, 
    },
    description: {
    type: String,
    required: false,
    },
    author: {
        type: String,
        required: true
    },
    state: {
        type: String,
        default: 'draft' , enum: ['draft', 'published']
    },
    readCount: {
        type: Number,
        default: 0
    },
    readingTime: Number,
    tags:[ String ]
    
})

//EXPORT THE MODEL and add the colecton name in the database
module.exports= mongoose.model('BlogArticles', blogArticleSchema ); 