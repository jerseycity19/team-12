const express = require("express");
const router = express.Router();
const data = require("../data");
const Tests = require("../models/test")


router.get("/", (req, res) => {
  console.log("testing");
  // const newTests = new Tests({
  //   name: "test"
  // })
  // newTests.save().then(res =>res.json({success:true}));

})

module.exports = router;
