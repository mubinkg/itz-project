import CreateNothi from '@/components/nothi/CreateNothi';
import NothiList from '@/components/nothi/NothiList';
import { prisma } from '@/lib/db';
import { Sparkles, ListChecks } from "lucide-react";

export default async function Page() {
  const mouzaData = await prisma.mouja.findMany({
    where: { status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });

  const nothiList = await prisma.nothi.findMany({
    orderBy: { createdAt: 'desc' },
    include: { mouja: true },
  });

  return (
    <div className='p-6 pt-0 bg-white min-h-screen'>
      {/* Header */}
      <div className="w-full text-center space-y-4 pb-4 sticky top-[1px] z-99 px-2">
        <div className="w-full inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md">
        <Sparkles className="h-6 w-6" />
        <h1 className="text-xl font-bold">মৌজার নতুন নথি তৈরি করুন</h1>
        <p className="text-slate-100 max-w-2xl mx-auto">
          ভূমি সংক্রান্ত নতুন নথি তৈরি করতে নিচের ফর্মটি পূরণ করুন। সকল প্রয়োজনীয় তথ্য সঠিকভাবে প্রদান করুন।
        </p>
        </div>
      </div>

      {/* Create Nothi Form */}
      <CreateNothi mouzaData={mouzaData} />

      {/* Nothi List Section */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-4">
          <ListChecks className="h-6 w-6 text-indigo-600" />
          <h2 className="text-lg md:text-xl font-semibold text-indigo-700">
            নথির তালিকা
          </h2>
        </div>
        <div className="p-2 rounded-xl shadow-lg bg-gradient-to-br from-sky-100 to-sky-100 dark:from-gray-900 dark:to-gray-950 border border-sky-100 dark:border-gray-800">
          <NothiList nothiList={nothiList} />
        </div>
      </section>
    </div>
  );
}
