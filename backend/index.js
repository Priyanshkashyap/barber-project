const express = require("express");
const cors = require("cors");
const logverifybarber = require("./logverifybarber");
const logverifyuser = require("./logverifyuser");
const signupuser = require("./signupuser");
const signupbarber = require("./signupbarber");
const usermiddleware = require("./usermiddleware");
const barbermiddleware = require("./barbermiddleware");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/backend/signupbarber", async (req, res) => {
  const { bname, bpassword, bphone } = req.body;
  const result = await signupbarber(bname, bpassword, bphone);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

app.post("/backend/signupuser", async (req, res) => {
  const { usname, uspassword, usphone } = req.body;
  const result = await signupuser(usname, uspassword, usphone);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});
app.post("/backend/logverifybarber", async (req, res) => {
  const { vbname, vbpassword } = req.body;
  const result = await logverifybarber(vbname, vbpassword);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

app.post("/backend/logverifyuser", async (req, res) => {
  const { vuname, vupassword } = req.body;
  const result = await logverifyuser(vuname, vupassword);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});
app.get("/backend/userui", usermiddleware, (req, res) => {
  res.json({
    success: true,
    message: `Welcome ${req.user.usname}, you are authorized to view the user UI!`,
  });
});
app.get("/backend/barberui", barbermiddleware, (req, res) => {
  res.json({
    success: true,
    message: `Welcome ${req.user.baname}, you are authorized to view the barber UI!`,
  });
});

app.listen(4000);