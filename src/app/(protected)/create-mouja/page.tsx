import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <div>
            {/* Header with back button */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold text-center flex-1">মৌজা তৈরি করুন</h1>
            </div>

            {/* Form section */}
            <div className="border border-green-500 p-6 mb-8 rounded-sm">
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="mouza" className="font-medium">
                            মৌজা <span className="text-red-500">*</span>
                        </label>
                        <Input id="mouza" placeholder="মৌজা" className="w-full" />
                    </div>
                    <div>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">নথি সংরক্ষণ</Button>
                    </div>
                </div>
            </div>

            {/* Table section */}
            <div>
                <div className="bg-green-600 text-white p-3 font-medium text-lg">মৌজার তালিকা</div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-3">#</th>
                                <th className="text-left p-3">মৌজার নাম</th>
                                <th className="text-left p-3">দিন</th>
                                <th className="text-left p-3">সময়</th>
                                <th className="text-left p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mouzaData.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{item.id}</td>
                                    <td className="p-3 text-green-600">{item.name}</td>
                                    <td className="p-3 text-green-600">{item.date}</td>
                                    <td className="p-3 text-green-600">{item.time}</td>
                                    <td className="p-3">
                                        <div className="flex gap-1">
                                            <Link href="/create-nothi" className="text-blue-500 hover:underline">
                                                Edit
                                            </Link>{" "}
                                            |{" "}
                                            <Link href="#" className="text-red-500 hover:underline">
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mouzaData = [
    {
        id: 1,
        name: "হেমেনবাবাদ",
        date: "Feb 24, 2019",
        time: "12:02:PM",
    },
    {
        id: 2,
        name: "ছোট অর্জুনকান্দি",
        date: "Feb 24, 2019",
        time: "12:02:PM",
    },
    {
        id: 3,
        name: "ছোট অর্জুনকান্দি/ছদমুস",
        date: "Feb 24, 2019",
        time: "12:02:PM",
    },
    {
        id: 4,
        name: "ছদমুস/চিকনগর/মোমেনলা",
        date: "Feb 24, 2019",
        time: "12:02:PM",
    },
    {
        id: 5,
        name: "সোনাকান্দা/রুকুনপুর/আহাম্মদপুর",
        date: "Feb 24, 2019",
        time: "12:02:PM",
    },
]
