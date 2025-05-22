'use client';

import React, { useState } from 'react';
import { MoujaSelect } from '../mouja/MoujaSelect';
import { UpazilaSelect } from '../upazila/UpazilaSelect';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Mouja } from '@/generated/prisma';
import { useRouter } from 'next/navigation';
import { upazilaList } from '@/lib/upazila-list';
import { createAbandoned } from '@/actions/abandoned';

const CreateAbandonedProperty = ({ mouzaData }: { mouzaData: Mouja[] }) => {
  const router = useRouter();
  const [moujaId, setMouja] = useState('');
  const [upazila, setUpazila] = useState('');
  const [village, setVillage] = useState('');
  const [dagNo, setDagNo] = useState('');
  const [dagLandSize, setDagLandSize] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const [dateOfInspection, setDateOfInspection] = useState('');
  const [settlementCaseDateBook12, setSettlementCaseDateBook12] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="mb-8 space-y-6">
      {/* Mouja */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">মৌজা <span className="text-green-500">*</span></label>
        </div>
        <div className="col-span-2">
          <MoujaSelect mouzaData={mouzaData} value={moujaId} setValue={setMouja} />
        </div>
      </div>
      {/* Upazila */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">সার্কেল / উপজেলা <span className="text-green-500">*</span></label>
        </div>
        <div className="col-span-2">
          <UpazilaSelect upazilaList={upazilaList} value={upazila} setValue={setUpazila} />
        </div>
      </div>
      {/* Village */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">গ্রাম <span className="text-green-500">*</span></label>
        </div>
        <div className="col-span-2">
          <Input value={village} onChange={e => setVillage(e.target.value)} placeholder="গ্রাম" className="w-full" />
        </div>
      </div>
      {/* Dag No */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">দাগ নং</label>
        </div>
        <div className="col-span-2">
          <Input value={dagNo} onChange={e => setDagNo(e.target.value)} placeholder="দাগ নং" className="w-full" />
        </div>
      </div>
      {/* Dag Land Size */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">দাগের জমির পরিমাণ</label>
        </div>
        <div className="col-span-2">
          <Input value={dagLandSize} onChange={e => setDagLandSize(e.target.value)} placeholder="জমির পরিমাণ" className="w-full" />
        </div>
      </div>
      {/* Date of Registration */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">নিবন্ধনের তারিখ</label>
        </div>
        <div className="col-span-2">
          <Input type="date" value={dateOfRegistration} onChange={e => setDateOfRegistration(e.target.value)} className="w-full" />
        </div>
      </div>
      {/* Date of Inspection */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">পরিদর্শনের তারিখ</label>
        </div>
        <div className="col-span-2">
          <Input type="date" value={dateOfInspection} onChange={e => setDateOfInspection(e.target.value)} className="w-full" />
        </div>
      </div>
      {/* Settlement Case Date Book-12 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">বন্দোবস্ত কেস নং এবং তারিখ বুক-১২ অনুসারে</label>
        </div>
        <div className="col-span-2">
          <Input value={settlementCaseDateBook12} onChange={e => setSettlementCaseDateBook12(e.target.value)} placeholder="বুক-১২" className="w-full" />
        </div>
      </div>
      {/* Comment */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">মন্তব্য</label>
        </div>
        <div className="col-span-2">
          <Input value={comment} onChange={e => setComment(e.target.value)} placeholder="মন্তব্য" className="w-full" />
        </div>
      </div>
      {/* Submit */}
      <div className="flex gap-4 flex-wrap justify-end">
        <Button
          className="bg-green-700 hover:bg-green-800"
          onClick={async () => {
            try {
              await createAbandoned({
                moujaId,
                upazila,
                village,
                dagNo,
                dagLandSize,
                dateOfRegistration,
                dateOfInspection,
                settlementCaseDateBook12,
                comment,
              });
              router.refresh();
              setMouja('');
              setUpazila('');
              setVillage('');
              setDagNo('');
              setDagLandSize('');
              setDateOfRegistration('');
              setDateOfInspection('');
              setSettlementCaseDateBook12('');
              setComment('');
            } catch (err) {
              console.log(err);
            }
          }}
        >
          সংরক্ষণ করুন
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            setMouja('');
            setUpazila('');
            setVillage('');
            setDagNo('');
            setDagLandSize('');
            setDateOfRegistration('');
            setDateOfInspection('');
            setSettlementCaseDateBook12('');
            setComment('');
          }}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default CreateAbandonedProperty;
