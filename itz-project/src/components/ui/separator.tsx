// filepath: /Users/imtiazmamun/Documents/GitHubProjects/Full-Stack/itz-project/src/app/(protected)/dashboard/page.tsx
import { Sidebar } from '@/components/Sidebar'; // Assuming you have a Sidebar component
import { Header } from '@/components/Header'; // Assuming you have a Header component
import { Footer } from '@/components/Footer'; // Assuming you have a Footer component
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page with modern design',
};

export default async function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-green-700">Dashboard Page</h1>
          {/* Add your main content here */}
        </main>
        <Footer />
      </div>
    </div>
  );
}