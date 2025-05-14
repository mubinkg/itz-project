'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { createMouja } from '@/actions/mouja'

const CreateMoujaForm = () => {
    const [mouja, setMouja] = useState('')
    return (
        <form className="mb-8 rounded-sm border border-green-500 p-6" onSubmit={async (e) => {
            e.preventDefault()
            try {
                const data = await createMouja({ name: mouja })
                console.log(data)
                setMouja('')
            } catch (err) {
                console.log(err)
            }
        }}>
            <div className="space-y-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="mouza" className="font-medium">
                        মৌজা <span className="text-red-500">*</span>
                    </label>
                    <Input id="mouza" value={mouja} onChange={(e) => setMouja(e.target.value)} placeholder="মৌজা" className="w-full" />
                </div>
                <div>
                    <Button className="bg-green-600 text-white hover:bg-green-700" type='submit'>
                        নথি সংরক্ষণ
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default CreateMoujaForm