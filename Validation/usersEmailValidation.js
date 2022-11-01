const yup = require("yup");
exports.emailValidation = async (req, res, next) => {
  try {
    const emailSchema = yup.object().shape({
      email: yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
    });
    await emailSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      errors: error.errors[0],
    });
  }
};
