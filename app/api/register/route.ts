import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismaDatabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstName, password, lastName } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: 'Email already registered' },
      { status: 400 },
    );
  }

  const user = await prisma.user.create({
    data: {
      email,
      username: `${firstName} ${lastName}`,
      name: firstName,
      lastname: lastName,
      hashedPassword,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hashedPassword: _, ...safeUser } = user;

  return NextResponse.json(safeUser, { status: 201 });
}
