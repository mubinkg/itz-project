import AbandonedPropertyClient from './AbandonedPropertyClient';
import { prisma } from '@/lib/db';
import { Building2 } from 'lucide-react';
import { cookies } from 'next/headers';
import AccessDenied from '@/components/common/AccessDenied';

export default async function Page() {
  // Get the role from cookies
  const cookieStore = await cookies();
  const role = cookieStore.get('user_vumi_role')?.value || '';

  // Block access if the role is 'USER'
  if (role === 'USER') {
    return <AccessDenied />;
  }

  const mouzaData = await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });

  const abandonedList = await prisma.abandoned.findMany({
    include: { mouja: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-white pb-16 min-h-screen">
      {/* Header */}
      <div className="w-full text-center space-y-4 pb-4 sticky top-[1px] z-10 px-8">
        <div className="w-full inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md">
          <Building2 className="h-6 w-6" />
          <h1 className="text-xl font-bold">পরিত্যক্ত সম্পত্তি তৈরি করুন</h1>
          <p className="text-slate-100 max-w-2xl mx-auto">
            নতুন পরিত্যক্ত সম্পত্তি যুক্ত ও সংরক্ষণের প্রক্রিয়া সম্পাদন করুন।
          </p>
        </div>
      </div>

      <section className="px-8 sm:px-8">
        <div className="w-full">
          <AbandonedPropertyClient mouzaData={mouzaData} abandonedList={abandonedList} />
        </div>
      </section>
    </div>
  );
}
