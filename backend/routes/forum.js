const express = require("express");
const router = express.Router();
const data = require("../data");
const forumData = data.forum

//NEEDS WORK!
router.post("/createPost", async(req, res) => {
  let form = req.body
  if(!form.inputTitle) {
    throw "Error: Need to input a title"
  }
  if(!form.inputDesc) {
    throw "Error: Need to input description"
  }
  const forumPost = await forumData.create(form.intputTitle, form.inputDesc, req.body.user)
});


module.exports = router;
