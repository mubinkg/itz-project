import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavProjectsProps {
  projects: { label: string; href: string; icon: LucideIcon }[];
}

export function NavProjects({ projects }: NavProjectsProps) {
  return (
    <div className="mt-6">
      <h3 className="px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
        Projects
      </h3>
      <nav className="mt-2 space-y-2">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-red-100 dark:text-gray-200 dark:hover:bg-red-900"
          >
            <project.icon className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-200" />
            {project.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}