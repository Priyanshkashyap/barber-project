const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { bsignupSchema } = require("./bsignupSchema");
const { barber1 } = require("./db");

async function signupbarber(bname, bpassword, bphone) {
  try {
    
    const validation = bsignupSchema.safeParse({ bname, bpassword, bphone });
    if (!validation.success) {
      return {
        message: "Validation failed",
        success: false,
        errors: validation.error.format(),
      };
    }

    
    const existingBarber = await barber1.findOne({ baname: bname });
    if (existingBarber) {
      return { message: "Barber name already exists", success: false };
    }

   
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(bpassword, saltRounds);

    const newBarber = new barber1({
      baname: bname,
      bapassword: hashedPassword, 
      baphone: bphone,
    });

    await newBarber.save();

    return { message: "Barber registered successfully", success: true };
  } catch (err) {
    console.error("Error during barber signup:", err);
    return { message: "Server error", success: false, error: err.message };
  }
}

module.exports = signupbarber;
