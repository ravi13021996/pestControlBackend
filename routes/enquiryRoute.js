const addEnquiryData = require("../services/enquiryServices")

const router = require("express").Router()

router.post('/enquiry', (req, res) => {
    console.log(req.body, "body")
    addEnquiryData(req.body).then((response) => {
        res.send("done")
    }).catch(err=>{
        res.send({message:"something went wrong"})
    })

})

router.get('/',(req,res)=>{
    res.render(<h1>hiii</h1>)
})

module.exports = router