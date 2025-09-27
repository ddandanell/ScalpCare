import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { consultationType, fullName, email, phone, preferredDate, message } = req.body;

    // Validate required fields
    if (!consultationType || !fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Consultation type, name, email, and phone are required'
      });
    }

    // Simulate saving to database (in production, save to your database)
    const booking = {
      id: Date.now().toString(),
      consultationType,
      fullName,
      email,
      phone,
      preferredDate: preferredDate || null,
      message: message || '',
      timestamp: new Date().toISOString()
    };

    // In production, you would save this to your database
    console.log('New consultation booking:', booking);

    return res.status(201).json({
      success: true,
      message: "Consultation booking submitted successfully. We'll contact you within 4 hours to confirm your appointment.",
      bookingId: booking.id
    });

  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit booking. Please try again.'
    });
  }
}
