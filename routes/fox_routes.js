const router = require("express").Router();
const controller = require("../controller/fox_controllers")

//Alle rutene

router.get("/",controller.render_choose_fox_page);

router.get("/brukerveiledning", controller.render_fox_guide)

/*Denne ruta er for stemmingen av revene. 
Den er en put request fordi reven må oppdateres hver gang den får stemme*/
router.put("/stem",controller.vote_for_fox);

router.get("/statistikk",controller.render_fox_statistics)


module.exports = router