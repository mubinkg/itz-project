import DashboardFilter from '@/components/dashboard/DashboardFilter'
import NothiList from '@/components/nothi/NothiList'
import { prisma } from '@/lib/db'
import { Card } from "@/components/ui/card"
import { Building2, MapPin, Phone } from "lucide-react"

export default async function LandOffice({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams
  const filter: Record<string, any> = {}
  if (params?.moujaId) {
    filter['moujaId'] = {
      equals: params.moujaId
    }
  }
  if (params?.lineNo) {
    filter['lineNo'] = {
      contains: params.lineNo
    }
  }
  const nothiList = await prisma.nothi.findMany({
    where: filter,
    include: {
      mouja: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  const mouzaData = await prisma.mouja.findMany({
    where: {
      status: 'ACTIVE',
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const abandentData = await prisma.abandoned.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 pb-0">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-green-600" />
              <div className="h-8 w-1 bg-green-600 rounded-full"></div>
              <MapPin className="h-6 w-6 text-slate-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">সহকারী কামিশনার (ভূমি)</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-700">উপজেলা ভূমি অফিস</h2>
            <h3 className="text-lg md:text-xl text-slate-600 font-medium">শিবগঞ্জ, চাঁপাইনবাবগঞ্জ</h3>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-4">
              <Phone className="h-4 w-4" />
              <span>যোগাযোগ: ০১৭১২৩৪৫৬৭৮</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12 py-8">
          <Card className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white border-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">{nothiList.length}</div>
              <div className="text-green-100 mt-1">মোট নথি</div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-r from-sky-700 to-sky-800 text-white border-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">{mouzaData.length}</div>
              <div className="text-blue-100 mt-1">সক্রিয় মৌজা</div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-r from-amber-700 to-amber-800 text-white border-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold">{abandentData.length}</div>
              <div className="text-purple-100 mt-1">মোট পরিত্যক্ত সম্পত্তি</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-8 py-8 space-y-8">
        {/* Filter Section */}
        <Card className="p-6 shadow-md border-0 bg-white">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <div className="h-6 w-1 bg-green-600 rounded-full"></div>
            অনুসন্ধান ফিল্টার
          </h2>
          <DashboardFilter mouzaData={mouzaData} />
        </Card>

        {/* Table Section */}
        <Card className="py-6 px-6 shadow-md border-0 bg-white overflow-hidden gap-0  bg-gradient-to-r from-green-50 to-teal-50">
          <div className="p-6 px-0 pt-0 border-b">
            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <div className="h-6 w-1 bg-green-600 rounded-full"></div>
              নথি তালিকা
            </h2>
            <p className="text-slate-600 mt-1">সকল ভূমি সংক্রান্ত নথির বিস্তারিত তথ্য</p>
          </div>
          <NothiList nothiList={nothiList} />
        </Card>
      </div>
    </div>
  )
}
