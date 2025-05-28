import Link from "next/link";

const AccessDenied = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <div className="flex flex-col items-center space-y-6">
          <svg
            className="w-24 h-24 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>

          <h1 className="text-2xl font-bold text-gray-800">প্রবেশাধিকার অস্বীকৃত</h1>
          <p className="text-gray-600 text-sm">
            এই পৃষ্ঠাটি অ্যাক্সেস করার জন্য আপনার প্রয়োজনীয় অনুমতি নেই। অনুগ্রহ করে আপনার প্রশাসকের সাথে যোগাযোগ করুন।
          </p>

          <Link href="/dashboard" passHref>
            <button
              className="text-green-700 border border-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition"
              title="ড্যাশবোর্ডে ফিরে যান"
            >
              ড্যাশবোর্ডে ফিরে যান
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;