const get_req = require("../handlers/getContentHandler");

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

module.exports = {render_choose_fox_page}