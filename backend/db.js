const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kpriyansh2121new:priyansh6969@cluster0.kfenv1d.mongodb.net/barber").then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(" Could not connect to MongoDB", err));
const barberSchema = new mongoose.Schema({
baname: { type: String, required: true },
bapassword: { type: String, required: true },
baphone: { type: Number, required: true, unique: true },
});
const userSchema = new mongoose.Schema({
usname: { type: String, required: true },
uspassword: { type: String, required: true },
usphone: { type: Number, required: true, unique: true },
});
const barber1 = mongoose.model("barber1", barberSchema);
const user1 = mongoose.model("user1", userSchema);
module.exports = { barber1, user1 };