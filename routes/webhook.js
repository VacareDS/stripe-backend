const express = require("express");
const router = express.Router();

router.post("/", express.raw({ type: "application/json" }), (req, res) => {
  console.log("📩 Webhook recibido (simulado)");

  // Lógica real vendrá después
  res.status(200).send("ok");
});

module.exports = router;
