import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Send contact email
export const sendContactEmail = async (data) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_USER, // Send to company email
    replyTo: data.from,
    subject: `[CONTACT] ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0ea5e9; }
            .value { margin-top: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouveau Message de Contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.from}</div>
              </div>
              <div class="field">
                <div class="label">Téléphone:</div>
                <div class="value">${data.phone}</div>
              </div>
              <div class="field">
                <div class="label">Sujet:</div>
                <div class="value">${data.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact du site OXALIS PROPRETE</p>
            </div>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

// Send quote email
export const sendQuoteEmail = async (data) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_USER, // Send to company email
    replyTo: data.email,
    subject: `[DEVIS] Nouvelle demande - ${data.serviceType}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 18px; font-weight: bold; color: #10b981; margin-bottom: 15px; border-bottom: 2px solid #10b981; padding-bottom: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #6b7280; }
            .value { margin-top: 5px; }
            .highlight { background: #d1fae5; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 Nouvelle Demande de Devis</h1>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Informations Client</div>
                <div class="field">
                  <div class="label">Nom:</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Société:</div>
                  <div class="value">${data.company}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${data.email}</div>
                </div>
                <div class="field">
                  <div class="label">Téléphone:</div>
                  <div class="value">${data.phone}</div>
                </div>
                <div class="field">
                  <div class="label">Adresse:</div>
                  <div class="value">${data.address}</div>
                </div>
              </div>

              <div class="highlight">
                <div class="section-title">Détails du Service</div>
                <div class="field">
                  <div class="label">Type de service:</div>
                  <div class="value"><strong>${data.serviceType}</strong></div>
                </div>
                <div class="field">
                  <div class="label">Fréquence:</div>
                  <div class="value"><strong>${data.frequency}</strong></div>
                </div>
                <div class="field">
                  <div class="label">Surface:</div>
                  <div class="value">${data.surface} m²</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Message</div>
                <div class="value">${data.message}</div>
              </div>

              <div style="background: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
                <strong>⏰ Action requise:</strong> Répondre au client sous 24 heures
              </div>
            </div>
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de devis du site OXALIS PROPRETE</p>
            </div>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Quote email sent successfully');
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw error;
  }
};
