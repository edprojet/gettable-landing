export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-semibold mb-4">GetTable</h1>
      
      <p className="text-center text-lg text-gray-300 max-w-md mb-8">
        The app that lets you find & join tables instantly in your city.  
        Built for nightlife. Fast. Simple. Social.
      </p>

      <a
        href="#"
        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Download on the App Store (coming soon)
      </a>

      <p className="text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} GetTable. All rights reserved.
      </p>
    </main>
  );
}