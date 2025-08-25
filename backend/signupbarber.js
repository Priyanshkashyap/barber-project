const { barber1 } = require("./db");
async function signupbarber(bname, bpassword, bphone) {
  try {
    const existingBarber = await barber1.findOne({ baname: bname });
    if (existingBarber) {
      return { message: "Barbername already exists", success: false };
    } else {
      const newBarber = new barber1({
        baname: bname,
        bapassword: bpassword,
        baphone: bphone
      });
      await newBarber.save();
      return { message: "Barber registered successfully", success: true };
    }
  } catch (err) {
    console.error("Error during barber signup", err);
    return { message: "Server error", success: false, error: err.message };
  }
}

module.exports = signupbarber;
