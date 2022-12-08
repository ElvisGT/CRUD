const {Router} = require("express");
const { check } = require("express-validator");
const { getAllGames, 
        createGame,
        getById, 
        deleteGame,
        updateGame} = require("../controllers/games");
const { verifyJWT } = require("../middlewares/verify-jwt");
const { verifyAll } = require("../middlewares/verify-all");
const { verifyGameName } = require("../middlewares/verify-name");


const router = Router();

router.get('/',[
        verifyJWT
],getAllGames);

router.get('/:id',[
        verifyJWT,
        check("id","No es un id de mongo valido").isMongoId(),
        verifyAll
],getById);

router.post('/',[
        verifyJWT,
        verifyGameName
],createGame);

router.put("/:id",[
        verifyJWT,
        check("id","No es un id de mongo valido").isMongoId(),
        verifyAll
],updateGame);

router.delete("/:id",[
        verifyJWT,
        check("id","No es un id de mongo valido").isMongoId(),
        verifyAll
],deleteGame);


module.exports = router;