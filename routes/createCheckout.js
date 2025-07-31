const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { lead_id, template_id } = req.body;
  console.log("✅ Recibido en create-checkout:", { lead_id, template_id });

  // Acá iría validación de Supabase y lógica con Stripe

  // Simulamos respuesta
  return res.json({
    payment_url: "https://checkout.stripe.com/test-payment-url",
  });
});

module.exports = router;
