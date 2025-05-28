"use client"

import { useState, useEffect, useTransition } from "react"
import { createUser, updateUser } from "@/actions/users"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Lock, UserCheck, X, Plus } from "lucide-react"

export default function UserForm({
    editingUser,
    onFinishEdit,
}: {
    editingUser?: Record<string, any> | null
    onFinishEdit?: () => void
}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")
    const [role, setRole] = useState<"ADMIN" | "EDITOR" | "USER">("USER")
    const [isPending, startTransition] = useTransition()

    const isEditing = !!editingUser

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name || "")
            setEmail(editingUser.email || "")
            setPassword(editingUser.password || "")
            setPhoto(editingUser.photo || "")
            setRole(editingUser.role || "USER")
        } else {
            setName("")
            setEmail("")
            setPassword("")
            setPhoto("")
            setRole("USER")
        }
    }, [editingUser])

    const handleSubmit = async () => {
        startTransition(async () => {
            if (editingUser) {
                await updateUser({ id: editingUser.id, name, email, password, photo, role })
            } else {
                await createUser({ name, email, password, photo, role })
            }
            if (onFinishEdit) onFinishEdit()
        })
    }

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    const getRoleColor = (role: string) => {
        const colors = {
            ADMIN: "bg-red-100 text-red-800 border-red-200",
            EDITOR: "bg-green-100 text-green-800 border-green-200",
            USER: "bg-gray-100 text-gray-800 border-gray-200",
        }
        return colors[role as keyof typeof colors] || colors.USER
    }

    return (
        <Card className="w-full mx-auto shadow-lg border-0 bg-white">
            <CardHeader className="space-y-4 pb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg">
                            {isEditing ? <UserCheck className="h-6 w-6 text-white" /> : <Plus className="h-6 w-6 text-white" />}
                        </div>
                        <div>
                            <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                {isEditing ? "ব্যবহারকারী এডিট করুন" : "নতুন ব্যবহারকারী তৈরি করুন"}
                            </CardTitle>
                            <CardDescription className="text-sm">
                                {isEditing ? "ব্যবহারকারীর তথ্য এবং অনুমতি আপডেট করুন" : "আপনার প্রতিষ্ঠানে একজন নতুন টিম সদস্য যোগ করুন"}
                            </CardDescription>
                        </div>
                    </div>
                    {isEditing && onFinishEdit && (
                        <Button variant="ghost" size="icon" onClick={onFinishEdit} className="h-8 w-8 hover:bg-gray-100">
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                {/* Preview Section */}
                {(name || photo) && (
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg border">
                        <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                            <AvatarImage src={photo || "/placeholder.svg"} alt={name} />
                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-teal-600 text-white text-lg font-semibold">
                                {name ? getInitials(name) : "U"}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">{name || "New User"}</h3>
                            <p className="text-sm text-gray-600">{email || "No email provided"}</p>
                            <Badge variant="outline" className={`mt-1 ${getRoleColor(role)}`}>
                                {role}
                            </Badge>
                        </div>
                    </div>
                )}
            </CardHeader>

            <CardContent className="space-y-6">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                    className="space-y-6"
                >
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-1">
                            <User className="h-5 w-5 text-green-600" />
                            ব্যক্তিগত তথ্য
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                    সম্পূর্ণ নাম
                                </Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="সম্পূর্ণ নাম লিখুন"
                                    className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    ইমেল ঠিকানা
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ইমেল ঠিকানা লিখুন"
                                        className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security & Access */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-1">
                            <Lock className="h-5 w-5 text-green-600" />
                            নিরাপত্তা এবং অ্যাক্সেস
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    পাসওয়ার্ড
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="নিরাপদ পাসওয়ার্ড লিখুন"
                                        className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                                    ব্যবহারকারীর অ্যাক্সেস ভূমিকা
                                </Label>
                                <Select value={role} onValueChange={(value: "ADMIN" | "EDITOR" | "USER") => setRole(value)}>
                                    <SelectTrigger className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500">
                                        <SelectValue placeholder="Select user role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ADMIN">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                Admin - সম্পূর্ণ অ্যাক্সেস
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="EDITOR">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                Editor - বিষয়বস্তু ব্যবস্থাপনা
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="USER">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                                User - বেসিক এক্সেস
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    {/* <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Camera className="h-5 w-5 text-green-600" />
                            Profile Picture
                        </h4>
                        <div className="space-y-2">
                            <Label htmlFor="photo" className="text-sm font-medium text-gray-700">
                                Photo URL
                            </Label>
                            <div className="relative">
                                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    id="photo"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    placeholder="Enter profile picture URL"
                                    className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                />
                            </div>
                        </div>
                    </div> */}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className={`h-12 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200
                                ${isEditing
                                    ? 'bg-yellow-600 hover:bg-yellow-700'
                                    : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                                }
                            `}
                        >
                            {isPending ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    {isEditing ? "আপডেট করা হচ্ছে..." : "তৈরি করা হচ্ছে..."}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    {isEditing ? <UserCheck className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    {isEditing ? "ব্যবহারকারী আপডেট করুন" : "ব্যবহারকারী তৈরি করুন"}
                                </div>
                            )}
                        </Button>
                        {isEditing && onFinishEdit && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onFinishEdit}
                                className="h-12 px-8 border-gray-300 hover:bg-gray-50 font-medium"
                                disabled={isPending}
                            >
                                Cancel
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
