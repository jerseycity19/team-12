const express = require("express");
const bodyParser = require("body-parser");
const configRoutes = require("./backend/routes");
const mongoose = require("mongoose");
const test = require("./backend/routes/test")
const cors = require("cors")
const Tests = require("./backend/models/test")
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/test", test);
configRoutes(app);



// const dataBase = "mongodb://localhost:27017/Team12_ShatterProof"

// mongoose
//   .connect(dataBase, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));

//   const newTests = new Tests({
//     name: "test"
//   })
//   newTests.save()

app.listen(5000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:5000");
});
