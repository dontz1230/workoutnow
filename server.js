const express = require("express");
const app = express();

//將重要的key們都存在config方便使用
const config = require("./config");
const db = require("./config/database");

//Routers
const userRouter = require("./routes/user");

//CORS
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

//允許使用formData
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //允許使用json
app.use(cors); //middleware

app.use("/user", userRouter); //輸入router /user

app.listen(config.port, () => {
  console.log("開始偵聽，PORT : ", config.port);
});
