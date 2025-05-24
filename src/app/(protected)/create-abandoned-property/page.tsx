import AbandonedPropertyClient from './AbandonedPropertyClient';
import { prisma } from '@/lib/db';
import { Building2, ListChecks } from 'lucide-react';

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });

  const abandonedList = await prisma.abandoned.findMany({
    include: { mouja: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className='p-6 pt-0 bg-white min-h-screen'>
        {/* Header */}
        <div className="w-full text-center space-y-4 pb-4 sticky top-[1px] z-99 px-2">
          <div className="w-full inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md">
            <Building2 className="h-6 w-6" />
            <h1 className="text-xl font-bold">নতুন পরিত্যক্ত সম্পত্তি যুক্ত করুন</h1>
            <p className="text-slate-100 max-w-2xl mx-auto">
              নতুন পরিত্যক্ত সম্পত্তি যোগ করতে নিচের ফর্মটি পূরণ করুন এবং সংরক্ষণ করুন।
            </p>
          </div>
        </div>
      <AbandonedPropertyClient mouzaData={mouzaData} abandonedList={abandonedList} />
    </div>  
  );
}
