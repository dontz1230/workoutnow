//引入express的Router()
const router = require("express").Router();

//引入controller 中存取的邏輯
const controller = require("./controller");

//處理route
router.post("/login", controller.login); //host/user/login
router.post("/register", controller.register); //host/user/register

//輸出
module.exports = router;
