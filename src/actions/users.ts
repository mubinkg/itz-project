'use server';

import { prisma } from '@/lib/db';
import { Role } from '@/generated/prisma'; // Import Role enum from Prisma

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    photo: string;
    role: 'ADMIN' | 'EDITOR' | 'USER';
};

export async function createUser({
  name,
  email,
  password,
  photo,
  role,
}: {
  name: string;
  email: string;
  password: string;
  photo: string;
  role: 'ADMIN' | 'EDITOR' | 'USER';
}) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        photo,
        role: role as Role, // Cast role to Role
      },
    });
    return { success: true, data: user, message: 'User created successfully!' };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, message: 'Failed to create user.' };
  }
}

export async function updateUser({
  id,
  name,
  email,
  password,
  photo,
  role,
}: {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  role: 'ADMIN' | 'EDITOR' | 'USER';
}) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
        photo,
        role: role as Role, // Cast role to Role
      },
    });
    return { success: true, data: user, message: 'User updated successfully!' };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, message: 'Failed to update user.' };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({ where: { id } });
    return { success: true, message: 'User deleted successfully!' };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, message: 'Failed to delete user.' };
  }
}

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({ orderBy: { name: 'asc' } });
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, data: [], message: 'Failed to fetch users.' };
  }
}