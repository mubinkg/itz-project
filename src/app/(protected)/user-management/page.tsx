import React, { Suspense, useEffect, useState } from "react";
import { getUsers, deleteUser, User } from "@/actions/users"; // Import User type
import UserForm from '@/components/user-mgt/UserForm';
import UserList from '@/components/user-mgt/UserList';
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, ListChecks, UsersIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import UsersPageClient from '@/components/user-mgt/UsersPageClient';
import AccessDenied from '@/components/common/AccessDenied';

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

export default async function UsersPage() {
  // Get the role from cookies
  const cookieStore = await cookies();
  const role = cookieStore.get('user_vumi_role')?.value || '';

  // Block access if the role is 'USER'
  if (role === 'USER') {
    return <AccessDenied />;
  }

  // Fetch users from the server
  const response = await getUsers(); // Assuming getUsers() returns { success: boolean; data: User[] }
  const users = response.success ? response.data : [];

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

      {/* Pass data to the client component */}
      <UsersPageClient initialUsers={users} />
    </div>
  );
}