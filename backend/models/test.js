const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema ({
name: {
  type: String
}
})


module.exports = Tests = mongoose.model("test", testSchema)
