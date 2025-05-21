'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MoujaSelect } from '../mouja/MoujaSelect';
import { Mouja } from '@/generated/prisma';
import { useRouter } from 'next/navigation';

const DashboardFilter = ({ mouzaData }: { mouzaData: Mouja[] }) => {
  const router = useRouter();
  const [moujaId, setMouja] = useState('');
  const [lineNo, setLineNo] = useState('');

  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <Card className="flex-1 border-2 border-green-500 p-4">
        <div className="mb-2 font-medium">মৌজা</div>
        <MoujaSelect
          mouzaData={mouzaData}
          value={moujaId}
          setValue={setMouja}
        />
      </Card>
      <Card className="flex-1 border-2 border-green-500 p-4">
        <div className="mb-2 font-medium">দাগ নং</div>
        <div className="flex gap-2">
          <Input
            placeholder="দাগ"
            value={lineNo}
            onChange={e => setLineNo(e.target.value)}
          />
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              const params = new URLSearchParams();
              params.set('moujaId', moujaId);
              params.set('lineNo', lineNo);
              router.push('/dashboard?' + params.toString());
            }}
          >
            Search
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardFilter;
