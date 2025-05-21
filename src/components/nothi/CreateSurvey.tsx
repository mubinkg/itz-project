'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { createSurvey } from '@/actions/nothi';
import { useRouter } from 'next/navigation';

const CreateSurvey = ({
  nothiId,
  landSurvey,
}: {
  nothiId: string;
  landSurvey: Record<string, any>[];
}) => {
  console.log(landSurvey);
  const router = useRouter();
  const [saSurvey, setSaSurvey] = useState('');
  const [saLine, setSaLine] = useState('');
  const [rsSurvey, setRsSurvey] = useState('');
  const [rsLine, setRsLine] = useState('');
  const [quantiy, setQuantity] = useState('');
  const [type, setType] = useState('');
  return (
    <>
      <td className="p-3">
        <Input
          placeholder="SA খতিয়ান"
          className="w-full"
          value={saSurvey}
          onChange={e => setSaSurvey(e.target.value)}
        />
      </td>
      <td className="p-3">
        <Input
          placeholder="SA দাগ"
          className="w-full"
          value={saLine}
          onChange={e => setSaLine(e.target.value)}
        />
      </td>
      <td className="p-3">
        <Input
          placeholder="RS খতিয়ান"
          className="w-full"
          value={rsSurvey}
          onChange={e => setRsSurvey(e.target.value)}
        />
      </td>
      <td className="p-3">
        <Input
          placeholder="RS দাগ"
          className="w-full"
          value={rsLine}
          onChange={e => setRsLine(e.target.value)}
        />
      </td>
      <td className="p-3">
        <Input
          placeholder="পরিমাণ"
          className="w-full"
          value={quantiy}
          onChange={e => setQuantity(e.target.value)}
        />
      </td>
      <td className="p-3">
        <Select onValueChange={e => setType(e)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="খাস" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="খাস">খাস</SelectItem>
            <SelectItem value="অন্যান্য">অন্যান্য</SelectItem>
          </SelectContent>
        </Select>
        <div className="mt-2">
          <Button
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={async () => {
              await createSurvey({
                nothiId,
                saLine,
                saSurvey,
                rsLine,
                rsSurvey,
                quantiy,
                type,
              });
              setQuantity('');
              setSaLine('');
              setSaSurvey('');
              setRsLine('');
              setRsSurvey('');
              setType('');
              router.refresh();
            }}
          >
            সংরক্ষণ
          </Button>
        </div>
      </td>
    </>
  );
};

export default CreateSurvey;
