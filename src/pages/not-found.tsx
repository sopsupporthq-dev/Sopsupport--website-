export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7fbf8] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-black text-emerald-950 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-flex rounded-full bg-emerald-950 px-6 py-3 text-sm font-bold text-white"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
