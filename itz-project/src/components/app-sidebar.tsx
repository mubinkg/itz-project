// filepath: /Users/imtiazmamun/Documents/GitHubProjects/Full-Stack/itz-project/src/app/(protected)/dashboard/DashboardLayout.tsx
import React from 'react';
import { Sidebar } from './Sidebar'; // Assuming you create a Sidebar component

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;