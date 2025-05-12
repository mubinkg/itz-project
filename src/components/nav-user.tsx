import Image from "next/image";

interface NavUserProps {
  user: { name: string; avatar: string };
}

export function NavUser({ user }: NavUserProps) {
  return (
    <div className="flex items-center px-4 py-3 space-x-3">
      <Image
        src={user.avatar}
        alt={user.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {user.name}
        </p>
        <a
          href="/settings"
          className="text-xs text-gray-600 hover:underline dark:text-gray-400"
        >
          Settings
        </a>
      </div>
    </div>
  );
}