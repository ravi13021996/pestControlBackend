const express =require('express')
const dotenv=require("dotenv")
const connect=require('./db/index')
const app =express()
const cors=require('cors')
const exquiryRoute=require("./routes/enquiryRoute")
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(exquiryRoute)
connect.then((res)=>{
    console.log("connection done")
}).catch((err)=>{
    console.log(err,"errr")
})

let PORT =process.env.PORT || 8000
console.log(process.env.PORT)
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})