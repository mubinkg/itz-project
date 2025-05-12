import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <SidebarInset className="flex-1 bg-gray-50 dark:bg-gray-900 p-6">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}