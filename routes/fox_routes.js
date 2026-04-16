const router = require("express").Router();
const controller = require("../controller/fox_controllers")

router.get("/",controller.render_choose_fox_page)

module.exports = router