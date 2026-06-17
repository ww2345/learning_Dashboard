"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Something went wrong
        </h2>

        {process.env.NODE_ENV === "development" && (
          <p className="mb-4 text-sm text-zinc-400">
            {error.message}
          </p>
        )}

        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
