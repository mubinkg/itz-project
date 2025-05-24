import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const NothiList = ({ nothiList }: { nothiList: Record<string, any>[] }) => {
  return (
    <div className="w-full overflow-x-auto rounded-md border border-cyan-50/0 mt-0">
      <Table>
        <TableHeader className='bg-gradient-to-r from-amber-100/50 to-amber-100/50'>
          <TableRow>
            <TableHead rowSpan={2} className="border text-center border-blue-800">
              ক্র. নং
            </TableHead>
            <TableHead rowSpan={2} className="border text-center border-blue-800">
              নথি নম্বর
            </TableHead>
            <TableHead colSpan={5} className="border text-center border-blue-800">
              তফসিল
            </TableHead>
            <TableHead rowSpan={2} className="border text-center border-blue-800">
              জমির শ্রেণী
            </TableHead>
            <TableHead
              rowSpan={2}
              className="py-2 border w-22 text-center border-blue-800 whitespace-pre-line"
            >
              সর্বশেষ লীজ প্রদান / নবায়নের সাল
            </TableHead>
            <TableHead rowSpan={2} className="py-2 border text-center border-blue-800 whitespace-pre-line">
              লীজ গ্রহীতার নাম, ঠিকানা ও মোবাইল নম্বর / অবৈধ দখলদাররে নাম ও মোবাইল নম্বর
            </TableHead>
            <TableHead rowSpan={2} className="border text-center border-blue-800 whitespace-pre-line">
              মামলা সংক্রান্ত তথ্য (যদি থাকে)
            </TableHead>
            <TableHead rowSpan={2} className="border text-center border-blue-800">
              মন্তব্য
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border text-center border-blue-800">মৌজা</TableHead>
            <TableHead className="border text-center border-blue-800">জে.এল. নং</TableHead>
            <TableHead className="border text-center border-blue-800">খতিয়ান নং</TableHead>
            <TableHead className="border text-center border-blue-800">দাগ নং</TableHead>
            <TableHead className="border text-center border-blue-800">পরিমাণ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='bg-white'>
          {nothiList.map((nothi, index) => (
            <TableRow key={nothi.id}>
              <TableCell className="border text-center border-blue-800">{index + 1}</TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.caseNo}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.mouja.name}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.mouja.jlNo}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.khotianNo}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.lineNo}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.quantity}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.landType}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.renewalDate}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.name}
                <br />
                পিতা- {nothi.parentName}
                <br />
                সাং- {nothi.address}
                <br />
                {nothi.mobile}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.caseInfo}
              </TableCell>
              <TableCell className="border text-center border-blue-800">
                {nothi.comment}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NothiList;
