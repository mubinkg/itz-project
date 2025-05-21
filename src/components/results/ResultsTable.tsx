import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Nothi } from '@/generated/prisma';

const ResultsTable = ({ nothiList }: { nothiList: Nothi[] }) => {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="whitespace-nowrap">কেস নম্বি নং</TableHead>
                        <TableHead className="whitespace-nowrap">বাংলা সন</TableHead>
                        <TableHead className="whitespace-nowrap">
                            মালিকের নাম ও ঠিকানা
                        </TableHead>
                        <TableHead className="whitespace-nowrap">SA খতিয়ান</TableHead>
                        <TableHead className="whitespace-nowrap">SA দাগ</TableHead>
                        <TableHead className="whitespace-nowrap">RS খতিয়ান</TableHead>
                        <TableHead className="whitespace-nowrap">RS দাগ</TableHead>
                        <TableHead className="whitespace-nowrap">পরিমাণ</TableHead>
                        <TableHead className="whitespace-nowrap">শ্রেণী</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        nothiList.map(nothi => (
                            <TableRow key={nothi.id}>
                                <TableCell className="whitespace-nowrap">১১/৮৮</TableCell>
                                <TableCell className="whitespace-nowrap">১৯/৮/৭৭</TableCell>
                                <TableCell className="whitespace-nowrap">
                                    সুরেশ চন্দ্র মহন্ত
                                    <br />
                                    পিং- শ্রী দাস
                                    <br />
                                    জাতঃ
                                    <br />
                                    গণেশ চন্দ্র মহন্ত
                                    <br />
                                    পিং- শ্রী দাস
                                    <br />
                                    জাতঃ
                                </TableCell>
                                <TableCell className="whitespace-nowrap">৪৫৩</TableCell>
                                <TableCell className="bg-red-500 whitespace-nowrap text-white">
                                    ৩৪৫৪
                                </TableCell>
                                <TableCell className="whitespace-nowrap">১১৭৭</TableCell>
                                <TableCell className="whitespace-nowrap">৭৯০৮</TableCell>
                                <TableCell className="whitespace-nowrap">০.৫০</TableCell>
                                <TableCell className="whitespace-nowrap">
                                    প্রস্তাবযোগ্য
                                    <br />
                                    বা 'ক'
                                    <br />
                                    তালিকা
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default ResultsTable