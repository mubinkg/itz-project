'use client';

import * as React from 'react';
import {
  BookOpen,
  Bot,
  SquareTerminal,
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar';
import { User } from '@/generated/prisma';

// This is sample data.
const data = {
  user: {
    name: 'User',
    email: 'abc@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'ড্যাশবোর্ড',
      url: '/dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'মৌজা তৈরি করুন',
      url: '/create-mouja',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'মৌজার নাথ তৈরি করুন',
      url: '/create-nothi',
      icon: Bot,
    },
    {
      title: 'দাগ নং এর তালিকা',
      url: '/plot-list',
      icon: BookOpen,
    },
  ],
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: User | null;
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
