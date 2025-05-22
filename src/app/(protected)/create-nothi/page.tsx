import CreateNothi from '@/components/nothi/CreateNothi';
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

  const nothiList = await prisma.nothi.findMany();

  return (
    <div>
      <h1 className="mb-8 text-center text-2xl font-semibold">
        মৌজার নথি তৈরি করুন
      </h1>
      <CreateNothi mouzaData={mouzaData} />
      <div className="rounded-md border overflow-x-auto w-[81.5vw]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2} className="border text-center">
                ক্র. নং
              </TableHead>
              <TableHead rowSpan={2} className="border text-center">
                নথি নম্বর
              </TableHead>
              <TableHead colSpan={5} className="border text-center">
                তফসিল
              </TableHead>
              <TableHead rowSpan={2} className="border text-wrap text-center">
                জমির সরবমোট গ্রীন বরাদ্দ/নবায়ন/ নবায়নের সাল
              </TableHead>
              <TableHead rowSpan={2} className="border text-center">
                গ্রীন বরাদ্দাতার নাম ঠিকানা ও মোবাইল নম্বর/ অধিষ্ঠ প্রতিষ্ঠানের নাম ও মোবাইল নম্বর
              </TableHead>
              <TableHead rowSpan={2} className="border text-center">
                মামলা সংক্রান্ত তথ্য (যদি থাকে)
              </TableHead>
              <TableHead rowSpan={2} className="border text-center">
                মন্তব্য
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="border text-center">মৌজা</TableHead>
              <TableHead className="border text-center">জে.এল. নং</TableHead>
              <TableHead className="border text-center">খতিয়ান নং</TableHead>
              <TableHead className="border text-center">দাগ নং</TableHead>
              <TableHead className="border text-center">পরিমাণ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border text-center">1</TableCell>
              <TableCell className="border text-center">05/85</TableCell>
              <TableCell className="border text-center">সৌলিমাবাদ</TableCell>
              <TableCell className="border text-center">১৪৮</TableCell>
              <TableCell className="border text-center">১১১</TableCell>
              <TableCell className="border text-center">৩৯৭</TableCell>
              <TableCell className="border text-center">০.০৭</TableCell>
              <TableCell className="border text-center">আম বাগান</TableCell>
              <TableCell className="border text-center">১৪২৯</TableCell>
              <TableCell className="border text-center">
                মোঃ সালেহ হোসেন পিতা- মোঃ মজিদ উদ্দিন সাং- জগৎড়িপাড়া, দিনাজপুর
              </TableCell>
              <TableCell className="border text-center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Bottom Save Button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">নথি সংরক্ষণ</Button>
      </div>
    </div>
  );
}
