'use client';

import React, { Suspense, useEffect, useState } from "react";
import { getUsers, deleteUser, User } from "@/actions/users"; // Import User type
import UserForm from '@/components/user-mgt/UserForm';
import UserList from '@/components/user-mgt/UserList';
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, ListChecks, UsersIcon } from 'lucide-react';

function UserListSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-3 w-[150px]" />
                    </div>
                    <div className="flex space-x-2">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-16" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]); // Define users as an array of User
    const [editingUser, setEditingUser] = useState<User | null>(null); // Allow null or User

    const fetchUsers = async () => {
        const response = await getUsers(); // Assuming getUsers() returns { success: boolean; data: User[] }
        if (response.success) setUsers(response.data); // Set the users array
    };

    const handleDeleteUser = async (userId: string) => {
        const confirmed = confirm("Are you sure you want to delete this user?");
        if (!confirmed) return;

        try {
            const response = await deleteUser(userId);
            if (response.success) {
                alert("User deleted successfully!");
                fetchUsers(); // Refresh the user list
            } else {
                alert("Failed to delete user.");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("An error occurred while deleting the user.");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="bg-white pb-16 min-h-screen">
            {/* Header */}
            <div className="w-full text-center space-y-4 pb-4 sticky top-[1px] z-10 px-8">
                <div className="w-full inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md">
                    <UsersIcon className="h-6 w-6" />
                    <h1 className="text-xl font-bold">ব্যবহারকারী পরিচালন করুন</h1>
                    <p className="text-slate-100 max-w-2xl mx-auto">
                        নতুন ব্যবহারকারী তৈরি, সম্পাদনা ও মুছে ফেলার কার্যক্রম পরিচালনা করুন।
                    </p>
                </div>
            </div>

            <Suspense fallback={<UserListSkeleton />}>
                <div className="space-y-12 px-8">
                    <UserForm
                        editingUser={editingUser}
                        onFinishEdit={() => {
                            setEditingUser(null);
                            fetchUsers();
                        }}
                    />
                    <UserList
                        users={users}
                        onEdit={(user) => setEditingUser(user)}
                        onDelete={handleDeleteUser}
                    />
                </div>
            </Suspense>
        </div>
    );
}
