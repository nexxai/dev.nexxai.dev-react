export default function Summary() {
  return (
    <div className="z-10 mt-8 text-zinc-300 group">
      <div className="relative mb-2 text-2xl font-semibold font-heading">
        <div className="absolute bottom-0 h-2 px-2 -ml-2 text-transparent transition opacity-60 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:transition group-hover:opacity-100 rotate-1">
          Summary
        </div>
        <div className="absolute z-20 text-transparent print:text-black bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
          Summary
        </div>
        <div className="relative z-20 text-transparent">Summary</div>
      </div>
      <p className="text-lg text-justify print:text-sm print:text-black">
        I am pivoting from a 20+ year career in enterprise architecture, DevOps,
        infrastructure management, and leadership after discovering a new love
        for programming. I have always dabbled in coding in various side
        projects and recently realized that my true passion is in directly
        bringing new ideas to life. I am extremely excited to start this next
        chapter of my life and am eager to work on projects that make the world
        a better place.
      </p>
    </div>
  );
}
