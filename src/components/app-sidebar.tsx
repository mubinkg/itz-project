"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { Home, Settings, Folder, User, Menu } from "lucide-react"; // Import Lucide Icons
import { useState } from "react";

const data = {
  teams: ["Team A", "Team B", "Team C"], // Example data for teams
  navMain: [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Settings", href: "/settings", icon: Settings },
  ],
  projects: [
    { label: "Project 1", href: "/projects/1", icon: Folder },
    { label: "Project 2", href: "/projects/2", icon: Folder },
  ],
  user: { name: "John Doe", avatar: "/avatar.png" }, // Example user data
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar
        collapsible="icon"
        className={`transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
        {...props}
      >
        {/* Sidebar Header */}
        <SidebarHeader>
          <div className="flex items-center justify-between px-4 py-3">
            <h2
              className={`text-lg font-bold text-gray-800 dark:text-gray-100 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              My App
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* Sidebar Rail (Collapsed State) */}
      {isCollapsed && (
        <SidebarRail>
          <div className="flex flex-col items-center space-y-4 py-4">
            {data.navMain.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-100 dark:hover:bg-green-900"
                title={item.label}
              >
                <item.icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
            ))}
            {data.projects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                title={project.label}
              >
                <project.icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
            ))}
          </div>
        </SidebarRail>
      )}
    </div>
  );
}