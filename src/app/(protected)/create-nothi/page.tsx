import { MoujaSelect } from '@/components/mouja/MoujaSelect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Page() {
  return (
    <div>
      {/* Header */}
      <h1 className="mb-8 text-center text-2xl font-semibold">
        মৌজার নথি তৈরি করুন
      </h1>

      {/* Form Section */}
      <div className="mb-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center">
            <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
              মৌজা <span className="text-green-500">*</span>
            </label>
          </div>
          <div className="col-span-2">
            <MoujaSelect />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center">
            <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
              কেস নথি নং <span className="text-green-500">*</span>
            </label>
          </div>
          <div className="col-span-2">
            <Input
              id="caseFileNo"
              placeholder="কেস নথি নং"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center">
            <label
              htmlFor="caseFileNoSecondLine"
              className="mr-2 whitespace-nowrap"
            >
              কেস নথি নং দ্বিতীয় লাইন
            </label>
          </div>
          <div className="col-span-2">
            <Input
              id="caseFileNoSecondLine"
              placeholder="৮৯"
              defaultValue="৮৯"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center">
            <label htmlFor="bengaliYear" className="mr-2 whitespace-nowrap">
              বাংলা সন
            </label>
          </div>
          <div className="col-span-2">
            <Input id="bengaliYear" placeholder="বাংলা সন" className="w-full" />
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-blue-700 hover:bg-blue-800">নথি সংরক্ষণ</Button>
          <Button variant="destructive">Refresh</Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3 text-left whitespace-nowrap">কেস নথি নং</th>
              <th className="p-3 text-left whitespace-nowrap">বাংলা সন</th>
              <th className="p-3 text-left whitespace-nowrap">
                মালিকের নাম ও ঠিকানা
              </th>
              <th className="p-3 text-left whitespace-nowrap">SA খতিয়ান</th>
              <th className="p-3 text-left whitespace-nowrap">SA দাগ</th>
              <th className="p-3 text-left whitespace-nowrap">RS খতিয়ান</th>
              <th className="p-3 text-left whitespace-nowrap">RS দাগ</th>
              <th className="p-3 text-left whitespace-nowrap">পরিমাণ</th>
              <th className="p-3 text-left whitespace-nowrap">ধরন</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 whitespace-nowrap">৩৪৫</td>
              <td className="p-3 whitespace-nowrap">১৪২৫</td>
              <td className="p-3">
                <div className="space-y-2">
                  <Input placeholder="মালিকের নাম" className="w-full" />
                  <Input placeholder="অভিভাবকের" className="w-full" />
                  <Input placeholder="ঠিকানা" className="w-full" />
                  <Button className="bg-green-600 hover:bg-green-700">
                    সংরক্ষণ
                  </Button>
                </div>
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
          </tbody>
        </table>
      </div>

      {/* Bottom Save Button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">নথি সংরক্ষণ</Button>
      </div>
    </div>
  );
}
