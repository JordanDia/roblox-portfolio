import type { VercelRequest, VercelResponse } from '@vercel/node'
import { TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";

import Stripe from 'stripe'

export const config = {
  api: {
    bodyParser: false
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover'
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Initialize Brevo API
let emailAPI = new TransactionalEmailsApi();
emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  const sig = req.headers['stripe-signature']
  let event: Stripe.Event

  try {
    const buf = await buffer(req)
    event = stripe.webhooks.constructEvent(buf, sig!, endpointSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    console.log('Payment successful:', session.id)

    // get cart

    const cart = JSON.parse(session.metadata?.cart || '[]')
    console.log('Paid cart:', cart)


    // 👇 next step: email files

    const email = session.customer_email


    if (email && cart.length > 0) {
      // Generate file links
      const fileLinks = cart.map((item: any) => `https://example.com/files/${item.id}`).join('\n');

      // Build Brevo email
      const message = new SendSmtpEmail();
      message.sender = { name: "Jah Studios", email: "jahstudios.sender@gmail.com" }; // must be verified
      message.to = [{ email }];
      message.subject = "Your Purchased Files";
      message.textContent = `Thank you for your purchase! Here are your files:\n${fileLinks}`;
      message.htmlContent = `<p>Thank you for your purchase! Here are your files:</p>
        <ul>${cart.map((item: any) => `<li><a href="https://example.com/files/${item.id}">${item.title}</a></li>`).join('')}</ul>`;

      try {
        await emailAPI.sendTransacEmail(message);
        console.log("Email sent successfully!");
      } catch (err) {
        console.error("Failed to send email:", err);
      }
    }
  }

  res.json({ received: true })
}

// Helper to read raw body
async function buffer(req: VercelRequest): Promise<Buffer> {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks)
}
