const mongoCollections = require("./mongoCollections.js");
const users = mongoCollections.users;
const ObjectId = require('mongodb').ObjectId; //or ObjectID
const bcrypt = require("bcrypt");


module.exports = {
  async createUser(firstName, lastName, email, password, experience) {
    if(!firstName && typeOf(firstName) != "string") {
      throw "Error: You must enter a firstname."
    }
    if(!lastName && typeof(lastName) != "string") {
      throw "Error: You must enter a lastname."
    }
    if(!password && typeof(password) != "string" ) {
      throw "Error: You must enter a password."
    }
    const hash =  await bcrypt.hash(password, 16);
    if(!email && typeof(email) != "string") {
      throw "Error: You must enter an email"
    }
    const userCollection = await users();
    let newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      hashPassword: hash,
      exp: 0
    }
    
    const insertInfo = await userCollection.insertOne(newUser);
    if(insertInfo.insertedCount ===0){
            throw "Could not enter user information";
        }
        const newId = insertInfo.insertedId;
        const user = await this.getById(newId);
        return user;
    },

   async getAllUsers(){
       const userCollection = await users();
       const theUser = await userCollection.find({}).toArray();
       return theUser;
   },

   async getById(id){
       if (!id){
           throw "You must provide an id to search for";
       }
       const userCollection = await users();
       const theUser = await userCollection.findOne({ _id: ObjectId(id) });
       if (theUser === null){
           throw "No user with that id";
       }
       return theUser;
   },



}
