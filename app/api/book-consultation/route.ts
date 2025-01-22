import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ConsultationConfirmationEmail from "@/app/emails/ConsultationConfirmation";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, date, consultationType } = await req.json();

    // Render the email HTML as a string and await the result
    const customerEmailHtml = await render(
      React.createElement(ConsultationConfirmationEmail, {
        name,
        date,
        consultationType,
      })
    );

    const adminEmailHtml = await render(
      React.createElement(ConsultationConfirmationEmail, {
        name: "Admin",
        date,
        consultationType,
      })
    );

    // Send email to customer
    await resend.emails.send({
      from: "Confatch Styling <constancemnelemba@yahoo.com>",
      to: email,
      subject: "Your Confatch Styling Consultation is Confirmed",
      html: customerEmailHtml,
    });

    // Send email to admin
    await resend.emails.send({
      from: "Confatch Styling <constancemnelemba@yahoo.com>",
      to: "constancemnelemba@yahoo.com",
      subject: "New Consultation Booking",
      html: adminEmailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
