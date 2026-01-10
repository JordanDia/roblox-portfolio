import type { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'
import { getDownloadToken } from './_downloadStore'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.query.token

  if (!token || typeof token !== 'string') {
    return res.status(400).send('Invalid token')
  }

  const record = getDownloadToken(token)

  if (!record) {
    return res.status(403).send('Invalid or expired link')
  }

  if (Date.now() > record.expiresAt) {
    return res.status(410).send('Link expired')
  }

  const filePath = path.join(process.cwd(), 'private-files', record.file)

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found')
  }

  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${record.file}"`
  )

  fs.createReadStream(filePath).pipe(res)
}
