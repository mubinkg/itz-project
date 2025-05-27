'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { deleteAbandoned } from '@/actions/abandoned';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2 } from 'lucide-react';

const AbandonedPropertyList = ({
  abandonedPropertyList,
  onEdit,
}: {
  abandonedPropertyList: Record<string, any>[];
  onEdit?: (abandoned: Record<string, any>) => void;
}) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিতভাবে মুছে ফেলতে চান?')) {
      await deleteAbandoned(id);
      router.refresh();
    }
  };

  return (
    <div className="rounded-xl shadow-lg border border-green-500 overflow-x-auto">
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
            {onEdit && (
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">অ্যাকশন</th>
            )}
          </tr>
        </thead>
        <tbody className='bg-white'>
          {abandonedPropertyList.length === 0 ? (
            <tr>
              <td colSpan={11} className="text-center py-8 text-gray-500 dark:text-gray-400">
                কোনো তথ্য পাওয়া যায়নি
              </td>
            </tr>
          ) : (
            abandonedPropertyList.map((abandoned) => (
              <tr key={abandoned.id} className="border-b hover:bg-green-50 dark:hover:bg-green-950 transition">
                <td className="p-3 whitespace-nowrap">{abandoned.mouja?.name || ''}</td>
                <td className="p-3 whitespace-nowrap">{abandoned.upazila}</td>
                <td className="p-3 whitespace-nowrap">{abandoned.village}</td>
                <td className="p-3 whitespace-nowrap">{abandoned.dagNo}</td>
                <td className="p-3 whitespace-nowrap">{abandoned.dagLandSize}</td>
                <td className="p-3 whitespace-nowrap">
                  {abandoned.dateOfRegistration
                    ? new Date(abandoned.dateOfRegistration).toLocaleDateString('bn-BD')
                    : ''}  
                </td>
                <td className="p-3 whitespace-nowrap">
                  {abandoned.dateOfInspection
                    ? new Date(abandoned.dateOfInspection).toLocaleDateString('bn-BD')
                    : ''}  
                </td>
                <td className="p-3 whitespace-nowrap">{abandoned.settlementCaseDateBook12}</td>
                <td className="p-3 whitespace-nowrap">{abandoned.comment}</td>
                <td className="p-3 whitespace-nowrap">
                  {abandoned.createdAt
                    ? new Date(abandoned.createdAt).toLocaleDateString('bn-BD')
                    : ''}
                </td>
                <td className="p-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {onEdit && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="text-green-700 border-green-700"
                        onClick={() => onEdit(abandoned)}
                        title="এডিট করুন"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                    )}
                    {onEdit && (
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(abandoned.id)}
                        title="ডিলিট করুন"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AbandonedPropertyList;
