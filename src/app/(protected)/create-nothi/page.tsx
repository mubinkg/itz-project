import { MoujaSelect } from '@/components/mouja/MoujaSelect';
import CreateNothi from '@/components/nothi/CreateNothi';
import CreateOwner from '@/components/nothi/CreateOwner';
import NothiList from '@/components/nothi/NothiList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
    include: {
      nothiOwner: true,
    },
  });

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-semibold">
        মৌজার নথি তৈরি করুন
      </h1>
      <CreateNothi mouzaData={mouzaData} />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3 text-left whitespace-nowrap">কেস নথি নং</th>
              <th className="p-3 text-left whitespace-nowrap">বাংলা সন</th>
              <th className="p-3 text-left whitespace-nowrap">
                মালিকের নাম ও ঠিকানা
              </th>
              <th className="p-3 text-left whitespace-nowrap">SA খতিয়ান</th>
              <th className="p-3 text-left whitespace-nowrap">SA দাগ</th>
              <th className="p-3 text-left whitespace-nowrap">RS খতিয়ান</th>
              <th className="p-3 text-left whitespace-nowrap">RS দাগ</th>
              <th className="p-3 text-left whitespace-nowrap">পরিমাণ</th>
              <th className="p-3 text-left whitespace-nowrap">ধরন</th>
            </tr>
          </thead>
          <NothiList nothiList={nothiList} />
        </table>
      </div>

      {/* Bottom Save Button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">নথি সংরক্ষণ</Button>
      </div>
    </div>
  );
}
