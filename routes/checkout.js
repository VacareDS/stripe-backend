const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout", async (req, res) => {
  try {
    const { priceId, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.FRONTEND_URL}/gracias`,
      cancel_url: `${process.env.FRONTEND_URL}/cancelado`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creando session:", error.message);
    res.status(500).json({ error: "Algo salió mal al crear la sesión" });
  }
});

module.exports = router;
