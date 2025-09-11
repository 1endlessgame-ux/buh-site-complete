import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcryptjs";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1).max(100).optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    const exists = await prisma.user.findUnique({ where: { email: data.email } });
    if (exists) return NextResponse.json({ error: "Пользователь уже существует" }, { status: 400 });
    const passwordHash = await hash(data.password, 10);
    const user = await prisma.user.create({
      data: { email: data.email, name: data.name, passwordHash }
    });
    return NextResponse.json({ id: user.id, email: user.email });
  } catch (e:any) {
    return NextResponse.json({ error: e.message || "Ошибка" }, { status: 400 });
  }
}
