'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const AbandonedPropertyList = ({
  abandonedPropertyList,
  onEdit,
}: {
  abandonedPropertyList: Record<string, any>[];
  onEdit: (abandoned: Record<string, any>) => void;
}) => {
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
            <td className="p-3 whitespace-nowrap">
              <Button
                size="sm"
                variant="outline"
                className="text-green-700 border-green-700"
                onClick={() => onEdit(abandoned)}
              >
                Edit
              </Button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default AbandonedPropertyList;
