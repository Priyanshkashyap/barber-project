const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { barber1 } = require("./db");

const secret = "hahahihihohohehe"; // keep this secret in env variables in production

async function logverifybarber(vbname, vbpassword) {
  try {
    
    const barber = await barber1.findOne({ baname: vbname });
    if (!barber) {
      return { success: false, message: "Barber not found" };
    }

    
    const isMatch = await bcrypt.compare(vbpassword, barber.bapassword);
    if (!isMatch) {
      return { success: false, message: "Incorrect password" };
    }

   
    const token = jwt.sign({ baname: vbname }, secret, { expiresIn: "1h" });

    return { success: true, message: "Login successful", token };
  } catch (err) {
    console.error("Error during barber login", err);
    return { success: false, message: "Server error", error: err.message };
  }
}

module.exports = logverifybarber;
