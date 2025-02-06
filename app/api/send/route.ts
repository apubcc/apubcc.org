import { EmailTemplate } from './EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const { email, name, subject, message } = await req.json();
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <testresend@tanweihup.dev>',
      to: ['info@tanweihup.dev'],
      subject: subject,
      react: EmailTemplate({ name: name, email: email, message: message, subject: subject }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
