import { EmailTemplate } from "./EmailTemplate";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(req: Request) {
  const API_KEY = (await getCloudflareContext()).env.RESEND_API_KEY;
  const resend = new Resend(API_KEY);
  const { email, name, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Test <testresend@tanweihup.dev>",
      to: ["info@tanweihup.dev"],
      subject: subject,
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
        subject: subject,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
