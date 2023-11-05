import EmailTemplate from '@/components/emails/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body
  
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['julian01andres@gmail.com'],
      subject: 'Formulario Contacto Portfolio',
      react: EmailTemplate(req.body),
      text: ''
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};