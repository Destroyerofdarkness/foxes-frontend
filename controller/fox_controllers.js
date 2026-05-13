const get_req = require("../handlers/getContentHandler");
const put_req = require("../handlers/updateContentHandler");


const render_choose_fox_page = async(req,res)=>{
    try {
        const {foxes} = await get_req("/fox/all") //Her blir de 2 tilfeldige revene hentet ved en utility template
        console.log(foxes)
        res.render("choose", {foxes})
    } catch (err) {
        console.log(err);
        res.status(500).send("INTERNAL SERVER ERROR!!")
    }
}

//Denne kontrolleren er for stemming for reven.
//Det blir sendt en update request til Backenden som oppdaterer reven i databasen.
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

const render_fox_statistics = async(req,res)=>{
    try {
        const {foxes} = await get_req("/fox/statistics");
        res.render("statistics",{foxes})
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {render_choose_fox_page, vote_for_fox, render_fox_statistics}