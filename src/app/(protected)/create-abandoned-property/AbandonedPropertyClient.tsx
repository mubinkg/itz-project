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
    <div className="min-h-screen to-white p-2">
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
          <div className="rounded-xl shadow-lg border border-green-100 p-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-green-50 dark:bg-green-950">
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">মৌজা</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">উপজেলা</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">গ্রাম</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">দাগ নং</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">জমির পরিমাণ</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">নিবন্ধনের তারিখ</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">পরিদর্শনের তারিখ</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">বুক-১২ কেস নং এবং তারিখ</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">মন্তব্য</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">লেখার তারিখ</th>
                  <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">অ্যাকশন</th>
                </tr>
              </thead>
              <AbandonedPropertyList
                abandonedPropertyList={abandonedList}
                onEdit={setEditData}
              />
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}