'use server';

import { prisma } from '@/lib/db';

export async function createMouja({
  name,
  jlNo,
}: {
  name: string;
  jlNo: string;
}) {
  console.log(name);
  try {
    const mouja = await prisma.mouja.create({
      data: {
        name,
        jlNo,
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

export async function updateMouja(data: { id: string; name: string; jlNo: string }) {
  try {
    const mouja = await prisma.mouja.update({
      where: { id: data.id },
      data: {
        name: data.name,
        jlNo: data.jlNo,
      },
    });
    return {
      success: true,
      data: mouja,
      message: "মৌজা সফলভাবে আপডেট হয়েছে",
    };
  } catch (error) {
    return {
      success: false,
      message: "মৌজা আপডেট করতে সমস্যা হয়েছে",
    };
  }
}


export async function getActiveMoujas() {
  return await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });
}