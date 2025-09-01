const mongoose = require("mongoose");
const { z } = require("zod");
const{usignupSchema}=require("./usignupSchema");
const { user1 } = require("./db");
async function signupuser(uname, upassword, uphone) {
  try {
     const validation = usignupSchema.safeParse({ uname, upassword, uphone });
     if (!validation.success) {
      return { 
        message: "Validation failed", 
        success: false, 
        errors: validation.error.format() 
      };
    }
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
