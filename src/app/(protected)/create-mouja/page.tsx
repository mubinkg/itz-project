import CreateMoujaForm from '@/components/create-mouja-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      {/* Header with back button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex-1 text-center text-2xl font-semibold">
          মৌজা তৈরি করুন
        </h1>
      </div>

      {/* Form section */}
      <CreateMoujaForm />

      {/* Table section */}
      <div>
        <div className="bg-green-600 p-3 text-lg font-medium text-white">
          মৌজার তালিকা
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">মৌজার নাম</th>
                <th className="p-3 text-left">দিন</th>
                <th className="p-3 text-left">সময়</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {mouzaData.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3 text-green-600">{item.name}</td>
                  <td className="p-3 text-green-600">{item.date}</td>
                  <td className="p-3 text-green-600">{item.time}</td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <Link
                        href="/create-nothi"
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>{' '}
                      |{' '}
                      <Link href="#" className="text-red-500 hover:underline">
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
    </div>
  );
}

const mouzaData = [
  {
    id: 1,
    name: 'হেমেনবাবাদ',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    id: 2,
    name: 'ছোট অর্জুনকান্দি',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    id: 3,
    name: 'ছোট অর্জুনকান্দি/ছদমুস',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    id: 4,
    name: 'ছদমুস/চিকনগর/মোমেনলা',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
  {
    id: 5,
    name: 'সোনাকান্দা/রুকুনপুর/আহাম্মদপুর',
    date: 'Feb 24, 2019',
    time: '12:02:PM',
  },
];
