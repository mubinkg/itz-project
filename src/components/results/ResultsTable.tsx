import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const ResultsTable = () => {
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
                    <TableRow>
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
                    <TableRow>
                        <TableCell className="whitespace-nowrap">১৪/৯/৭৭</TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap">
                            অনাথ চন্দ্র মহন্ত
                            <br />
                            পিং- শ্রী দাস
                            <br />
                            জাতঃ
                        </TableCell>
                        <TableCell className="whitespace-nowrap">৯২৪</TableCell>
                        <TableCell className="whitespace-nowrap">৩৪৫৩</TableCell>
                        <TableCell className="whitespace-nowrap">১০২৮</TableCell>
                        <TableCell className="whitespace-nowrap">১০৭৩১</TableCell>
                        <TableCell className="whitespace-nowrap">০.২৭</TableCell>
                        <TableCell className="whitespace-nowrap">
                            প্রস্তাবযোগ্য
                            <br />
                            বা 'ক'
                            <br />
                            তালিকা
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap">
                            রজনী কান্ত রায় গং
                            <br />
                            পিং- দুর্গাই কান্ত রায়
                            <br />
                            জাতঃ
                        </TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">৩৪৫১</TableCell>
                        <TableCell className="whitespace-nowrap">১১৭৭</TableCell>
                        <TableCell className="whitespace-nowrap">৭৯০৬</TableCell>
                        <TableCell className="whitespace-nowrap">০.৬৭</TableCell>
                        <TableCell className="whitespace-nowrap">
                            প্রস্তাবযোগ্য
                            <br />
                            বা 'ক'
                            <br />
                            তালিকা
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">৩৪৫২</TableCell>
                        <TableCell className="whitespace-nowrap">১৯২৭</TableCell>
                        <TableCell className="whitespace-nowrap">৭৯০৭</TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">
                            প্রস্তাবযোগ্য
                            <br />
                            বা 'ক'
                            <br />
                            তালিকা
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap"></TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">৮৫২</TableCell>
                        <TableCell className="whitespace-nowrap">১০৭৭০</TableCell>
                        <TableCell className="whitespace-nowrap">N/A</TableCell>
                        <TableCell className="whitespace-nowrap">
                            প্রস্তাবযোগ্য
                            <br />
                            বা 'ক'
                            <br />
                            তালিকা
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default ResultsTable