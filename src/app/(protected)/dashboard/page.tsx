'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function LandOffice() {
  const router = useRouter()

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">সহকারী কামিশনার (ভূমি)</h1>
        <h2 className="text-xl mt-1">উপজেলা ভূমি অফিস</h2>
        <h3 className="text-lg mt-1">শিবগঞ্জ, চাঁপাইনবাবগঞ্জ</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Card className="p-4 border-2 border-green-500 flex-1">
          <div className="mb-2 font-medium">মৌজা</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="মৌজা" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="হোসেনাবাদ">হোসেনাবাদ</SelectItem>
                <SelectItem value="ছোট কাজিপুরাহাটি">ছোট কাজিপুরাহাটি</SelectItem>
                <SelectItem value="বড় কাজিপুরাহাটি">বড় কাজিপুরাহাটি</SelectItem>
                <SelectItem value="হরিপুর">হরিপুর</SelectItem>
                <SelectItem value="হরিপুর/কুলসিন্দুর">হরিপুর/কুলসিন্দুর</SelectItem>
                <SelectItem value="সেনহাটি">সেনহাটি</SelectItem>
                <SelectItem value="সেনহাটি/রাজারামপুর">সেনহাটি/রাজারামপুর</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>

        <Card className="p-4 border-2 border-green-500 flex-1">
          <div className="mb-2 font-medium">রেকর্ড এর ধরন</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="এস.এ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="এস.এ">এস.এ</SelectItem>
                <SelectItem value="আর.এস">আর.এস</SelectItem>
                <SelectItem value="বি.এস">বি.এস</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>

        <Card className="p-4 border-2 border-green-500 flex-1">
          <div className="mb-2 font-medium">দাগ নং</div>
          <div className="flex gap-2">
            <Input placeholder="দাগ" />
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push('/results')}>Search</Button>
          </div>
        </Card>
      </div>

      <div className="bg-green-600 h-12 w-full mb-1"></div>
      <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
        <div className="text-gray-500 text-5xl">!</div>
      </div>
    </div>
  )
}
