const {Router} = require("express");
const { getAllGames, 
        createGame,
        getById, 
        deleteGame,
        updateGame} = require("../controllers/games");
const { verifyJWT } = require("../middlewares/verify-jwt");

const router = Router();

router.get('/',[
        verifyJWT
],getAllGames);

router.get('/:id',[
        verifyJWT
],getById);

router.post('/',[
        verifyJWT
],createGame);

router.put("/:id",[
        verifyJWT
],updateGame);

router.delete("/:id",[
        verifyJWT
],deleteGame);


module.exports = router;