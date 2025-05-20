'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { nothiOwner } from '@/actions/nothi'
import { useRouter } from 'next/navigation'
import { NothiOwner } from '@/generated/prisma'

const CreateOwner = ({ nothiId, previousOwners }: { nothiId: string, previousOwners: NothiOwner[] }) => {
    const router = useRouter()
    const [ownerName, setOwnerName] = useState('');
    const [gurdianName, setGurdianName] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div className="space-y-2">
            <div>
                {
                    previousOwners.map((owner, index) => (<p key={owner.id}> {`${index + 1} : `} মালিকের নাম: {owner.ownerName} , অভিভাবকের নাম : {owner.gurdianName} , ঠিকানা : {owner.address}</p>))
                }
            </div>
            <Input placeholder="মালিকের নাম" className="w-full" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
            <Input placeholder="অভিভাবকের" className="w-full" value={gurdianName} onChange={(e) => setGurdianName(e.target.value)} />
            <Input placeholder="ঠিকানা" className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Button className="bg-green-600 hover:bg-green-700" onClick={async () => {
                await nothiOwner({ ownerName, gurdianName, address, nothiId })
                setOwnerName('');
                setGurdianName('')
                setAddress('')
                router.refresh()
            }}>
                সংরক্ষণ
            </Button>
        </div>
    )
}

export default CreateOwner