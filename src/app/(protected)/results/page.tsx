import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ResultsTable from '@/components/results/ResultsTable';
import { prisma } from '@/lib/db';

export default async function Page() {
  const nothiList = await prisma.nothi.findMany({
    include: {
      nothiOwner: true,
      landSurvey: true,
    },
  });
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-1 text-2xl font-semibold">সহকারী কমিশনার (ভূমি)</h1>
        <h2 className="mb-4 text-xl">শিবগঞ্জ, চাঁপাইনবাবগঞ্জ</h2>
      </div>

      {/* Search Form */}
      <div className="mb-8 flex flex-col items-end justify-center gap-4 sm:flex-row">
        <div className="flex flex-col">
          <label htmlFor="mouza" className="mb-2">
            মৌজা
          </label>
          <Input id="mouza" placeholder="শিবগঞ্জ" className="w-full sm:w-60" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dag" className="mb-2">
            দাগ নং
          </label>
          <Input id="dag" placeholder="৩৪৫৪" className="w-full sm:w-60" />
        </div>
        <Button className="bg-blue-700 hover:bg-blue-800">Search</Button>
        <Button variant="destructive">Refresh</Button>
      </div>

      <ResultsTable nothiList={nothiList} />
    </div>
  );
}
