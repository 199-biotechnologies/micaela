import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  message,
}: ContactEmailTemplateProps) {
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          }
          .header {
            background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
            padding: 40px 32px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: white;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 0.5px;
          }
          .content {
            padding: 40px 32px;
          }
          .field {
            margin-bottom: 28px;
          }
          .label {
            display: block;
            font-size: 11px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #6b7280;
            margin-bottom: 8px;
          }
          .value {
            font-size: 15px;
            color: #1a1a1a;
            line-height: 1.5;
          }
          .message-box {
            background: #f9fafb;
            border-left: 3px solid #1a1a1a;
            padding: 20px;
            margin-top: 12px;
            border-radius: 4px;
          }
          .footer {
            background: #f9fafb;
            padding: 24px 32px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer a {
            color: #1a1a1a;
            text-decoration: none;
          }
          .divider {
            height: 1px;
            background: #e5e7eb;
            margin: 32px 0;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>New Property Enquiry</h1>
          </div>

          <div className="content">
            <div className="field">
              <span className="label">Name</span>
              <div className="value">{name}</div>
            </div>

            <div className="field">
              <span className="label">Email</span>
              <div className="value">
                <a href={`mailto:${email}`} style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                  {email}
                </a>
              </div>
            </div>

            {phone && (
              <div className="field">
                <span className="label">Phone</span>
                <div className="value">
                  <a href={`tel:${phone}`} style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                    {phone}
                  </a>
                </div>
              </div>
            )}

            <div className="divider" />

            <div className="field">
              <span className="label">Message</span>
              <div className="message-box">
                <div className="value" style={{ whiteSpace: 'pre-wrap' }}>
                  {message}
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Mihaela Doran</strong> – Luxury Real Estate Ibiza
            </p>
            <p style={{ margin: '0' }}>
              <a href="https://mihaeladoran.com">mihaeladoran.com</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
