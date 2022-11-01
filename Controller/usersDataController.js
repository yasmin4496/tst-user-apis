const userDataModel = require("../models/userData");
exports.addDataOfUser = async (req, res) => {
  try {
    // Find user with email and phone number
    // If user found with this email and phone number. Then throw error
    // otherwise add new data
    const userWithSameEmail = await userDataModel.findOne({
      email: req.body.email,
    });

    // user with email is  found.
    if (userWithSameEmail) {
      return res.status(400).json({
        message: "This email is already register,try with another one",
      });
    }
    const userWithSamePhoneNo = await userDataModel.findOne({
      phone_no: req.body.phone_no,
    });
    // user with same phone number is  found.
    if (userWithSamePhoneNo) {
      return res.status(400).json({
        message: "This Phone Number is already register,try with another one",
      });
    }
    // put the data in db
    const newUser = await new userDataModel({
      name: req.body.name,
      email: req.body.email,
      phone_no: req.body.phone_no,
      company_name: req.body.company_name,
      city: req.body.city,
    }).save();

    return res.status(200).send({
      status: true,
      message: "New user added successfully.",
      result: newUser,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
exports.getAllDataOfUser = async (req, res) => {
  try {
    //find all Data
    const userData = await userDataModel.find({});
    if (userData) {
      return res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        result: {
          userData: userData,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong",
    });
  }
};
exports.deleteDataOfUser = async (req, res) => {
  try {
    await userDataModel.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      status: true,
      message: "User Data deleted succesfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
