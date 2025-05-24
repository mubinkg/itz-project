'use client';

import React, { useState } from 'react';
import { MoujaSelect } from '../mouja/MoujaSelect';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Mouja } from '@/generated/prisma';
import { createNothi } from '@/actions/nothi';
import { useRouter } from 'next/navigation';
import { InputTags } from './tag-input';
import { toast } from 'sonner';
import {
  FileText,
  MapPin,
  Hash,
  Scale,
  Calendar,
  User,
  MessageSquare,
  Save,
  RotateCcw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const CreateNothi = ({ mouzaData }: { mouzaData: Mouja[] }) => {
  const router = useRouter();
  const [moujaId, setMouja] = useState('');
  const [caseNo, setCaseNo] = useState('');
  const [khotianNo, setKhotianNo] = useState<string[]>([]);
  const [lineNo, setLineNo] = useState<string[]>([]);
  const [quantity, setQuantity] = useState('');
  const [landType, setLandType] = useState('');
  const [comment, setComment] = useState('');
  const [caseInfo, setCaseInfo] = useState('');
  const [name, setName] = useState('');
  const [parentName, setParentName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function createNothiHandler() {
    setIsSubmitting(true)
    if (!moujaId || !caseNo || !khotianNo.length || !lineNo.length || !quantity || !landType || !renewalDate) {
      toast.error("অনুগ্রহ করে সকল আবশ্যক ক্ষেত্র পূরণ করুন");
      setIsSubmitting(false);
      return;
    }
    try {
      const data = await createNothi({
        mobile,
        moujaId,
        caseInfo,
        caseNo,
        khotianNo: khotianNo.join(','),
        landType,
        lineNo: lineNo.join(','),
        comment,
        address,
        name,
        parentName,
        quantity,
        renewalDate,
      });
      setMobile('');
      if (data.success) {
        toast.success(data.message);
        router.refresh();
        setMouja('');
        setCaseNo('');
        setKhotianNo([]);
        setLineNo([]);
        setQuantity('');
        setLandType('');
        setComment('');
        setCaseInfo('');
        setName('');
        setParentName('');
        setAddress('');
        setMobile('');
        setRenewalDate('');
      }
    } catch (err) {
      console.log(err);
    }
    finally {
      setIsSubmitting(false);
    }
  }

  const resetForm = () => {
    setMouja("")
    setCaseNo("")
    setKhotianNo([])
    setLineNo([])
    setQuantity("")
    setLandType("")
    setComment("")
    setCaseInfo("")
    setName("")
    setParentName("")
    setAddress("")
    setMobile("")
    setRenewalDate("")
  }

  // Count how many required fields are filled
const requiredFields = [
  moujaId,
  caseNo,
  khotianNo.length > 0 ? 'ok' : '',
  lineNo.length > 0 ? 'ok' : '',
  quantity,
  landType,
  renewalDate,
  name,
  parentName,
  address,
  mobile,
];
const filledCount = requiredFields.filter(Boolean).length;
const progress = Math.round((filledCount / requiredFields.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br p-2">
      <div className="mx-auto space-y-8">

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="py-4 bg-gradient-to-r from-blue-200 to-indigo-200 text-blue-800 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  মৌলিক তথ্য
                </CardTitle>
                <CardDescription className="text-blue-800">নথির প্রাথমিক তথ্যাদি প্রদান করুন</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    মৌজা{" "}
                    <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                      আবশ্যক
                    </Badge>
                  </Label>
                  <MoujaSelect mouzaData={mouzaData} value={moujaId} setValue={setMouja} />
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Hash className="h-4 w-4 text-blue-500" />
                    কেস নথি নং{" "}
                    <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                      আবশ্যক
                    </Badge>
                  </Label>
                  <Input
                    value={caseNo}
                    onChange={(e) => setCaseNo(e.target.value)}
                    placeholder="কেস নথি নং লিখুন..."
                    className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Hash className="h-4 w-4 text-blue-500" />
                      খতিয়ান নং{" "}
                      <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                        আবশ্যক
                      </Badge>
                    </Label>
                    <InputTags value={khotianNo} onChange={setKhotianNo} />
                  </div>

                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Hash className="h-4 w-4 text-blue-500" />
                      দাগ নং{" "}
                      <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                        আবশ্যক
                      </Badge>
                    </Label>
                    <InputTags value={lineNo} onChange={setLineNo} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Land Details */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="py-4 bg-gradient-to-r from-indigo-200 to-purple-200 text-purple-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  জমির বিবরণ
                </CardTitle>
                <CardDescription className="text-blue-800">জমি সংক্রান্ত বিস্তারিত তথ্য</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Scale className="h-4 w-4 text-indigo-500" />
                      পরিমাণ{" "}
                      <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                        আবশ্যক
                      </Badge>
                    </Label>
                    <Input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="জমির পরিমাণ লিখুন..."
                      className="h-12 border-slate-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <MapPin className="h-4 w-4 text-indigo-500" />
                      জমির শ্রেণী{" "}
                      <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                        আবশ্যক
                      </Badge>
                    </Label>
                    <Input
                      value={landType}
                      onChange={(e) => setLandType(e.target.value)}
                      placeholder="জমির শ্রেণী লিখুন..."
                      className="h-12 border-slate-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Calendar className="h-4 w-4 text-indigo-500" />
                    সর্বশেষ লীজ প্রদান/নবায়নের সাল{" "}
                    <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                      আবশ্যক
                    </Badge>
                  </Label>
                  <Input
                    value={renewalDate}
                    onChange={(e) => setRenewalDate(e.target.value)}
                    placeholder="বাংলা সন লিখুন..."
                    className="h-12 border-slate-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="py-4 bg-gradient-to-r from-purple-200 to-indigo-200 text-purple-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  ব্যক্তিগত তথ্য
                </CardTitle>
                <CardDescription className="text-blue-800">লীজ গ্রহীতার / অবৈধ দখলদাররে বিস্তারিত তথ্য</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <User className="h-4 w-4 text-purple-500" />
                    লীজ গ্রহীতার / অবৈধ দখলদাররে তথ্য{" "}
                    <Badge variant="destructive" className="bg-red-100 text-red-800 ml-1 text-xs">
                      আবশ্যক
                    </Badge>
                  </Label>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="নাম"
                      className="h-12 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                    <Input
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="পিতার নাম"
                      className="h-12 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="ঠিকানা"
                      className="h-12 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                    <Input
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="মোবাইল নম্বর"
                      className="h-12 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="py-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  অতিরিক্ত তথ্য
                </CardTitle>
                <CardDescription className="text-orange-800">মামলা ও মন্তব্য সংক্রান্ত তথ্য</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Scale className="h-4 w-4 text-orange-500" />
                    মামলা সংক্রান্ত তথ্য
                  </Label>
                  <Input
                    value={caseInfo}
                    onChange={(e) => setCaseInfo(e.target.value)}
                    placeholder="মামলা সংক্রান্ত তথ্য লিখুন..."
                    className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <MessageSquare className="h-4 w-4 text-orange-500" />
                    মন্তব্য
                  </Label>
                  <Input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="মন্তব্য লিখুন..."
                    className="h-12 border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 flex flex-col sticky top-4 justify-start">
            {/* Progress Card */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-gradient-to-br from-sky-600 to-cyan-700 text-white">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-white/80" />
                  <h3 className="text-lg font-semibold">ফর্ম অগ্রগতি</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>সম্পূর্ণতা</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="py-0 mb-8 gap-0 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <Button
                  onClick={createNothiHandler}
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      সংরক্ষণ হচ্ছে...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      নথি সংরক্ষণ করুন
                    </div>
                  )}
                </Button>

                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="w-full h-12 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  ফর্ম রিসেট করুন
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  দ্রুত টিপস
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-slate-700">সকল আবশ্যক ক্ষেত্র পূরণ করুন</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-slate-700">মোবাইল নম্বর সঠিকভাবে লিখুন</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="h-2 w-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm text-slate-700">একাধিক দাগ/খতিয়ান নং যোগ করতে পারেন</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNothi;
