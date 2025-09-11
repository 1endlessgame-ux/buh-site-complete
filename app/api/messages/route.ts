import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { authOptions } from "@/lib/server-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !(session as any).userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session as any).userId as string;
  const inbox = await prisma.message.findMany({
    where: { recipientId: userId },
    include: { sender: true },
    orderBy: { createdAt: "desc" },
    take: 50
  });
  const sent = await prisma.message.findMany({
    where: { senderId: userId },
    include: { recipient: true },
    orderBy: { createdAt: "desc" },
    take: 50
  });
  return NextResponse.json({ inbox, sent });
}

const schema = z.object({
  toEmail: z.string().email(),
  body: z.string().min(1).max(5000)
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !(session as any).userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session as any).userId as string;
  const json = await req.json();
  const data = schema.parse(json);
  const recipient = await prisma.user.findUnique({ where: { email: data.toEmail } });
  if (!recipient) return NextResponse.json({ error: "Получатель не найден" }, { status: 404 });
  const msg = await prisma.message.create({
    data: { body: data.body, senderId: userId, recipientId: recipient.id }
  });
  return NextResponse.json({ id: msg.id });
}
