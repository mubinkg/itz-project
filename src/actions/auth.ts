'use server';

import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
      },
      password: {
        equals: password,
      },
    },
  });
  if (user) {
    const cookieStore = await cookies();
    cookieStore.set('user', user.id);
    cookieStore.set('user_vumi_role', user.role);
    return { message: 'Login success!', success: true };
  }
  return { message: 'Invalid credentials', success: false };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('user');
}
