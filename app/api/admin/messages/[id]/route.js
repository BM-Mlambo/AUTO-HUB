import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// PATCH — mark as read/unread
export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const { read } = await request.json();

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: { read },
    });

    return NextResponse.json({ success: true, message: updated }, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update message." }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await prisma.contactMessage.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete message." }, { status: 500 });
  }
}

// POST — reply via email
export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const { replyText, toEmail, toName } = await request.json();

    if (!replyText) {
      return NextResponse.json({ error: "Reply text is required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "brianmwakondo@gmail.com",
      subject: "Re: Your enquiry to AutoHub",
      html: `<p>Hi ${toName},</p><p>${replyText}</p><p>AutoHub Team</p>`,
    });

    await prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Reply error:", error);
    return NextResponse.json({ error: error.message || "Failed to send reply." }, { status: 500 });
  }
}