'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

export default function LandOffice() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">সহকারী কামিশনার (ভূমি)</h1>
        <h2 className="mt-1 text-xl">উপজেলা ভূমি অফিস</h2>
        <h3 className="mt-1 text-lg">শিবগঞ্জ, চাঁপাইনবাবগঞ্জ</h3>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <Card className="flex-1 border-2 border-green-500 p-4">
          <div className="mb-2 font-medium">মৌজা</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="মৌজা" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="হোসেনাবাদ">হোসেনাবাদ</SelectItem>
                <SelectItem value="ছোট কাজিপুরাহাটি">
                  ছোট কাজিপুরাহাটি
                </SelectItem>
                <SelectItem value="বড় কাজিপুরাহাটি">
                  বড় কাজিপুরাহাটি
                </SelectItem>
                <SelectItem value="হরিপুর">হরিপুর</SelectItem>
                <SelectItem value="হরিপুর/কুলসিন্দুর">
                  হরিপুর/কুলসিন্দুর
                </SelectItem>
                <SelectItem value="সেনহাটি">সেনহাটি</SelectItem>
                <SelectItem value="সেনহাটি/রাজারামপুর">
                  সেনহাটি/রাজারামপুর
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>
        <Card className="flex-1 border-2 border-green-500 p-4">
          <div className="mb-2 font-medium">দাগ নং</div>
          <div className="flex gap-2">
            <Input placeholder="দাগ" />
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => router.push('/results')}
            >
              Search
            </Button>
          </div>
        </Card>
      </div>

      <div className="mb-1 h-12 w-full bg-green-600"></div>
      <div className="flex h-96 w-full items-center justify-center bg-gray-200">
        <div className="text-5xl text-gray-500">!</div>
      </div>
    </div>
  );
}