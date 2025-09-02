const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { user1 } = require("./db");

const secret = "hahahihihohohehe"; // in production, store in environment variable

async function logverifyuser(vuname, vupassword) {
  try {
    
    const user = await user1.findOne({ usname: vuname });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    
    const isMatch = await bcrypt.compare(vupassword, user.uspassword);
    if (!isMatch) {
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
