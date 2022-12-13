const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllGames,
  createGame,
  getById,
  deleteGame,
  updateGame,
} = require("../controllers/games");
const { verifyJWT } = require("../middlewares/verify-jwt");
const { verifyAll } = require("../middlewares/verify-all");
const { verifyGameName } = require("../middlewares/verify-name");

const router = Router();
/**
 * @openapi
 * components:
 *  schemas:
 *     Game:
 *       type: object
 *       properties:
 *         name:
 *          type: string
 *          example: Fifa
 *         gender:
 *          type: string
 *          example: Deporte
 *         user:
 *          type: string
 *          example: 6397d0203759a4c2a489f6e0
 * 
 * 
 */
router
  .get("/", [verifyJWT], getAllGames)

  .get(
    "/:id",
    [
      verifyJWT,
      check("id", "No es un id de mongo valido").isMongoId(),
      verifyAll,
    ],
    getById
  )

  .post("/", [verifyJWT, verifyGameName], createGame)

  .put(
    "/:id",
    [
      verifyJWT,
      check("id", "No es un id de mongo valido").isMongoId(),
      verifyAll,
    ],
    updateGame
  )

  .delete(
    "/:id",
    [
      verifyJWT,
      check("id", "No es un id de mongo valido").isMongoId(),
      verifyAll,
    ],
    deleteGame
  );

module.exports = router;
