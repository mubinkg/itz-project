"use client"

import { useState } from "react"
import type { User } from "@/actions/users" // Import the User type
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, ListFilter, Search, Trash2, UserX } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function UserList({
    users,
    onEdit,
    onDelete,
}: {
    users: User[] // Ensure users is an array of User
    onEdit: (user: User) => void // Ensure onEdit receives a User
    onDelete?: (userId: string) => void // Optional delete handler
}) {
    const [searchTerm, setSearchTerm] = useState("")

    // Filter users based on search term
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Get user initials for avatar
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    // Get role badge styling
    const getRoleBadgeStyle = (role: string) => {
        switch (role) {
            case "ADMIN":
                return "bg-red-100 text-red-800 border-red-200"
            case "EDITOR":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "VIEWER":
                return "bg-green-100 text-green-800 border-green-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    return (
        <Card className="w-full shadow-lg border-0">
            <CardHeader className="pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg">
                            <ListFilter className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                ব্যবহারকারীর তালিকা
                            </CardTitle>
                            <CardDescription className="text-sm">
                                আপনার দলের সদস্য এবং তাদের অ্যাকাউন্টের অনুমতিগুলি পরিচালনা করুন
                            </CardDescription>
                        </div>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="ব্যবহারকারীদের অনুসন্ধান করুন..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                {filteredUsers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                        {users.length === 0 ? (
                            <>
                                <UserX className="h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-1">কোনো ব্যবহারকারী পাওয়া যায়নি</h3>
                                <p className="text-gray-500 max-w-sm">
                                    সিস্টেমে এখনও কোনও ব্যবহারকারী নেই। শুরু করতে আপনার প্রথম ব্যবহারকারী তৈরি করুন।
                                </p>
                            </>
                        ) : (
                            <>
                                <Search className="h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-1">কোনও মিলিত ব্যবহারকারী খুঁজে পাওয়া যায়নি</h3>
                                <p className="text-gray-500 max-w-sm">
                                    আপনার অনুসন্ধানের মানদণ্ডের সাথে কোনও ব্যবহারকারীর মিল নেই। আপনার অনুসন্ধানের পদগুলি সামঞ্জস্য করার চেষ্টা করুন।
                                </p>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left py-4 px-6 font-medium text-gray-600 text-sm tracking-wider">ব্যবহারকারী</th>
                                    <th className="text-left py-4 px-6 font-medium text-gray-600 text-sm tracking-wider hidden md:table-cell">
                                        ইমেইল
                                    </th>
                                    <th className="text-left py-4 px-6 font-medium text-gray-600 text-sm tracking-wider">ভূমিকা</th>
                                    <th className="text-right py-4 px-6 font-medium text-gray-600 text-sm tracking-wider">অ্যাকশন</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center space-x-3">
                                                <Avatar className="h-10 w-10 border border-gray-200">
                                                    <AvatarImage src={user.photo || "/placeholder.svg"} alt={user.name} />
                                                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
                                                        {getInitials(user.name)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-gray-900">{user.name}</p>
                                                    <p className="text-xs text-gray-500 md:hidden">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 hidden md:table-cell">
                                            <span className="text-gray-700">{user.email}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <Badge variant="outline" className={getRoleBadgeStyle(user.role)}>
                                                {user.role}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => onEdit(user)}
                                                    className="flex items-center gap-1 h-9 border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                                                >
                                                    <Edit className="h-3.5 w-3.5" />
                                                    <span className="hidden sm:inline">Edit</span>
                                                </Button>

                                                {onDelete && (
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="flex items-center gap-1 h-9 border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                                                            >
                                                                <Trash2 className="h-3.5 w-3.5" />
                                                                <span className="hidden sm:inline">Delete</span>
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This action cannot be undone. This will permanently delete the user{" "}
                                                                    <strong>{user.name}</strong> and remove their data from the system.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction
                                                                    onClick={() => onDelete(user.id)}
                                                                    className="bg-red-600 hover:bg-red-700"
                                                                >
                                                                    Delete User
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
