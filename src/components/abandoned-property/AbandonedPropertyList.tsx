'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { deleteAbandoned } from '@/actions/abandoned';
import { useRouter } from 'next/navigation';

const AbandonedPropertyList = ({
  abandonedPropertyList,
  onEdit,
}: {
  abandonedPropertyList: Record<string, any>[];
  onEdit: (abandoned: Record<string, any>) => void;
}) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিতভাবে মুছে ফেলতে চান?')) {
      await deleteAbandoned(id);
      router.refresh();
    }
  };

  return (
    <tbody>
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
            <td className="p-3 whitespace-nowrap">{abandoned.dateOfRegistration}</td>
            <td className="p-3 whitespace-nowrap">{abandoned.dateOfInspection}</td>
            <td className="p-3 whitespace-nowrap">{abandoned.settlementCaseDateBook12}</td>
            <td className="p-3 whitespace-nowrap">{abandoned.comment}</td>
            <td className="p-3 whitespace-nowrap">
              {abandoned.createdAt
                ? new Date(abandoned.createdAt).toLocaleDateString('bn-BD')
                : ''}
            </td>
            <td className="p-3 whitespace-nowrap flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-green-700 border-green-700"
                onClick={() => onEdit(abandoned)}
              >
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(abandoned.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default AbandonedPropertyList;
