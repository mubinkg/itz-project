export default function DashboardPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Dashboard
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Cards */}
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">
            Card 1
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Description for card 1.
          </p>
        </div>
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">
            Card 2
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Description for card 2.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Card 3
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Description for card 3.
          </p>
        </div>
      </div>
    </div>
  );
}