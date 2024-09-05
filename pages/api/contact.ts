// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Validate data
    if (!email || !message) {
      return res
        .status(400)
        .json({ message: 'Email and message are required.' })
    }

    try {
      // Simulate an email being sent or any backend logic here
      // For example, use Nodemailer, or log the data
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
