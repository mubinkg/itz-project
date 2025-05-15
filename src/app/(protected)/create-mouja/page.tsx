import CreateMoujaForm from '@/components/create-mouja-form';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import { format } from 'date-fns'
import Delete from '@/components/mouja/Delete';

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: {
      status: 'ACTIVE'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

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
              {mouzaData.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 text-green-600">{item.name}</td>
                  <td className="p-3 text-green-600">{format(item.createdAt, 'MMM dd, yyyy')}</td>
                  <td className="p-3 text-green-600">{format(item.createdAt, 'hh:mm a')}</td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <Link
                        href="/create-nothi"
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>{' '}
                      |{' '}
                      <Delete id={item.id} />
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

