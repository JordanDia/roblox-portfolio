import 'dotenv/config'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'


if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY not set')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover'
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Request body:', req.body)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { items } = req.body as { items: any[] }

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: 'No items provided' })
  }

  try {
    console.log('Creating Stripe session with items:', items)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.title },
          unit_amount: item.price * 100
        },
        quantity: item.quantity,
        metadata: {
          cart: JSON.stringify(
            items.map(item => ({
              id: item.id,
              title: item.title,
              qty: item.quantity
            }))
          )
        }        
      })),
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`
    } as Stripe.Checkout.SessionCreateParams)

    console.log('Stripe session created:', session)
    res.status(200).json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe error:', err)
    res.status(500).json({ error: err.message })
  }
}

  
