const {Router} = require("express");
const { getAllGames } = require("../controllers/games");

const router = Router();

router.get('/',getAllGames);


module.exports = router;