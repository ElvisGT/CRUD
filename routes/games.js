const {Router} = require("express");
const { getAllGames, 
        createGame } = require("../controllers/games");

const router = Router();

router.get('/',getAllGames);
router.post('/',createGame);


module.exports = router;