'use client';

import React, { useState } from 'react';
import { MoujaSelect } from '../mouja/MoujaSelect';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Mouja } from '@/generated/prisma';
import { createNothi } from '@/actions/nothi';
import { useRouter } from 'next/navigation';
import { InputTags } from '../tag-input';
import { toast } from 'sonner';

const CreateNothi = ({ mouzaData }: { mouzaData: Mouja[] }) => {
  const router = useRouter();
  const [moujaId, setMouja] = useState('');
  const [caseNo, setCaseNo] = useState('');
  const [khotianNo, setKhotianNo] = useState<string[]>([])
  const [lineNo, setLineNo] = useState<string[]>([])
  const [quantity, setQuantity] = useState('')
  const [landType, setLandType] = useState('')
  const [comment, setComment] = useState('')
  const [caseInfo, setCaseInfo] = useState('')
  const [name, setName] = useState('')
  const [parentName, setParentName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [renewalDate, setRenewalDate] = useState('')

  async function createNothiHandler() {
    try {
      const data = await createNothi({
        mobile,
        moujaId,
        caseInfo,
        caseNo,
        khotianNo: khotianNo.join(','),
        landType,
        lineNo: lineNo.join(','),
        comment,
        address,
        name,
        parentName,
        quantity,
        renewalDate,
      })
      setMobile('')
      if (data.success) {
        toast.success(data.message)
        router.refresh()
        setMouja('')
        setCaseNo('')
        setKhotianNo([])
        setLineNo([])
        setQuantity('')
        setLandType('')
        setComment('')
        setCaseInfo('')
        setName('')
        setParentName('')
        setAddress('')
        setMobile('')
        setRenewalDate('')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
            মৌজা <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <MoujaSelect
            mouzaData={mouzaData}
            value={moujaId}
            setValue={setMouja}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
            কেস নথি নং <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={caseNo}
            onChange={e => setCaseNo(e.target.value)}
            id="caseFileNo"
            placeholder="কেস নথি নং"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
            খতিয়ান নং <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <InputTags
            value={khotianNo}
            onChange={setKhotianNo}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
            দাগ নং <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <InputTags
            value={lineNo}
            onChange={setLineNo}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="quantity" className="mr-2 whitespace-nowrap">
            পরিমাণ <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            id="quantity"
            placeholder="পরিমাণ"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="landType" className="mr-2 whitespace-nowrap">
            জমিরশ্রেণী <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={landType}
            onChange={e => setLandType(e.target.value)}
            id="landType"
            placeholder="জমিরশ্রেণী"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="bengaliYear" className="mr-2 whitespace-nowrap">
            সর্বশেষ লীজ প্রদান/ নবায়নে র সাল <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={renewalDate}
            onChange={e => setRenewalDate(e.target.value)}
            id="bengaliYear"
            placeholder="বাংলা সন"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="bengaliYear" className="mr-2 whitespace-nowrap">
            লীজ গ্রহীতার নাম, ঠিকানা ও মোবাইল নম্বর/ অবৈধ দখলদাররে নাম ও মোবাইল নম্বর <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            id="name"
            placeholder="নাম"
            className="w-full"
          />
          <Input
            value={parentName}
            onChange={e => setParentName(e.target.value)}
            id="parentName"
            placeholder="পিতা"
            className="w-full"
          />
          <Input
            value={address}
            onChange={e => setAddress(e.target.value)}
            id="address"
            placeholder="ঠিকানা"
            className="w-full"
          />
          <Input
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            id="mobile"
            placeholder="মোবাইল নম্বর"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="caseInfo" className="mr-2 whitespace-nowrap">
            মামলাসংক্রান্ত তথ্য
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={caseInfo}
            onChange={e => setCaseInfo(e.target.value)}
            id="caseInfo"
            placeholder="মামলাসংক্রান্ত তথ্য"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <label htmlFor="comment" className="mr-2 whitespace-nowrap">
            মন্তব্য
          </label>
        </div>
        <div className="col-span-2">
          <Input
            value={comment}
            onChange={e => setComment(e.target.value)}
            id="comment"
            placeholder="মন্তব্য"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          className="bg-blue-700 hover:bg-blue-800"
          onClick={createNothiHandler}
        >
          নথি সংরক্ষণ
        </Button>
        <Button variant="destructive">Refresh</Button>
      </div>
    </div>
  );
};

export default CreateNothi;
