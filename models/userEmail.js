const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("UsersEmail", UserSchema);
