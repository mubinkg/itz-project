import DashboardFilter from '@/components/dashboard/DashboardFilter';
import NothiList from '@/components/nothi/NothiList';
import { prisma } from '@/lib/db';

export default async function LandOffice({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const filter: Record<string, any> = {}
  if (params?.moujaId) {
    filter['moujaId'] = {
      equals: params.moujaId
    }
  }
  if (params?.lineNo) {
    filter['lineNo'] = {
      contains: params.lineNo
    }
  }
  const nothiList = await prisma.nothi.findMany({
    where: filter,
    include: {
      mouja: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const mouzaData = await prisma.mouja.findMany({
    where: {
      status: 'ACTIVE',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">সহকারী কামিশনার (ভূমি)</h1>
        <h2 className="mt-1 text-xl">উপজেলা ভূমি অফিস</h2>
        <h3 className="mt-1 text-lg">শিবগঞ্জ, চাঁপাইনবাবগঞ্জ</h3>
      </div>
      <DashboardFilter mouzaData={mouzaData} />
      <div className="mb-1 h-12 w-full bg-green-600"></div>
      <NothiList nothiList={nothiList} />
    </div>
  );
}
