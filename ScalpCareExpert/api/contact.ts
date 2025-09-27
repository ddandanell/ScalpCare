import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Simulate saving to database (in production, save to your database)
    const inquiry = {
      id: Date.now().toString(),
      fullName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    };

    // In production, you would save this to your database
    console.log('New contact inquiry:', inquiry);

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully. We'll respond within 4 hours during business days.",
      inquiryId: inquiry.id
    });

  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
}
