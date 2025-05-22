import AbandonedPropertyClient from './AbandonedPropertyClient';
import { prisma } from '@/lib/db';

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });

  const abandonedList = await prisma.abandoned.findMany({
    include: { mouja: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <AbandonedPropertyClient mouzaData={mouzaData} abandonedList={abandonedList} />
  );
}
