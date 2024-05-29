export default function PrintOnly() {
  return (
    <div className="justify-center hidden w-full text-blue-700 print:flex font-heading">
      <a
        className="flex space-x-2 print:-py-2"
        href="https://dev.nexxai.dev/cv"
      >
        <span className="block">Online version</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 print:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </a>
    </div>
  );
}
