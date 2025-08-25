const express = require("express");
const cors = require("cors");
const logverifybarber = require("./logverifybarber");
const logverifyuser = require("./logverifyuser");
const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(4000);