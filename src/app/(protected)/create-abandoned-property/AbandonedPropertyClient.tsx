'use client';

import { useState, useTransition } from 'react';
import AbandonedPropertyList from '@/components/abandoned-property/AbandonedPropertyList';
import CreateAbandonedProperty from '@/components/abandoned-property/CreateAbandonedProperty';
import { useRouter } from 'next/navigation';
import { Building2, ListChecks } from 'lucide-react';

export default function AbandonedPropertyClient({
  mouzaData,
  abandonedList,
}: {
  mouzaData: any[];
  abandonedList: any[];
}) {
  const [editData, setEditData] = useState<Record<string, any> | null>(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleFinishEdit = () => {
    setEditData(null);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="mx-auto space-y-8">
      <div className="grid gap-8">
        {/* Main Form */}
        <div className="w-full space-y-6">
          <div className="w-full rounded-xl shadow-lg bg-white/80 backdrop-blur-sm p-6">
            <CreateAbandonedProperty
              mouzaData={mouzaData}
              editData={editData}
              onFinishEdit={handleFinishEdit}
            />
          </div>
        </div>

        {/* Sidebar (optional: add progress, tips, etc. here if needed) */}
        <div className="space-y-6 flex flex-col sticky top-4 justify-start">
          {/* You can add a progress card or tips here if desired */}
        </div>
      </div>

      {/* Abandoned Property List Section */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-4">
          <ListChecks className="h-6 w-6 text-green-600" />
          <h2 className="text-lg md:text-xl font-semibold text-green-700">
            পরিত্যক্ত সম্পত্তির তালিকা
          </h2>
        </div>
        <AbandonedPropertyList
          abandonedPropertyList={abandonedList}
          onEdit={setEditData}
        />
      </section>
    </div>
  );
}