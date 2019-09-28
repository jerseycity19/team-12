const mongoCollections = require("./mongoCollections");
const forums = mongoCollections.forums;
const {ObjectId} = require("mongodb");
// const axios = require("axios");

module.exports = {

  async create(title, post, author){
    if(typeof(title) !== "string"){
      throw "Error: Must provide a name of type string";
    }
    if(typeof(post) !== "string"){
      throw "Error: Must provide a code of type string";
    }
    if(typeof(author) !== "string"){
        throw "Error: Must provide a code of type string";
    }

    const forumCollection = await forums();

    let newForum = {
        forumTitle: title,
        forumPost: post,
        forumAuthor: author
    };


    async updateForum(title, post){
        if(typeof(title) !== "string"){
          throw "Error: Id must be a string";
        }
        if(typeof(post) !== "string"){
          throw "Error: Rating must be a string";
        }
    }
        const courseCollection = await courses();

        let newForum = {
            forumTitle: title,
            forumPost: post
        };
    }
};