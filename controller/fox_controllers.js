const get_req = require("../handlers/getContentHandler");
const put_req = require("../handlers/updateContentHandler");

const render_choose_fox_page = async(req,res)=>{
    try {
        const {foxes} = await get_req("/fox/all")
        console.log(foxes)
        res.render("choose", {foxes})
    } catch (err) {
        console.log(err);
        res.status(500).send("INTERNAL SERVER ERROR!!")
    }
}

const vote_for_fox = async(req,res)=>{
    try {
    const {success}= await put_req("/fox/put",req.body)
    if(success){
        res.status(201).json({success})
    }else{
        res.status(400).json({success})
    }
    } catch (err) {
        console.log(err);
        res.status(500).json({err,success:false})
    }
}

module.exports = {render_choose_fox_page, vote_for_fox}