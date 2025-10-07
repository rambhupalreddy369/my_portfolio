export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.BREVO_SMTP_LOGIN, // smtp login from brevo
        pass: process.env.BREVO_SMTP_KEY, // smtp key from brevo
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender (user input)
      to: process.env.MY_EMAIL, // your Gmail or Brevo-verified email
      subject: subject || "New Contact Form Message",
      text: message,
      html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
