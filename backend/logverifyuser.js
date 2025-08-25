const jwt = require("jsonwebtoken");
const { user1 } = require("./db");

const secret = "hahahihihohohehe";

async function logverifyuser(vuname, vupassword) {
  try {
    const user = await user1.findOne({ usname: vuname });
    if (!user) {
      return { success: false, message: "user not found" };
    }

    if (user.uspassword !== vupassword) {
      return { success: false, message: "Incorrect password" };
    }

    const token = jwt.sign({ usname: vuname }, secret, { expiresIn: "1h" });
    return { success: true, message: "Login successful", token };
  } catch (err) {
    console.error("Error during user login", err);
    return { success: false, message: "Server error", error: err.message };
  }
}

module.exports = logverifyuser;
