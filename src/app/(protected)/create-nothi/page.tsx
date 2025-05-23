import CreateNothi from '@/components/nothi/CreateNothi';
import NothiList from '@/components/nothi/NothiList';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { prisma } from '@/lib/db';

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: {
      status: 'ACTIVE',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const nothiList = await prisma.nothi.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      mouja: true
    }
  });

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-semibold">
        মৌজার নথি তৈরি করুন
      </h1>
      <CreateNothi mouzaData={mouzaData} />
      <NothiList nothiList={nothiList} />
    </div>
  );
}
