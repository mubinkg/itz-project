'use client';

import React from 'react';
import CreateOwner from './CreateOwner';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';

const NothiList = ({ nothiList }: { nothiList: Record<string, any>[] }) => {
  return (
    <tbody>
      {nothiList.map(nothi => (
        <tr key={nothi.id} className="border-b">
          <td className="p-3 whitespace-nowrap">{nothi.caseNo}</td>
          <td className="p-3 whitespace-nowrap">{nothi.banglaYear}</td>
          <td className="p-3">
            <CreateOwner nothiId={nothi.id} previousOwners={nothi.nothiOwner} />
          </td>
          <td className="p-3">
            <Input placeholder="SA খতিয়ান" className="w-full" />
          </td>
          <td className="p-3">
            <Input placeholder="SA দাগ" className="w-full" />
          </td>
          <td className="p-3">
            <Input placeholder="RS খতিয়ান" className="w-full" />
          </td>
          <td className="p-3">
            <Input placeholder="RS দাগ" className="w-full" />
          </td>
          <td className="p-3">
            <Input placeholder="পরিমাণ" className="w-full" />
          </td>
          <td className="p-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="খাস" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="খাস">খাস</SelectItem>
                <SelectItem value="অন্যান্য">অন্যান্য</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-2">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                সংরক্ষণ
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default NothiList;
