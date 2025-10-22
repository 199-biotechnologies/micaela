import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must not exceed 5000 characters' },
        { status: 400 }
      );
    }

    // Generate HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); }
    .header { background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%); padding: 40px 32px; text-align: center; }
    .header h1 { margin: 0; color: white; font-size: 24px; font-weight: 300; letter-spacing: 0.5px; }
    .content { padding: 40px 32px; }
    .field { margin-bottom: 28px; }
    .label { display: block; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 8px; }
    .value { font-size: 15px; color: #1a1a1a; line-height: 1.5; }
    .message-box { background: #f9fafb; border-left: 3px solid #1a1a1a; padding: 20px; margin-top: 12px; border-radius: 4px; }
    .footer { background: #f9fafb; padding: 24px 32px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
    .footer a { color: #1a1a1a; text-decoration: none; }
    .divider { height: 1px; background: #e5e7eb; margin: 32px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Property Enquiry</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name</span>
        <div class="value">${body.name}</div>
      </div>
      <div class="field">
        <span class="label">Email</span>
        <div class="value"><a href="mailto:${body.email}" style="color: #1a1a1a; text-decoration: none;">${body.email}</a></div>
      </div>
      ${body.phone ? `
      <div class="field">
        <span class="label">Phone</span>
        <div class="value"><a href="tel:${body.phone}" style="color: #1a1a1a; text-decoration: none;">${body.phone}</a></div>
      </div>` : ''}
      <div class="divider"></div>
      <div class="field">
        <span class="label">Message</span>
        <div class="message-box">
          <div class="value" style="white-space: pre-wrap;">${body.message}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 8px 0;"><strong>Mihaela Doran</strong> – Luxury Real Estate Ibiza</p>
      <p style="margin: 0;"><a href="https://mihaeladoran.com">mihaeladoran.com</a></p>
    </div>
  </div>
</body>
</html>`;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Mihaela Doran Website <boris@199.bio>',
      to: ['info@doranhomesdesign.com'],
      replyTo: body.email,
      subject: `New Property Enquiry from ${body.name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon.',
        emailId: data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
