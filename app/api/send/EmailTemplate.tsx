
interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  subject,
}) => (
  <div>
    <h1>From: {name} - {email}</h1>
    <h1>{subject}</h1>
    <p>{message}</p>
  </div>
);
