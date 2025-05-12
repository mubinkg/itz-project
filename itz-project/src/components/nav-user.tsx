// filepath: /Users/imtiazmamun/Documents/GitHubProjects/Full-Stack/itz-project/src/app/(protected)/dashboard/dashboard.tsx
import { useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar'; // Assuming you create a Sidebar component
import { Header } from '@/components/Header'; // Assuming you create a Header component
import { getServerSideProps } from 'next';

export default function Dashboard({ data }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-green-700">Dashboard</h1>
          {/* Add your dashboard components here */}
        </main>
      </div>
    </div>
  );
}

// Server-side rendering
export const getServerSideProps = async () => {
  // Fetch data here if needed
  const data = {}; // Replace with actual data fetching logic

  return {
    props: {
      data,
    },
  };
};