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

module.exports = router