import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('user')?.value;
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen">
        {/* Sidebar */}
        <AppSidebar user={user} />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header backdrop-blur */}
          {/* <header className="sticky top-0 z-30 flex h-16 items-center bg-white/30 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 px-4 shadow-sm"> */}
          <header className="sticky top-0 z-30 flex h-16 items-center">
            <SidebarTrigger className="mr-2" />
            {/* You can add a logo or page title here if needed */}
          </header>

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
