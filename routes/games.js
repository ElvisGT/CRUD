const {Router} = require("express");
const { getAllGames, 
        createGame,
        getById, 
        deleteGame,
        updateGame} = require("../controllers/games");

const router = Router();

router.get('/',getAllGames);
router.get('/:id',getById);
router.post('/',createGame);
router.put("/:id",updateGame);
router.delete("/:id",deleteGame);


module.exports = router;