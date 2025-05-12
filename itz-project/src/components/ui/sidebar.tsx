// filepath: /Users/imtiazmamun/Documents/GitHubProjects/Full-Stack/itz-project/src/app/(protected)/dashboard/dashboard.tsx
import { useState } from 'react';
import { Sidebar } from 'shadcn'; // Assuming shadcn has a Sidebar component
import { Button } from 'shadcn'; // Example button component
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Sidebar.Item onClick={() => handleNavigation('/dashboard')}>Dashboard</Sidebar.Item>
        <Sidebar.Item onClick={() => handleNavigation('/settings')}>Settings</Sidebar.Item>
        <Sidebar.Item onClick={() => handleNavigation('/profile')}>Profile</Sidebar.Item>
        <Sidebar.Item onClick={() => handleNavigation('/logout')}>Logout</Sidebar.Item>
      </Sidebar>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-green-700">Dashboard Page</h1>
        {/* Add more components here */}
        <Button onClick={() => handleNavigation('/some-action')} className="mt-4 bg-red-500 hover:bg-red-700 text-white">
          Perform Action
        </Button>
      </div>
    </div>
  );
}