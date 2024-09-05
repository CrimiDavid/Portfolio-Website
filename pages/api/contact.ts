// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

//Dictionary to store submissions times per IP address
let submissions: { [key: string]: number } = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientIp = req.headers['x-forwarded-for'] as string
  console.log(clientIp)
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Validate data
    if (!email || !message) {
      return res
        .status(400)
        .json({ message: 'Email and message are required.' })
    }

    // Rate limiting: Allow one submission per IP every 600 seconds
    const currentTime = Date.now()
    const lastSubmissionTime = submissions[clientIp as string] || 0

    if (currentTime - lastSubmissionTime < 600000) {
      // 600 seconds
      return res
        .status(429)
        .json({ message: 'You are submitting too fast. Please wait a moment.' })
    }

    submissions[clientIp as string] = currentTime

    try {
      // Simulate an email being sent or any backend logic here
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)

      // Respond with a success message
      return res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send message.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
