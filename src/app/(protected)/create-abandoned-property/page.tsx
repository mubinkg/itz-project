import AbandonedPropertyList from '@/components/abandoned-property/AbandonedPropertyList';
import CreateAbandonedProperty from '@/components/abandoned-property/CreateAbandonedProperty';
import { prisma } from '@/lib/db';

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
    <div className="mx-auto pb-10 px-2 md:px-0">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-800 dark:text-green-300 tracking-tight">
        পরিত্যক্ত সম্পত্তির নথি তৈরি করুন
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mb-10">
        <CreateAbandonedProperty mouzaData={mouzaData} />
      </div>
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-green-50 dark:bg-green-950">
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">মৌজা</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">উপজেলা</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">গ্রাম</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">দাগ নং</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">জমির পরিমাণ</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">নিবন্ধনের তারিখ</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">পরিদর্শনের তারিখ</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">বুক-১২ কেস</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">মন্তব্য</th>
              <th className="p-3 text-left whitespace-nowrap font-semibold text-green-900 dark:text-green-200">লেখার তারিখ</th>
            </tr>
          </thead>
          <AbandonedPropertyList abandonedPropertyList={abandonedList} />
        </table>
      </div>
    </div>
  );
}
