const userEmailModel = require("../models/userEmail");
exports.addEmailOfUser = async (req, res) => {
  try {
    // Find user with email
    // If user found with this email. Then throw error
    // otherwise add new email
    const userWithSameEmail = await userEmailModel.findOne({
      email: req.body.email,
    });

    // user with email is  found.
    if (userWithSameEmail) {
      return res.status(400).json({
        message: "This email is already register,try with another one",
      });
    }

    // put the email in db
    const newEmail = await new userEmailModel({
      email: req.body.email,
    }).save();

    return res.status(200).send({
      status: true,
      message: "New email added successfully.",
      result: newEmail,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
exports.emailListing = async (req, res) => {
  try {
    //find all emails
    const emails = await userEmailModel.find({});
    if (emails) {
      return res.status(200).json({
        success: true,
        message: "Emails fetched successfully",
        result: {
          emails: emails,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Something went wrong",
    });
  }
}
exports.deleteEmailOfUser = async (req, res) => {
    console.log("in delete")
  try {
    console.log("in delete")
    await userEmailModel.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      status: true,
      message: "User Email deleted succesfully",
    });
  } catch (error) {
    console.log("error",error)
    return res.status(500).send({
      status: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
