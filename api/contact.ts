import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  // Mapeo de asuntos
  const subjectMap: Record<string, string> = {
    info: 'Información general',
    appointment: 'Consulta sobre agendamiento',
    city: 'Nueva ciudad',
    other: 'Otro'
  };

  const subjectText = subjectMap[subject] || subject;

  try {
    await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>', // Cambiar en producción con tu dominio verificado
      to: ['sistemasciaglobal@gmail.com'],
      replyTo: email,
      subject: `Nuevo mensaje: ${subjectText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Nombre:</strong> 
              <span style="color: #1f2937;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
            
            ${phone ? `
              <p style="margin: 10px 0;">
                <strong style="color: #374151;">Teléfono:</strong> 
                <span style="color: #1f2937;">${phone}</span>
              </p>
            ` : ''}
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Asunto:</strong> 
              <span style="color: #1f2937;">${subjectText}</span>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Mensaje:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
              <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto del sitio web</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ error: 'Error enviando correo' });
  }
}