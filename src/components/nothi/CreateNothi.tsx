'use client'

import React, { useState } from 'react'
import { MoujaSelect } from '../mouja/MoujaSelect'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Mouja } from '@/generated/prisma'
import { createNothi } from '@/actions/nothi'
import { useRouter } from 'next/navigation'

const CreateNothi = ({ mouzaData }: { mouzaData: Mouja[] }) => {
    const router = useRouter()
    const [moujaId, setMouja] = useState('')
    const [caseNo, setCaseNo] = useState('')
    const [caseNoSecondLine, setCaseNoSecondLine] = useState('')
    const [banglaYear, setBanglaYear] = useState('')

    return (
        <div className="mb-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center">
                    <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
                        মৌজা <span className="text-green-500">*</span>
                    </label>
                </div>
                <div className="col-span-2">
                    <MoujaSelect mouzaData={mouzaData} value={moujaId} setValue={setMouja} />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center">
                    <label htmlFor="caseFileNo" className="mr-2 whitespace-nowrap">
                        কেস নথি নং <span className="text-green-500">*</span>
                    </label>
                </div>
                <div className="col-span-2">
                    <Input
                        value={caseNo}
                        onChange={(e) => setCaseNo(e.target.value)}
                        id="caseFileNo"
                        placeholder="কেস নথি নং"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center">
                    <label
                        htmlFor="caseFileNoSecondLine"
                        className="mr-2 whitespace-nowrap"
                    >
                        কেস নথি নং দ্বিতীয় লাইন
                    </label>
                </div>
                <div className="col-span-2">
                    <Input
                        id="caseFileNoSecondLine"
                        placeholder="৮৯"
                        defaultValue="৮৯"
                        className="w-full"
                        value={caseNoSecondLine}
                        onChange={(e) => setCaseNoSecondLine(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center">
                    <label htmlFor="bengaliYear" className="mr-2 whitespace-nowrap">
                        বাংলা সন
                    </label>
                </div>
                <div className="col-span-2">
                    <Input value={banglaYear} onChange={(e) => setBanglaYear(e.target.value)} id="bengaliYear" placeholder="বাংলা সন" className="w-full" />
                </div>
            </div>

            <div className="flex gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800" onClick={async () => {
                    try {
                        await createNothi({ caseNo, caseNoSecondLine, moujaId, banglaYear })
                        router.refresh()
                        setBanglaYear('')
                        setCaseNo('')
                        setCaseNoSecondLine('')
                        setMouja('')
                    }
                    catch (err) {
                        console.log(err)
                    }
                }}>নথি সংরক্ষণ</Button>
                <Button variant="destructive">Refresh</Button>
            </div>
        </div>
    )
}

export default CreateNothi