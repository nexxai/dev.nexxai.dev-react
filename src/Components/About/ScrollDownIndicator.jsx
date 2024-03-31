export default function ScrollDownIndicator() {
  return (
    <div className="flex flex-col items-center justify-center pb-8 text-2xl font-semibold text-white animate-pulse">
      <div className="text-sm text-white/40">Scroll down</div>

      <div className="mt-2 animate-bounce text-white/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className="w-6 h-6 animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
