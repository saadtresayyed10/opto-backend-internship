const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = 3000;

connectToDB();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Running on PORT: ", PORT);
});
