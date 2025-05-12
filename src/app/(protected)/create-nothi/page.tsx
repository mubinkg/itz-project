import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Page() {
    return (
        <div>
            {/* Header */}
            <h1 className="text-2xl font-semibold text-center mb-8">মৌজার নথি তৈরি করুন</h1>

            {/* Form Section */}
            <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                        <label htmlFor="caseFileNo" className="whitespace-nowrap mr-2">
                            কেস নথি নং <span className="text-green-500">*</span>
                        </label>
                    </div>
                    <div className="col-span-2">
                        <Input id="caseFileNo" placeholder="কেস নথি নং" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                        <label htmlFor="caseFileNoSecondLine" className="whitespace-nowrap mr-2">
                            কেস নথি নং দ্বিতীয় লাইন
                        </label>
                    </div>
                    <div className="col-span-2">
                        <Input id="caseFileNoSecondLine" placeholder="৮৯" defaultValue="৮৯" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                        <label htmlFor="bengaliYear" className="whitespace-nowrap mr-2">
                            বাংলা সন
                        </label>
                    </div>
                    <div className="col-span-2">
                        <Input id="bengaliYear" placeholder="বাংলা সন" className="w-full" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button className="bg-blue-700 hover:bg-blue-800">নথি সংরক্ষণ</Button>
                    <Button variant="destructive">Refresh</Button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left p-3 whitespace-nowrap">কেস নথি নং</th>
                            <th className="text-left p-3 whitespace-nowrap">বাংলা সন</th>
                            <th className="text-left p-3 whitespace-nowrap">মালিকের নাম ও ঠিকানা</th>
                            <th className="text-left p-3 whitespace-nowrap">SA খতিয়ান</th>
                            <th className="text-left p-3 whitespace-nowrap">SA দাগ</th>
                            <th className="text-left p-3 whitespace-nowrap">RS খতিয়ান</th>
                            <th className="text-left p-3 whitespace-nowrap">RS দাগ</th>
                            <th className="text-left p-3 whitespace-nowrap">পরিমাণ</th>
                            <th className="text-left p-3 whitespace-nowrap">ধরন</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3 whitespace-nowrap">৩৪৫</td>
                            <td className="p-3 whitespace-nowrap">১৪২৫</td>
                            <td className="p-3">
                                <div className="space-y-2">
                                    <Input placeholder="মালিকের নাম" className="w-full" />
                                    <Input placeholder="অভিভাবকের" className="w-full" />
                                    <Input placeholder="ঠিকানা" className="w-full" />
                                    <Button className="bg-green-600 hover:bg-green-700">সংরক্ষণ</Button>
                                </div>
                            </td>
                            <td className="p-3">
                                <Input placeholder="SA খতিয়ান" className="w-full" />
                            </td>
                            <td className="p-3">
                                <Input placeholder="SA দাগ" className="w-full" />
                            </td>
                            <td className="p-3">
                                <Input placeholder="RS খতিয়ান" className="w-full" />
                            </td>
                            <td className="p-3">
                                <Input placeholder="RS দাগ" className="w-full" />
                            </td>
                            <td className="p-3">
                                <Input placeholder="পরিমাণ" className="w-full" />
                            </td>
                            <td className="p-3">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="খাস" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="খাস">খাস</SelectItem>
                                        <SelectItem value="অন্যান্য">অন্যান্য</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="mt-2">
                                    <Button className="bg-green-600 hover:bg-green-700 w-full">সংরক্ষণ</Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Bottom Save Button */}
            <div className="flex justify-end mt-6">
                <Button className="bg-green-600 hover:bg-green-700">নথি সংরক্ষণ</Button>
            </div>
        </div>
    )
}
