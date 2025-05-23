import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Nothi } from '@/generated/prisma'

const NothiList = ({ nothiList }: { nothiList: Record<string, any>[] }) => {
  return (
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
          {
            nothiList.map((nothi, index) => (
              <TableRow key={nothi.id}>
                <TableCell className="border text-center">{index + 1}</TableCell>
                <TableCell className="border text-center">{nothi.caseNo}</TableCell>
                <TableCell className="border text-center">{nothi.mouja.name}</TableCell>
                <TableCell className="border text-center">{nothi.mouja.jlNo}</TableCell>
                <TableCell className="border text-center">{nothi.khotianNo}</TableCell>
                <TableCell className="border text-center">{nothi.lineNo}</TableCell>
                <TableCell className="border text-center">{nothi.quantity}</TableCell>
                <TableCell className="border text-center">{nothi.renewalDate}</TableCell>
                <TableCell className="border text-center">
                  {nothi.name}
                  <br />
                  পিতা- {nothi.parentName}
                  <br />
                  সাং- {nothi.address}
                  <br />
                  {nothi.mobile}
                </TableCell>
                <TableCell className="border text-center">
                  {
                    nothi.caseInfo
                  }
                </TableCell>
                <TableCell className="border text-center">{nothi.comment}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default NothiList