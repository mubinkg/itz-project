import { MoujaSelect } from '@/components/mouja/MoujaSelect';
import CreateNothi from '@/components/nothi/CreateNothi';
import CreateOwner from '@/components/nothi/CreateOwner';
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
          <tbody>
            {nothiList.map(nothi => (
              <tr key={nothi.id} className="border-b">
                <td className="p-3 whitespace-nowrap">{nothi.caseNo}</td>
                <td className="p-3 whitespace-nowrap">{nothi.banglaYear}</td>
                <td className="p-3">
                  <CreateOwner
                    nothiId={nothi.id}
                    previousOwners={nothi.nothiOwner}
                  />
                </td>
                <td className="p-3">
                  <Input placeholder="SA খতিয়ান" className="w-full" />
                </td>
                <td className="p-3">
                  <Input placeholder="SA দাগ" className="w-full" />
                </td>
                <td className="p-3">
                  <Input placeholder="RS খতিয়ান" className="w-full" />
                </td>
                <td className="p-3">
                  <Input placeholder="RS দাগ" className="w-full" />
                </td>
                <td className="p-3">
                  <Input placeholder="পরিমাণ" className="w-full" />
                </td>
                <td className="p-3">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="খাস" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="খাস">খাস</SelectItem>
                      <SelectItem value="অন্যান্য">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      সংরক্ষণ
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Save Button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">নথি সংরক্ষণ</Button>
      </div>
    </div>
  );
}
