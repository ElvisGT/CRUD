const {Router} = require("express");
const {register,login} = require("../controllers/register");

const router = Router();

router.post('/create',register);
router.post('/login',login);


module.exports = router;