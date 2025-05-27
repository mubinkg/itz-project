import { prisma } from '@/lib/db';
import NothiPageClient from './NothiPageClient';

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });

  const nothiList = await prisma.nothi.findMany({
    orderBy: { createdAt: 'desc' },
    include: { mouja: true },
  });

  return (
    <NothiPageClient mouzaData={mouzaData} nothiList={nothiList} />
  );
}
