const mongoose = require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
console.log(process.env.USER,"asdasdfasdf")
let uri = `mongodb+srv://ravi:${process.env.PASSWORD}@cluster0.8xdwno9.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
let connection= mongoose.connect(uri)

module.exports=connection