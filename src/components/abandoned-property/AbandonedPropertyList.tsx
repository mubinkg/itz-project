'use client';

import React from 'react';

const AbandonedPropertyList = ({
  abandonedPropertyList,
}: {
  abandonedPropertyList: Record<string, any>[];
}) => {
  return (
    <tbody>
      {abandonedPropertyList.map((abandoned) => (
        <tr key={abandoned.id} className="border-b">
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
        </tr>
      ))}
    </tbody>
  );
};

export default AbandonedPropertyList;
