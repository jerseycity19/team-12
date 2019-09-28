const mongoCollections = require("./mongoCollections.js");
const users = mongoCollections.users;
const ObjectId = require('mongodb').ObjectId; //or ObjectID
const bcrypt = require("bcrypt");


module.exports = {
  async createUser(firstName, lastName, email, password) {
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
    if(!email && typeof())
  }
}
