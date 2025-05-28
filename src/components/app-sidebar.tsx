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

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: User | null;
  role: string; // 'ADMIN' | 'EDITOR' | 'USER'
};

export function AppSidebar({ user, role, ...props }: AppSidebarProps) {
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
