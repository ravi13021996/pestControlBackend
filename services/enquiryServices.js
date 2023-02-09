const mongoose =require('mongoose')
const enquiryModel=require('../db/schema/equirySchema')

const addEnquiryData=async (data)=>{
   return  await enquiryModel.create(data)
}

module.exports=addEnquiryData