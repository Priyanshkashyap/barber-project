const { user1 } = require("./db");
async function signupuser(uname, upassword, uphone) {
  try {
    const existingUser = await user1.findOne({ usname: uname });
    if (existingUser) {
      return { message: "Username already exists", success: false };
    } else {
      const newUser = new user1({
        usname: uname,
        uspassword: upassword,
        usphone: uphone
      });
      await newUser.save();
      return { message: "User registered successfully", success: true };
    }
  } catch (err) {
    console.error("Error during user signup", err);
    return { message: "Server error", success: false, error: err.message };
  }
}

module.exports = signupuser;
