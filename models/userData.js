const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_no: { type: String, required: true,unique:true },
  company_name: { type: String, required: true },
  city: { type: String, required: true },
  is_active: { type: Boolean, default: false },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("UsersData", UserSchema);
