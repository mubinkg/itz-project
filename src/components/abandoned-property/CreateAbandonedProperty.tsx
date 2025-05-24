'use client';

import React, { useEffect, useState } from 'react';
import { MoujaSelect } from '../mouja/MoujaSelect';
import { UpazilaSelect } from '../upazila/UpazilaSelect';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Mouja } from '@/generated/prisma';
import { useRouter } from 'next/navigation';
import { upazilaList } from '@/lib/upazila-list';
import { createAbandoned, updateAbandoned } from '@/actions/abandoned';
import { RotateCcw, Save, RefreshCcw, Pencil } from 'lucide-react';

// Helper to format YYYY-MM-DD to dd/mm/YYYY
const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

// Helper to format YYYY-MM-DD to "1 Jun 2025"
const formatDateLong = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const CreateAbandonedProperty = ({
  mouzaData,
  editData,
  onFinishEdit,
}: {
  mouzaData: Mouja[];
  editData?: Record<string, any> | null;
  onFinishEdit?: () => void;
}) => {
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
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (editData) {
      setEditingId(editData.id);
      setMouja(editData.moujaId || '');
      setUpazila(editData.upazila || '');
      setVillage(editData.village || '');
      setDagNo(editData.dagNo || '');
      setDagLandSize(editData.dagLandSize || '');
      setDateOfRegistration(editData.dateOfRegistration || '');
      setDateOfInspection(editData.dateOfInspection || '');
      setSettlementCaseDateBook12(editData.settlementCaseDateBook12 || '');
      setComment(editData.comment || '');
    } else {
      setEditingId(null);
      setMouja('');
      setUpazila('');
      setVillage('');
      setDagNo('');
      setDagLandSize('');
      setDateOfRegistration('');
      setDateOfInspection('');
      setSettlementCaseDateBook12('');
      setComment('');
    }
  }, [editData]);

  const handleSubmit = async () => {
    if (editingId) {
      await updateAbandoned({
        id: editingId,
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
      if (onFinishEdit) onFinishEdit();
    } else {
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
      if (onFinishEdit) onFinishEdit();
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-6"
    >
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
          {dateOfRegistration && (
            <div className="text-xs text-yellow-600 mt-1">
              নিবন্ধনের তারিখ: {formatDateLong(dateOfRegistration)}
            </div>
          )}
        </div>
      </div>
      {/* Date of Inspection */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center">
          <label className="mr-2 whitespace-nowrap">পরিদর্শনের তারিখ</label>
        </div>
        <div className="col-span-2">
          <Input type="date" value={dateOfInspection} onChange={e => setDateOfInspection(e.target.value)} className="w-full" />
          {dateOfInspection && (
            <div className="text-xs text-yellow-600 mt-1">
              পরিদর্শনের তারিখ: {formatDateLong(dateOfInspection)}
            </div>
          )}
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
          type="submit"
          className="bg-green-700 hover:bg-green-800 flex items-center gap-2"
        >
          {editingId ? (
            <>
              <Pencil className="w-4 h-4" />
              আপডেট করুন
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              সংরক্ষণ করুন
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-amber-500 text-amber-500 hover:text-amber-700 hover:bg-amber-50 flex items-center gap-2"
          onClick={() => {
            setEditingId(null);
            setMouja('');
            setUpazila('');
            setVillage('');
            setDagNo('');
            setDagLandSize('');
            setDateOfRegistration('');
            setDateOfInspection('');
            setSettlementCaseDateBook12('');
            setComment('');
            if (onFinishEdit) onFinishEdit();
          }}
        >
          <RotateCcw className="w-4 h-4" />
          রিফ্রেশ
        </Button>
      </div>
    </form>
  );
};

export default CreateAbandonedProperty;
