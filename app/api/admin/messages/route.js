import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET all messages
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter"); // all | unread | read

    const messages = await prisma.contactMessage.findMany({
      where:
        filter === "unread"
          ? { read: false }
          : filter === "read"
          ? { read: true }
          : {},
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error("Fetch messages error:", error);
    return NextResponse.json({ error: "Failed to fetch messages." }, { status: 500 });
  }
}