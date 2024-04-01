import { SpotlightCard } from "../UI/SpotlightCard";
import ReverseText from "../CV/ReverseText";
import { CopyToClipboard } from "react-copy-to-clipboard";

const email = "moc.liamg@iaxxen";
const phone = "5346-924 785 1+";
const reverse = (value) => {
  return value.split("").reverse().join("");
};

export default function ContactDetails() {
  return (
    <SpotlightCard
      from="#1cd1c6"
      via="#407cff"
      size={300}
      className="rounded-[--radius] bg-white/10 p-6 [--radius:theme(borderRadius.xl)] print:p-0 print:rounded-none"
    >
      <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-700"></div>

      {/* Printable version */}
      <div className="relative print:text-black print:text-sm">
        <div className="space-y-2 md:hidden print:flex print:space-y-0 print:justify-between">
          <div className="flex justify-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition duration-300 group-hover:text-zinc-500"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <button className="transition duration-200 group-hover:text-zinc-400">
              <span>
                <ReverseText value="nexxai@gmail.com" />
              </span>
            </button>
          </div>
          <div className="flex justify-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition duration-300 group-hover:text-zinc-500"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <button className="transition duration-200 group-hover:text-zinc-400">
              <span>
                <ReverseText value="+1 587 429 6435" />
              </span>
            </button>
          </div>
          <div className="flex justify-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition duration-300 group-hover:text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Calgary"
              className="block transition duration-200 group-hover:text-zinc-400"
            >
              Calgary, Canada
            </a>
          </div>
        </div>

        {/* Web version */}
        <div className="hidden md:block">
          <div className="flex justify-between space-x-2">
            <div className="flex space-x-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 transition duration-300 group-hover:text-zinc-500"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <CopyToClipboard
                text={reverse(email)}
                onCopy={() => alert("Copied!")}
              >
                <button className="transition duration-200 group-hover:text-zinc-400">
                  <span>
                    <ReverseText value="nexxai@gmail.com" />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex space-x-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 transition duration-300 group-hover:text-zinc-500"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>

              <CopyToClipboard
                text={reverse(phone)}
                onCopy={() => alert("Copied!")}
              >
                <button className="transition duration-200 group-hover:text-zinc-400">
                  <span>
                    <ReverseText value="+1 587 429 6435" />
                  </span>
                </button>
              </CopyToClipboard>
            </div>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Calgary"
              className="flex space-x-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 transition duration-300 group-hover:text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="block transition duration-200 group-hover:text-zinc-400">
                Calgary, Canada
              </span>
            </a>
          </div>
        </div>

        <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:justify-between mt-6 print:mt-2">
          <a
            target="_blank"
            href="https://linkedin.com/in/justinscottsmith"
            className="flex justify-center space-x-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition rounded-md group-hover:text-blue-800 group-hover:bg-zinc-200"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>

            <span className="block transition duration-200 group-hover:text-zinc-400 print:hidden">
              LinkedIn
            </span>
            <span className="hidden print:block">
              linkedin.com/in/justinscottsmith
            </span>
          </a>
          <a
            target="_blank"
            href="https://youtube.com/@nexxai_dev"
            className="flex justify-center space-x-2 group print:hidden"
          >
            <svg
              className="w-6 h-6 transition rounded-md group-hover:text-red-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>

            <span className="block transition duration-200 group-hover:text-zinc-400">
              YouTube
            </span>
          </a>
          <a
            target="_blank"
            href="https://github.com/nexxai"
            className="flex justify-center space-x-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 transition duration-300 bg-black rounded-md group-hover:invert"
            >
              <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>

            <span className="block transition duration-200 group-hover:text-zinc-400 print:hidden">
              GitHub
            </span>
            <span className="hidden print:block">github.com/nexxai</span>
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
