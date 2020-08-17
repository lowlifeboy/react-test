import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    res.statusCode = 401
    res.json({ error: 'unauthorized' })
    return
  }

  res.statusCode = 200
  res.json({
    rows: Array.from({ length: 10 }, () => ({
      id: crypto.randomBytes(5).toString('hex'),
      title: crypto.randomBytes(3).toString('hex'),
    })),
  })
}

export default handler
