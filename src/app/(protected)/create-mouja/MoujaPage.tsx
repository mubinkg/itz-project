'use client';

import { useState, useTransition } from 'react';
import CreateMoujaForm from '@/components/create-mouja-form';
import Delete from '@/components/mouja/Delete';
import { MapPin, ListChecks } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MoujaPage({ mouzaData }: { mouzaData: any[] }) {
  const [editData, setEditData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleFinishEdit = () => {
    setEditData(null);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="p-6 pt-0 bg-white min-h-screen">
      {/* Header */}
      <div className="w-full text-center space-y-4 pb-4 sticky top-[1px] z-10 px-2">
        <div className="w-full inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md">
          <MapPin className="h-6 w-6" />
          <h1 className="text-xl font-bold">নতুন মৌজা তৈরি করুন</h1>
          <p className="text-slate-100 max-w-2xl mx-auto">
            নতুন মৌজা যোগ করতে নিচের ফর্মটি পূরণ করুন এবং সংরক্ষণ করুন।
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="mx-auto mb-12 px-2 mt-2">
        <div className="rounded-xl shadow-lg bg-gradient-to-br from-green-50 to-white border border-green-100 p-6">
          <CreateMoujaForm editData={editData} onFinishEdit={handleFinishEdit} />
        </div>
      </div>

      {/* Mouja List Section */}
      <section className="mt-12 px-2">
        <div className="flex items-center gap-3 mb-4">
          <ListChecks className="h-6 w-6 text-green-600" />
          <h2 className="text-lg md:text-xl font-semibold text-green-700">
            মৌজার তালিকা
          </h2>
        </div>
        <div className="rounded-xl shadow-lg bg-gradient-to-br from-green-50 to-white border border-green-100 p-4 md:p-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">মৌজার নাম</th>
                <th className="p-3 text-left">জে.এল. নং</th>
                <th className="p-3 text-left">দিন</th>
                <th className="p-3 text-left">সময়</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {mouzaData.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-green-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 text-green-600">{item.name}</td>
                  <td className="p-3 text-green-600">{item.jlNo}</td>
                  <td className="p-3 text-green-600">
                    {format(new Date(item.createdAt), 'MMM dd, yyyy')}
                  </td>
                  <td className="p-3 text-green-600">
                    {format(new Date(item.createdAt), 'hh:mm a')}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <Button
                        size="icon"
                        variant="outline"
                        className="text-green-700 border-green-700"
                        onClick={() => setEditData(item)}
                        title="এডিট করুন"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Delete id={item.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
