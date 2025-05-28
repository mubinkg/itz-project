import { prisma } from '@/lib/db';
import NothiPageClient from './NothiPageClient';
import { cookies } from 'next/headers';
import AccessDenied from '@/components/common/AccessDenied';

export default async function Page() {
  const cookieStore = await cookies();
  const role = cookieStore.get('user_vumi_role')?.value || '';

  // Block access if the role is 'USER'
  if (role === 'USER') {
    return <AccessDenied />;
  }

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
