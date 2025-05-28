'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { getUsers, deleteUser, User } from '@/actions/users';
import UserForm from '@/components/user-mgt/UserForm';
import UserList from '@/components/user-mgt/UserList';
import { Skeleton } from '@/components/ui/skeleton';

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

export default function UsersPageClient({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers); // Initialize with server data
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const response = await getUsers();
    if (response.success) setUsers(response.data);
  };

  const handleDeleteUser = async (userId: string) => {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    try {
      const response = await deleteUser(userId);
      if (response.success) {
        alert('User deleted successfully!');
        fetchUsers(); // Refresh the user list
      } else {
        alert('Failed to delete user.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting the user.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
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
  );
}