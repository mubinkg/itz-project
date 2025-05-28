'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MoujaSelect } from '../mouja/MoujaSelect'
import { Mouja } from '@/generated/prisma'
import { useRouter } from 'next/navigation'
import { Search, Filter } from "lucide-react"

const DashboardFilter = ({ mouzaData }: { mouzaData: Mouja[] }) => {
  const router = useRouter()
  const [moujaId, setMouja] = useState('')
  const [lineNo, setLineNo] = useState('')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mouja Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Filter className="h-4 w-4 text-green-600" />
            মৌজা নির্বাচন করুন
          </label>
          <div className="relative">
            <MoujaSelect mouzaData={mouzaData} value={moujaId} setValue={setMouja} />
          </div>
        </div>

        {/* Line Number Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Search className="h-4 w-4 text-green-600" />
            দাগ নম্বর
          </label>
          <Input
            placeholder="দাগ নম্বর লিখুন..."
            value={lineNo}
            onChange={(e) => setLineNo(e.target.value)}
            className="border-slate-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t">
        <Button
          onClick={() => {
              const params = new URLSearchParams();
              params.set('moujaId', moujaId);
              params.set('lineNo', lineNo);
              router.push('/dashboard?' + params.toString(), { scroll: false });
            }}
          className="flex-1 sm:flex-none bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium h-11 px-8 shadow-lg transition-all duration-200"
        >
          <Search className="h-4 w-4 mr-2" />
          অনুসন্ধান করুন
        </Button>
      </div>
    </div>
  )
}

export default DashboardFilter
