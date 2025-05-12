export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
        404
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Page not found.
      </p>
    </div>
  );
}