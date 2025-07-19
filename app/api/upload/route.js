import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(new URL("/dashboard?error=unauthorized", req.url));
  }

  const formData = await req.formData();
  const file = formData.get("pdf");

  if (!file) {
    return NextResponse.redirect(new URL("/dashboard?error=nofile", req.url));
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", filename);

    // Dosyayı diske kaydetme
    await writeFile(filePath, buffer);

    // DB'de kullanıcının var olmasını kontrol
    await prisma.user.upsert({
      where: { email: session.user.email },
      update: {},
      create: {
        email: session.user.email,
        name: session.user.name,
      },
    });

    // PDF kaydını DB'ye ekleme
    await prisma.pdf.create({
      data: {
        name: file.name,
        url: `/uploads/${filename}`,
        user: { connect: { email: session.user.email } },
      },
    });

    return NextResponse.redirect(new URL("/dashboard?success=true", req.url));
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.redirect(new URL("/dashboard?error=server", req.url));
  }
}
