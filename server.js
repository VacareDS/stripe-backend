require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
const createCheckout = require("./routes/createCheckout");
const webhook = require("./routes/webhook");

app.use("/api/create-checkout-session", createCheckout);
app.use("/api/webhook", webhook);

app.get("/", (req, res) => {
  res.send("Backend operativo.");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
