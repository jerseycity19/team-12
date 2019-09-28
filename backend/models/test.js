const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema ({
name: {
  type: String
}
})


module.exports = mongoose.model("test", testSchema)
