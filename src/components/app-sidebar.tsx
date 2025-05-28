'use client';

import * as React from 'react';
import {
  LayoutDashboard,
  MapPin,
  Sparkles,
  Building2,
  Users,
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
import { cookies } from 'next/headers';

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: User | null;
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  let role = '';
  if (typeof window !== 'undefined') {
    role = document.cookie
      .split('; ')
      .find(row => row.startsWith('user_vumi_role='))
      ?.split('=')[1] || '';
  }

  const navAll = [
    {
      title: 'ড্যাশবোর্ড',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'মৌজা তৈরি করুন',
      url: '/create-mouja',
      icon: MapPin,
    },
    {
      title: 'মৌজার নথি তৈরি করুন',
      url: '/create-nothi',
      icon: Sparkles,
    },
    {
      title: 'পরিত্যক্ত সম্পত্তি তৈরি করুন',
      url: '/create-abandoned-property',
      icon: Building2,
    },
    {
      title: 'ব্যবহারকারী পরিচালন',
      url: '/user-management',
      icon: Users,
    },
    // {
    //   title: 'দাগ নং এর তালিকা',
    //   url: '/plot-list',
    //   icon: BookOpen,
    // },
  ];

  let navFiltered: typeof navAll = [];

  if (role === 'ADMIN') {
    navFiltered = navAll;
  } else if (role === 'EDITOR') {
    navFiltered = navAll.filter(item => item.url !== '/user-management');
  } else if (role === 'USER') {
    navFiltered = navAll.filter(item => item.url === '/dashboard');
  }


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={navFiltered} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
