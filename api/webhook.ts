import type { VercelRequest, VercelResponse } from '@vercel/node'
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
    // 👇 next step: email files
  }

  res.json({ received: true })
}

// Helper to read raw body
async function buffer(req: VercelRequest): Promise<Buffer> {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks)
}
