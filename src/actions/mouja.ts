'use server';

import { prisma } from '@/lib/db';

export async function createMouja({ name }: { name: string }) {
  console.log(name);
  try {
    const mouja = await prisma.mouja.create({
      data: {
        name,
      },
    });
    return {
      success: true,
      data: mouja,
      message: 'Mouja created successfully!',
    };
  } catch (err) {
    return {
      success: false,
      message: 'Error on creating mouja!',
    };
  }
}

export async function deleteMouja(id: string) {
  try {
    const mouja = await prisma.mouja.update({
      where: {
        id,
      },
      data: {
        status: 'DELETED',
      },
    });
    return {
      success: true,
      data: mouja,
      message: 'Mouja deleted successfully!',
    };
  } catch (err) {
    return {
      success: false,
      message: 'Error on deleting mouja!',
    };
  }
}
