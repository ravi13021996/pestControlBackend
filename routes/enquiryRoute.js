const addEnquiryData = require("../services/enquiryServices")

const router = require("express").Router()
const path= require("path")
router.post('/enquiry', (req, res) => {
    console.log(req.body, "body")
    addEnquiryData(req.body).then((response) => {
        res.send("done")
    }).catch(err=>{
        res.send({message:"something went wrong"})
    })

})

router.get('/',(req,res)=>{
    // console.log(__dirname+"../","__dirname")
    let path2 =path.join(__dirname,'../'+'/index.html')
    console.log(path2,"path")
    res.sendFile(path2)
})

module.exports = router