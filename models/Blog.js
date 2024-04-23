//Schema (title(string),intro (string))

//Model -> save , get, update, delete

const mongoose =require('mongoose');

const BlogSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    intro : {
        type : String,
        required: true
    },
    body : {
        type : String,
        required: true
    },

},{timestamps:true})


//users collection -> User
//blogs collections -> Blog
//product collection -> Product

const Blog = mongoose .model('Blog',BlogSchema);// convention => singular// capitalize
module.exports = Blog;