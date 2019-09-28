const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const data = require("../data");
const userData = data.users;


router.post("/", async(req, res) =>  {
  let form = req.body;
    //Need  variables to compare against
  if(!form.inputEmail || !form.inputPassword){
    res.render("")
    //Render error page
    //What do we want to call here?
  }
  let match = false;
    let users = await userData.getAllUsers();
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(user.email == form.inputEmail){
            match = await bcrypt.compare(form.inputPassword, user.hashPassword);
            if(match){
                req.session.authent = true;
                req.session.user = user._id;
                res.redirect("/myProfile");
                break;
            }
        }
    }
    if(!match){
      console.log("Not Matching");
      // res.render("" , {
      //   errors: true
      // });
    }
});

router.post("/newAccount", async (req, res) => {
  let form = req.body;
   let exist = false;
   try {
     const users = await userData.getAllUsers();
     for(let i=0;i<users.length;i++){
       let user = users[i];
       if(user.email == form.emailInput){
           exist = true;
           break;
       }
     }
     if(exist){
       res.render("./templates/createAcc",{verified: false, hasErrors: true, title: "Shatterproof"});
     } else {
       const newUser = await userData.createUser(form.firstName, form.lastName, form.emailInput, form.passwordInput);
       req.session.authent = true;
       req.session.user = newUser._id;
       res.redirect("/myProfile");
     }
   } catch(e){
     console.log(e);
     res.redirect("/");
   }
})



module.exports = router;
