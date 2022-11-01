const yup = require("yup");
exports.userDataValidation = async (req, res, next) => {
  try {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const userDataSchema = yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
      phone_no: yup
        .string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Phone number should be valid 10 digits")
        .min(10, "Phone number should be valid 10 digits")
        .max(10, "Phone number should be valid 10 digits"),
      company_name: yup.string().required("Company Name is required"),
      city: yup.string().required("City is required"),
    });
    await userDataSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      errors: error.errors[0],
    });
  }
};
