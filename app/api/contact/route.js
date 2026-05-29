import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Save to DB
    const entry = await prisma.contactMessage.create({
      data: {
        name:    name.trim(),
        email:   email.trim().toLowerCase(),
        phone:   phone?.trim() || null,
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json(
      { success: true, id: entry.id },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}