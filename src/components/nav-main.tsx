import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavMainProps {
  items: { label: string; href: string; icon: LucideIcon }[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <nav className="space-y-2">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-green-100 dark:text-gray-200 dark:hover:bg-green-900"
        >
          <item.icon className="w-5 h-5 mr-2 text-gray-800 dark:text-gray-200" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}