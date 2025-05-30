import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function PlotListPage() {
  return (
    <div>
      {/* Header with search */}
      <div className="mb-4 flex items-center justify-between bg-green-700 p-4 text-white">
        <h1 className="text-xl font-semibold">দাগ নং এর তালিকা</h1>
        <div className="relative">
          <Input
            placeholder="Search"
            className="w-64 bg-white pr-10 pl-3 text-black"
          />
          <Search className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left font-medium">#</th>
              <th className="p-3 text-left font-medium">দাগ নং</th>
              <th className="p-3 text-left font-medium">বিস্তারিত</th>
              <th className="p-3 text-left font-medium">দিন</th>
              <th className="p-3 text-left font-medium">সময়</th>
              <th className="p-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {plotData.map((plot, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{plot.plotNumber}</td>
                <td className="p-3 text-sm">{plot.details}</td>
                <td className="p-3 whitespace-nowrap">{plot.date}</td>
                <td className="p-3 whitespace-nowrap">{plot.time}</td>
                <td className="p-3">
                  <div className="border border-green-500 p-2 text-center">
                    <Link href="#" className="text-blue-600 hover:underline">
                      Edit
                    </Link>{' '}
                    |{' '}
                    <Link href="#" className="text-red-600 hover:underline">
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const plotData = [
  {
    plotNumber: '১',
    details:
      'ইজারাদারের নাম ও ঠিকানা – মালিক বাংলাদেশ সরকার পক্ষে (জেলা প্রশাসক ,অংশ – ০১ ,রাজস্ব – নিল,জমির শ্রেণী (কৃষি) – বাজার,দাগের মোট পরিমাণ (একর।শতাংশ) – নিল ,দাগের মধ্যে অন্য খতিয়ানের অংশ – ০১,অংশানুযায়ী জমির পরিমাণ (শতাংশ) – ০৯ ।',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    plotNumber: '১০',
    details:
      'ইজারাদারের নাম ও ঠিকানা – মালিক বাংলাদেশ সরকার পক্ষে (জেলা প্রশাসক ,অংশ –১ ,রাজস্ব – নিল,জমির শ্রেণী (কৃষি) – পতিত,দাগের মোট পরিমাণ (একর।শতাংশ) – নিল ,দাগের মধ্যে অন্য খতিয়ানের অংশ – ১,অংশানুযায়ী জমির পরিমাণ (শতাংশ) – ৯ ।',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    plotNumber: '১৪',
    details:
      'ইজারাদারের নাম ও ঠিকানা – মালিক বাংলাদেশ সরকার পক্ষে (জেলা প্রশাসক ,অংশ – ১ ,রাজস্ব – নিল,জমির শ্রেণী (কৃষি) – নদী,দাগের মোট পরিমাণ (একর।শতাংশ) – নিল ,দাগের মধ্যে অন্য খতিয়ানের অংশ – ১,অংশানুযায়ী জমির পরিমাণ (একর)-৪ (শতাংশ) –৬৬ ।',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    plotNumber: '১৬',
    details:
      'ইজারাদারের নাম ও ঠিকানা – মালিক বাংলাদেশ সরকার পক্ষে (জেলা প্রশাসক ,অংশ – ১,রাজস্ব – নিল,জমির শ্রেণী (কৃষি) – বাজার,দাগের মোট পরিমাণ (একর।শতাংশ) – নিল ,দাগের মধ্যে অন্য খতিয়ানের অংশ – ০১,অংশানুযায়ী জমির পরিমাণ (শতাংশ) – ০৪ ।',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    plotNumber: '১৭',
    details:
      'ইজারাদারের নাম ও ঠিকানা – মালিক বাংলাদেশ সরকার পক্ষে (জেলা প্রশাসক ,অংশ – ১ ,রাজস্ব – নিল,জমির শ্রেণী (কৃষি) – দোকান,দাগের মোট পরিমাণ (একর।শতাংশ) – নিল ,দাগের মধ্যে অন্য খতিয়ানের অংশ – ১,অংশানুযায়ী জমির পরিমাণ (শতাংশ) – ০২ ।',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
];
